# 🎬 Teleprompter Studio

**Teleprompter Studio** is a professional teleprompter application designed for video production, broadcasting and live streaming.

Built as a **web-based application with Electron packaging**, it provides a clean dual-window workflow, smooth scrolling and full compatibility with physical teleprompter mirrors.

---

## ✨ Key Features

* 🖥 **Dual-window mode**

  * Control window
  * Dedicated Prompter window

* 🔄 **Mirror mode**

  * Designed for real teleprompter glass
  * Active only in Prompter Mode

* 🎚 **Smooth scrolling**

  * GPU acceleration (`translate3d`)
  * Inertia-based speed smoothing

* ⌨️ **Keyboard control**

  * `Space` — Start / Pause
  * `↑ / ↓` — Scroll speed
  * `← / →` — Font size *(paused only)*
  * `PageUp / PageDown` — Text width *(paused only)*
  * `Mouse Wheel` — Manual scroll *(paused only)*
  * `Home` — Jump to start

* 🔗 **Window synchronization**

  * Powered by `BroadcastChannel`
  * No servers or network dependencies

* 💾 **Auto-save**

  * Text content
  * Speed and layout
  * Prompter window position and size
  * Mirror state

---

## 🧠 Technology Stack

* HTML5
* CSS3 (GPU acceleration, `will-change`)
* Vanilla JavaScript
* `BroadcastChannel API`
* `requestAnimationFrame`
* `localStorage`
* Electron (desktop packaging)

---

## 📁 Project Structure

```
teleprompter-studio/
 ├── index.html
 ├── logo.png
 ├── package.json
 └── README.md
```

---

## 🖥 Prompter Mode

The prompter window can be opened:

* via **OPEN PROMPTER WINDOW** button
* or directly using:

```
index.html?mode=prompter
```

In this mode:

* UI controls are hidden
* text is fully synchronized
* mirror mode is supported
* window geometry is preserved

---

## ⚠️ Electron Build Notes

All assets must use **relative paths**.

Correct usage:

```html
<link rel="icon" href="logo.png">
<img src="logo.png">
```

`logo.png` must be placed next to `index.html` and included in the Electron build.

---

## 🖥 Running & Building

```bash
npm install
npm start
npm run build
```

The Windows portable executable will be generated in:

```
/dist
```

---

## 👤 Author

**Nurlan Akkainanov**
CEO, **DANA SYSTEMS**

---

## 🏢 Company

**DANA SYSTEMS**
*Systems That Think.*

---

## 📄 License

© 2026 DANA SYSTEMS
All rights reserved.
