import Hoodie from './hoodie'

// Hoodie
export const hoodie = Hoodie

// Hoodie account
export const account = hoodie.account

// Hoodie todos store
export const todos = new hoodie.store('todos')
