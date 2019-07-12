// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron')

// 可以使用nodejs的api也可以使用dom的api

// alert(process.versions.node)

// dom内容加载完毕
window.addEventListener('DOMContentLoaded',()=>{
    // alert('greeting from the | DOM side')
    ipcRenderer.send('message','hello ipc')
    ipcRenderer.on('reply',(event,args)=>{
        document.getElementById('message').innerHTML = args
    })
})
