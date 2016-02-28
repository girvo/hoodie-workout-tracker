import {observable, computed} from 'mobx'
import autoBind from 'react-autobind'
import hoodie from '../hoodie'
import UIStore from './UIStore'

export class UserStore
{
    @observable username = ''
    @observable password = ''
    @observable loading = false
    @observable error = null
    @observable details = null
    @observable loggedIn = false
    @computed get hasErrors() {
        return this.error !== null
    }

    constructor() {
        if (hoodie.account.isSignedIn()) {
            this.username = hoodie.account.username
            this.loggedIn = true
        }

        // Bind to our hoodie events
        hoodie.account.on('signup', (details) => {
            this.username = details.username
            this.details = details
        })

        hoodie.account.on('signout', (details) => {
            this.username = ''
            this.details = null
            this.loggedIn = false
        })

        hoodie.account.on('signin', (details) => {
            this.username = details.username
            this.details = details
            this.loggedIn = true
        })

        autoBind(this)
    }

    login({ username, password }) {
        this.loading = true
        this.error = null

        hoodie.account
            .signIn({
                username,
                password
            })
            .then(res => {
                this.loading = false
                UIStore.router.push('/')
            })
            .catch(err => {
                this.loading = false
                this.error = err
            })
    }

    logout() {
        this.loading = true
        this.error = null

        // Sign-out via Hoodie, which will trigger the event listeners above
        hoodie.account
            .signOut()
            .then(details => {
                this.loading = false
                UIStore.router.push('/')
            })
            .catch(err => {
                this.loading = false
                this.error = err
            })
    }

    signUp({username, password}) {
        this.loading = true
        this.error = null

        hoodie.account
            .signUp({
                username,
                password
            })
            .then(u => {
                this.loading = false
            })
            .catch(err => {
                this.loading = false
                this.error = err
            })
    }
}

// Instantiate and export the singleton
let singleton = new UserStore()
export default singleton

// $Debug
global.user = singleton
