# Changelog

All notable changes to this project will be documented in this file.

The format is based on **Keep a Changelog**,
and this project adheres to **Semantic Versioning**.

---

## [1.0.0] — 2026-01-22

### 🎉 First Production Release

#### Added

* Dual-window teleprompter mode (Control + Prompter)
* Smooth GPU-accelerated scrolling (`translate3d`)
* Mirror mode for professional teleprompter hardware
* Keyboard shortcuts for full hands-free control
* Real-time synchronization via `BroadcastChannel`
* Auto-save of text, speed, layout and prompter window geometry
* Portable Windows build via Electron

#### Improved

* Scroll smoothing with inertia
* Stable animation loop using `requestAnimationFrame`
* UI locking during playback to prevent layout jitter
* Optimized text rendering and layout recalculation

#### Fixed

* Resource path issues during Electron build
* State desync between main and prompter windows
* Accidental layout recalculation during live scrolling

---

## [0.9.0] — Internal

### Pre-release

* Initial architecture
* Feature prototyping
* Performance tuning
