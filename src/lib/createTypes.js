export function createTypes(...args) {
    return args.reduce((types, type) => {
        [].concat(type).map(v => types[v] = v)
        return types
    }, {})
}

export function async(type) {
    return [`${type}_REQUEST`, `${type}_SUCCESS`, `${type}_FAILURE`]
}
