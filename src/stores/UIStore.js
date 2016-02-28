import {observable} from 'mobx'
import autoBind from 'react-autobind'

export class UIStore
{
    @observable pageTitle = 'Workout'
    @observable menuOpen = false
    @observable loggedIn = false

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
}

// Instatiate the singleton
let singleton = new UIStore()

// Export the singleton, not the class
export default singleton
