// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// 可以使用nodejs的api也可以使用dom的api

alert(process.versions.node)

window.addEventListener('DOMContentLoaded',()=>{
    alert('greeting from the | DOM side')
})
