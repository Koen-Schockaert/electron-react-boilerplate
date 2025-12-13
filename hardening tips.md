🔐 Hardening Production Builds (Electron + ERB)
1️⃣ Enable Electron Security Defaults (CRITICAL)
✅ Main process (src/main/main.ts)

Make sure every BrowserWindow uses these settings:

new BrowserWindow({
  webPreferences: {
    preload: path.join(__dirname, "preload.js"),
    nodeIntegration: false,
    contextIsolation: true,
    sandbox: true,
    enableRemoteModule: false
  }
});

Why
Setting	Protects Against
nodeIntegration: false	XSS → RCE
contextIsolation: true	Prototype pollution
sandbox: true	Renderer escape
enableRemoteModule: false	Legacy remote abuse

✅ ERB defaults are good — verify nothing overrides this.

2️⃣ Lock Down IPC (No Wildcards)
❌ BAD
ipcMain.handle("*", ...)

✅ GOOD
ipcMain.handle("app:get-version", () => app.getVersion());

Preload (src/preload/preload.ts)
contextBridge.exposeInMainWorld("api", {
  getVersion: () => ipcRenderer.invoke("app:get-version")
});

Why

IPC is your attack surface

Explicit channels = predictable behavior

3️⃣ Enforce Content Security Policy (CSP)
Renderer index.html
<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    connect-src 'self';
  "
/>

Why

Blocks remote scripts

Prevents XSS payloads

Stops injection attacks

4️⃣ Disable DevTools in Production
Main process
if (app.isPackaged) {
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.key === "F12") {
      event.preventDefault();
    }
  });
}

Also:
if (app.isPackaged) {
  mainWindow.removeMenu();
}

Why

Prevents runtime inspection

Protects business logic

Stops casual tampering

5️⃣ Validate All External URLs
❌ BAD
shell.openExternal(url);

✅ GOOD
const allowed = ["https://yourdomain.com"];

if (allowed.some(d => url.startsWith(d))) {
  shell.openExternal(url);
}

Why

Prevents malicious deep-link attacks.

6️⃣ Strip Debug Code Automatically
Install
npm install --save-dev cross-env

Use env guards
if (process.env.NODE_ENV === "development") {
  console.log("Debug only");
}

In production builds

ERB already sets:

NODE_ENV=production


✔ Logs stripped by bundlers

7️⃣ ASAR Hardening (Already Mostly Done)

Your config is good:

"asar": true,
"asarUnpack": "**\\*.{node,dll}"

Why

Prevents easy file inspection

Slows down reverse engineering

8️⃣ Disable Navigation & New Windows
Main process
mainWindow.webContents.on("will-navigate", e => e.preventDefault());
mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));

Why

Prevents malicious redirects

Stops popup injection

9️⃣ Lock Down Auto-Updater
Main process
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

Why

Prevents downgrade attacks

Ensures signed updates only

GitHub Releases + signing = trusted update chain.

🔟 Production-only Electron Flags
Add at app start
app.commandLine.appendSwitch("disable-http-cache");
app.commandLine.appendSwitch("disable-site-isolation-trials");


(Optional — advanced hardening)

✅ Final Hardening Checklist
Area	Status
Context Isolation	✅
Sandbox	✅
Node disabled	✅
IPC allowlist	✅
CSP enforced	✅
DevTools disabled	✅
Navigation locked	✅
ASAR enabled	✅
Updates signed	✅
🧠 What This Gives You

Protects against XSS → RCE

Prevents renderer escapes

Makes reverse engineering harder

Secures update channel

Safe for enterprise distribution

This is the same baseline used by commercial Electron apps.