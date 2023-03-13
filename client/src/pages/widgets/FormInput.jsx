import React from 'react'
import { TextField } from '@mui/material'
import { FlexBetween } from 'components/FlexBetween'

const FormInput = (props) => {
  const { placeholder, onChange, ...inputProps } = props

  return (

        <TextField
          sx={{margin: 1}}
          type="text"
          placeholder={placeholder}
          {...inputProps}
          onChange={onChange}
        />

  )
}

export default FormInput
 