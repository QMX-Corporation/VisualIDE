# VisualIDE

A simple, lightweight, and powerful IDE environment designed for mobile devices (Android) with a focus on code editing and embedded custom security.

Developed by **QMX Corporation**.

---

## 🚀 Features

* **Custom Code Editor Core**: Manage editor state, active file buffers, line modifications, and target language configurations (`editor.js`, `editorManager.js`).
* **Built-in Security Pipeline (AEMos)**: Advanced custom bitwise masking combined with 32-round AES encryption algorithms (`aemos.js`, `encrypter.js`).
* **Data Masking & Protection**: Automatic field masking and memory protection against unauthorized RAM reads and inspection plugins (`masks.js`).
* **Authentication System**: Integrated login interface with support for local session handling and GitHub API token mapping (`auth.js`, `login.js`).
* **Modular Architecture**: Independent sub-modules for UI components, keyboard input parsing, and system output drivers (`read.js`, `print.js`).

---

## 📁 Repository Structure

```text
VisualIDE/
├── src/
│   ├── AEMos/              # Custom Encryption Engine & Security Pipelines
│   │   ├── aemos.js        # Magic key generation & bitwise shift masks
│   │   └── encrypter.js    # 32-round AES implementation (S-Box, Galois Field Mix)
│   │
│   ├── interface/          # User Interface Assets & Styling
│   │   ├── Login/
│   │   │   ├── favicon.svg # Application Vector Logo
│   │   │   ├── login.css   # Dark-themed UI stylesheet
│   │   │   ├── login.html  # Authentication markup structure
│   │   │   └── login.js    # Form DOM handler & event listeners
│   │   ├── index.html      # Main app entry point
│   │   └── style.css       # Core IDE theme stylesheet
│   │
│   ├── Keyboard/           # Input Capture
│   │   └── read.js         # Flexible HTML element and DOM input reader
│   │
│   ├── KiLa/               # Custom Extension / System Drivers
│   │   └── kila.js         
│   │
│   ├── libs/               # External Libraries (Reserved)
│   │
│   ├── print/              # Output Drivers
│   │   └── print.js        # Centralized console output handling
│   │
│   ├── security/           # Dynamic In-Memory Protection
│   │   └── masks.js        # XOR-OR dynamic masking for sensitive credentials
│   │
│   ├── auth.js             # User authentication flow controller
│   ├── core.js             # Main system orchestration logic
│   ├── editor.js           # Single file editor class definition
│   └── editorManager.js    # Tab manager & multi-file lifecycle handler
│
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 🛡️ Security Architecture Overview
* **The system includes a custom security layer designed to prevent memory sniffing and unauthorized access to tokens or credentials:**
* **AEMos: Generates dynamic MASK_KEY values based on bitwise shift loops (<<, >>, XOR, OR).**
* **In-Memory Masking: Sensitive strings (passwords, emails, GitHub personal access tokens) are converted to code points and masked in memory before use.**
* **32-Round AES Cipher: Extends standard 10-round AES into a 32-round pipeline combined with non-linear bitwise operations (subBytes, mixColumns, invMixColumns).**

---

## 🛠️ Usage & Setup
### Prerequisites
* **A web browser or an embedded webview environment (Android Termux, WebServer, or native wrapper).**
* **Node.js / Local HTTP Server (optional for module loading).**

---

## RUNNING LOCALLY
* **1. Clone the Repository**
```bash
git clone https://github.com/QMX-Corporation/VisualIDE.git
```
* **2. Serve the static files using your preferred local server (e.g., via Termux or Live Server):**
```bash
npx http-server src/
```
* **3. Open src/interface/Login/login.html in your browser**

* ---

## 📄 License
* **This project is licensed under the MIT License - see the LICENSE file for details.**
* **Copyright (c) QMX Corporation.**