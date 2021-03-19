import React, { useContext } from 'react'
import { Button } from 'react-native'

import GlobalContext from '../context/global/globalContext'

const AddMenu = () => {

    // context 
    const { addMenu } = useContext(GlobalContext)

    return <Button
        title="Outline button"
        onPress={addMenu}
    />
}


export default AddMenu