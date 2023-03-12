import React from 'react'
import { InputBase } from '@mui/material'
import { FlexBetween } from 'components/FlexBetween'

const FormInput = (props) => {
  const { placeholder, onChange, ...inputProps } = props

  return (

        <InputBase
          type="text"
          placeholder={placeholder}
          {...inputProps}
          onChange={onChange}
        />

  )
}

export default FormInput
