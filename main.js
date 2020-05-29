const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  
  const win = new BrowserWindow({
    minHeight: 600,
    minWidth: 800,
    width: 800,
    height: 600,
    title: "TeamMusic PC client",
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      webPreferences: true
    }
  })

win.loadFile('index.html');

win.removeMenu();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})