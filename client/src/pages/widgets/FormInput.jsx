import React from 'react'
import { InputBase } from '@mui/material'
import { FlexBetween } from 'components/FlexBetween'

const FormInput = (props) => {
  const { placeholder, onChange, ...inputProps } = props

  return (
    <FlexBetween>
      <FlexBetween>
        <InputBase
          type="text"
          placeholder={placeholder}
          {...inputProps}
          onChange={onChange}
        />
      </FlexBetween>
    </FlexBetween>
  )
}

export default FormInput
