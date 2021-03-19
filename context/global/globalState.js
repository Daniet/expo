import React, { useReducer } from 'react'

import GlobalReducer from './globalReducer'
import GlobalContext from './globalContext'

import { ADD_MENU } from '../../types/index'

const GlobalState = props => {
    // state init
    const initialState = {
        menu: []
    }
    // user reducer with dispach
    const  [state, dispach] = useReducer(GlobalReducer, initialState)

    // function mnenu
    const addMenu = () => {
        dispach({
            type: ADD_MENU,
            payload: 'nuevo'
        })
    }

    return <GlobalContext.Provider value={{
        menu: state.menu,
        addMenu
    }}>
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalState