const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const mainStatePath = path.join(app.getPath('userData'), 'main-window-state.json');
const prompterStatePath = path.join(app.getPath('userData'), 'prompter-window-state.json');
// Путь изменен на корень проекта
const iconPath = path.join(__dirname, 'logo.png');

function createWindow() {
  let mainState = { width: 1200, height: 800 };
  try {
    if (fs.existsSync(mainStatePath)) {
      mainState = JSON.parse(fs.readFileSync(mainStatePath));
    }
  } catch (e) {
    console.error("Ошибка чтения конфига пульта", e);
  }

  const win = new BrowserWindow({
    x: mainState.x,
    y: mainState.y,
    width: mainState.width,
    height: mainState.height,
    title: "Teleprompter Studio",
    icon: iconPath, 
    backgroundColor: '#000000',
    autoHideMenuBar: true,
    webPreferences: { 
      contextIsolation: false, 
      nodeIntegration: true 
    }
  });

  win.on('close', () => {
    if (!win.isMaximized()) {
      fs.writeFileSync(mainStatePath, JSON.stringify(win.getBounds()));
    }
  });

  win.loadFile('index.html');

  win.webContents.on('will-navigate', (event, url) => {
    if (url.startsWith('http')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }

    let pState = { width: 800, height: 600 };
    try {
      if (fs.existsSync(prompterStatePath)) {
        pState = JSON.parse(fs.readFileSync(prompterStatePath));
      }
    } catch (e) {}

    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        x: pState.x,
        y: pState.y,
        width: pState.width,
        height: pState.height,
        icon: iconPath, 
        title: "Teleprompter Studio - Prompter Mode",
        autoHideMenuBar: true,
        backgroundColor: '#000000',
        webPreferences: { 
          nodeIntegration: true, 
          contextIsolation: false 
        }
      }
    };
  });

  app.on('browser-window-created', (e, createdWin) => {
    if (createdWin !== win) {
      const savePrompterState = () => {
        if (!createdWin.isDestroyed() && !createdWin.isMaximized()) {
          fs.writeFileSync(prompterStatePath, JSON.stringify(createdWin.getBounds()));
        }
      };
      createdWin.on('move', savePrompterState);
      createdWin.on('resize', savePrompterState);
      createdWin.on('close', savePrompterState);
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});