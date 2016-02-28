import Hoodie from 'hoodie-client'

let hoodieInstance = new Hoodie({
    url: 'http://127.0.0.1:6004/_api'
})

export default hoodieInstance

// $Debug
window.hoodie = hoodieInstance
