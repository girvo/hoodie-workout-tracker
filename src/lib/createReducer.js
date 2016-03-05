/**
 * createReducer for wiring up redux-based reducers easily.
 *
 * Example:
 *   export default createReducer(initialState, {
 *     [INCREMENT_COUNTER]: increment,
 *     [DECREMENT_COUNTER]: decrement,
 *   })
 */
export default function createReducer(initialState, handlers) {
    return (state = initialState, action) =>
        handlers[action.type] ?
            handlers[action.type](state, action) :
            state;
}
