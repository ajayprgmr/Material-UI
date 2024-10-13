import React, { useState } from 'react';
import { Box, Button, Divider, Stack, Typography, ButtonGroup, ToggleButton, ToggleButtonGroup, Icon } from '@mui/material';
import * as Icons from '@mui/icons-material';

const ButtonMui = () => {
    const [formats, setFormats] = useState('');
    const handleformatChange = (event, newAlignment) => {
        setFormats(newAlignment);
    };
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}>
            <Typography variant='h2' fontSize={50} gutterBottom textAlign={'center'} color='primary'>
                Diff Buttons in Material UI
            </Typography>
            <Stack spacing={2} direction={'row'}>
                <Button variant='text' aria-label='text button' size='small'>Text Btn</Button>
                <Button variant='contained' aria-label='contained button' size='medium'>Contained Btn</Button>
                <Button variant='outlined' aria-label='outlined button' size='large'>Outlined Btn</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Typography variant='h5'>Text Btns | </Typography>
                <Button variant='text' color='primary' aria-label='primary button'>Primary</Button>
                <Button variant='text' color='secondary' aria-label='secondary button'>Secondary</Button>
                <Button variant='text' color='warning' aria-label='warning button'>Warning</Button>
                <Button variant='text' color='error' aria-label='error button'>Error</Button>
                <Button variant='text' color='success' aria-label='success button'>Success</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Typography variant='h5'>Contained Btns | </Typography>
                <Button variant='contained' color='primary' aria-label='primary button' disableElevation>Primary</Button>
                <Button variant='contained' color='secondary' aria-label='secondary button' disableRipple>Secondary</Button>
                <Button variant='contained' color='warning' aria-label='warning button'>Warning</Button>
                <Button variant='contained' color='error' aria-label='error button'>Error</Button>
                <Button variant='contained' color='success' aria-label='success button'>Success</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Typography variant='h5'>outlined Btns | </Typography>
                <Button variant='outlined' color='primary' aria-label='primary button'>Primary</Button>
                <Button variant='outlined' color='secondary' aria-label='secondary button'>Secondary</Button>
                <Button variant='outlined' color='warning' aria-label='warning button'>Warning</Button>
                <Button variant='outlined' color='error' aria-label='error button'>Error</Button>
                <Button variant='outlined' color='success' aria-label='success button'>Success</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button startIcon={<Icons.Send />} variant='contained' >Send</Button>
                <Button endIcon={<Icons.Send />} variant='outlined'>Send</Button>
            </Stack>
            <Stack direction={'row'} >
                <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                    <Button onClick={() => alert('clicked')} >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleformatChange} exclusive>
                    {/* https://mui.com/material-ui/react-toggle-button/ */}
                    <ToggleButton value='bold' aria-label='bold'><Icons.FormatBold /></ToggleButton>
                    <ToggleButton value='itallic' aria-label='ittalic'><Icons.FormatItalic /></ToggleButton>
                    <ToggleButton value='underline' aria-label='underlined'><Icons.FormatUnderlined /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Divider width='1080px' color='primary' />
        </Box>
    );
};

export default ButtonMui;
