/**
 * createStore for wiring up redux-based reducers easily.
 *
 * Example:
 *   export default createStore(initialState, {
 *     [INCREMENT_COUNTER]: increment,
 *     [DECREMENT_COUNTER]: decrement,
 *   })
 */
export default function createStore(initialState, handlers) {
    return (state = initialState) =>
        handlers[action.type] ?
            handlers[action.type](state, action) :
            state;
}
