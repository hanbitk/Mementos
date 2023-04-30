import React, { Children } from 'react'
import { Stbutton } from '../../styles/Button.styles'

function Button({children, size, fontSize}) {
  return (
    <Stbutton size={size} fontSize={fontSize}>{children}</Stbutton>
  )
}

export default Button