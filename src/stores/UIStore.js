import {observable} from 'mobx'
import autoBind from 'react-autobind'

export class UIStore
{
    @observable pageTitle = 'Workout'
    @observable menuOpen = false
    @observable loading = false
    @observable location = {}

    constructor() {
        autoBind(this)
    }

    updatePageTitle(newTitle) {
        this.pageTitle = newTitle
    }

    toggleMenu() {
        if (this.menuOpen) {
            this.menuOpen = false
        } else {
            this.menuOpen = true
        }
    }

    closeMenu() {
        this.menuOpen = false
    }

    updateLocation(location) {
        this.location = Object.assign({}, location)
    }
}

// Instatiate the singleton
let singleton = new UIStore()
export default singleton

// $Debug
global.ui = singleton
