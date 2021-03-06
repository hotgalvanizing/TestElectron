// Modules to control application life and create native browser window

// 加载两个模块
const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//electron加载完成的时候
// app.on('ready', createWindow)

app.on('ready',() =>{
  const testMainWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      //使用nodejs的api
      nodeIntegration:true
    },
  })
  // testMainWindow.loadURL("http://www.baidu.com")
  testMainWindow.loadFile('test1.html')
  ipcMain.on('message',(event,args)=>{
      console.log(args)
      // event.sender.send('reply','reply')
      testMainWindow.send('reply','reply test main window')
  })

  // const secondMainWindow = new BrowserWindow({
  //   width:400,
  //   height:300,
  //   webPreferences:{
  //     nodeIntegration:true
  //   },
  //   parent:testMainWindow,
  // })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
