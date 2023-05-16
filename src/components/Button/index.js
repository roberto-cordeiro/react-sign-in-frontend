import React from  'react'

import { ButtonCad } from './styles'
function Button({children, ...props}){

    return <ButtonCad {...props}>{children}</ButtonCad>
}

export default Button