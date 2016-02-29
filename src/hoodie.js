import Hoodie from 'hoodie-client'

let hoodieInstance = new Hoodie({
    url: 'http://127.0.0.1:8080'
})

export default hoodieInstance

// $Debug
global.hoodie = hoodieInstance
