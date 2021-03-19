import { ADD_MENU } from '../../types/index'

export default (state, action) => {
    switch (action.type) {
        case ADD_MENU:
            return {
                ...state,
                menu: [...state.menu, action.payload]
            }
        default:
            return state
    }
}