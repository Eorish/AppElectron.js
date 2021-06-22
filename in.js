const { app, BrowserWindow } = require('electron');
BrowserWindow.MaximizeBox = true;
BrowserWindow.MinimizeBox = true;  
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: true,
        acceptFirstMouse: true,
        modal: true,
        title: "My new Application", icon:'icon.ico',
    });
    mainWindow.loadFile(__dirname + '/Example.html')
    mainWindow.setMenu(null)
    mainWindow.unmaximize(false);
    mainWindow.isMaximized = false;
    mainWindow.setResizable(false);
    mainWindow.setMovable(false);
}
app.on('ready', createWindow);
