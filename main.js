const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {

    const win = new BrowserWindow({
        minHeight: 600,
        minWidth: 800,
        width: 800,
        height: 600,
        title: "TeamMusic PC",
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            webPreferences: true
        }
    })

    win.loadFile('splash.html');

    win.removeMenu();

    win.openDevTools()
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

const client = require('discord-rich-presence')('716528465494540308');

client.updatePresence({
    state: 'TeamMusic',
    details: 'Listening music on TeamMusic',
    startTimestamp: Date.now(),
    endTimestamp: Date.now() + 1337,
    largeImageKey: './assets/favicon.png',
    smallImageKey: './assets/favicon.png',
    instance: true,
});