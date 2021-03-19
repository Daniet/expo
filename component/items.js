import React, { useContext } from 'react'
import { Text } from 'react-native'

import GlobalContext from '../context/global/globalContext'

const Items = () => {
    
    // menu context 
    const { menu } = useContext(GlobalContext)

    return <Text>{ menu.length }</Text>
}

export default Items