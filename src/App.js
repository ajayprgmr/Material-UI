import React from 'react'
import TypographyMui from './coponents/TypographyMui'
import ButtonMui from './coponents/ButtonMui'
import { Box, Divider } from '@mui/material'
import { TextFieldsMui } from './coponents/TextFieldsMui'
import { SelectMui } from './coponents/SelectMui'
import './index.css'
const App = () => {

  return (
    <Box sx={{ minWidth: '100%' }} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <TypographyMui />
      <Divider />
      <ButtonMui />
      <TextFieldsMui />
      <SelectMui />
    </Box>
  )


}

export default App