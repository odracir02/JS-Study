const { app, BrowserWindow } = require("electron");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 330,
    height: 450,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("index.html");
  win.removeMenu();
  //win.webContents.openDevTools()
  win.resizable = false;

  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
