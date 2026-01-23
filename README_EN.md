# 🎬 Teleprompter Studio v1.0.4

**Teleprompter Studio** is a professional teleprompter application designed for video production, broadcasting, and live streaming. Built as a high-performance web app with **Electron (NSIS Installer)** packaging.

---

## ✨ Key Features

### 🖥 Dual-window mode
* **Main Control Window:** Full control over settings, speed, and text.
* **Prompter Mode Window:** A clean interface without distracting elements for the speaker.

### 🔄 Mirror mode
* Special mode for working with physical teleprompter glass mirrors (beam splitters).
* Active only in the prompter window, without affecting the operator.

### 📍 Reading Marker (New)
* A visual guide line to help the speaker track the current line smoothly.
* Can be toggled on/off via the main control window.

### 🎚 Ultra-smooth scrolling
* **GPU Acceleration:** Uses `translate3d` for maximum fluidity.
* **Inertia Smoothing:** Easing algorithms for comfortable reading.

---

## ⌨️ Keyboard Control
| Key | Action |
| :--- | :--- |
| **Space** | Start / Pause |
| **↑ / ↓** | Adjust scroll speed |
| **← / →** | Font size (while paused) |
| **PageUp / PageDown** | Text width (while paused) |
| **Home** | Instant jump to the start |
| **Wheel** | Manual scroll (while paused) |

---

## 🧠 Technology Stack
* **Engine:** Vanilla JavaScript / Electron 40.0.0.
* **Build:** GitHub Actions (CI/CD) / NSIS Installer.
* **Optimization:** Distribution size reduced to **~92 MB**.

---

## 👤 Author
**Nurlan Akkainanov** CEO, **DANA SYSTEMS** Telegram: [@NurlanDS](https://t.me/NurlanDS)  
Website: [www.dana-systems.com](http://www.dana-systems.com)

## 🏢 Company
**DANA SYSTEMS** — *Systems That Think.* Software Development • Crypto Technologies • Infrastructure Solutions.

© 2026 DANA SYSTEMS. All rights reserved.
