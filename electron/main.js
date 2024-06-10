const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    let win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    const startURL = 'http://localhost:3000';
    win.loadURL(startURL);
    win.once('ready-to-show', () => win.show());
    win.on('closed', () => {
      win = null;
    })

}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (!BrowserWindow.getAllWindows().length) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})