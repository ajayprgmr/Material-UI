import { InputAdornment, Stack, TextField, Typography, Divider, Box, FormControl, Input, InputLabel, } from '@mui/material';
import * as Icons from '@mui/icons-material';
import React, { useState } from 'react';
import './TextFieldsMui.css'; // Import your CSS file here

export const TextFieldsMui = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Stack spacing={2} direction="column">
            <Typography variant="h3" textAlign={'center'} color='primary'>
                Different Input Elements aka TextFields
            </Typography>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        variant="filled"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        variant="filled"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                    <TextField
                        id="filled-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        variant="standard"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        variant="standard"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="standard"
                    />
                </div>
            </Box>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <Typography variant='h4'>Validation</Typography>
                <div>
                    <TextField
                        error
                        id="outlined-error"
                        label="Error"
                        defaultValue="Hello World"
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="filled-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        error
                        id="filled-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="standard-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="standard"
                    />
                </div>
            </Box>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <Typography variant='h4'>Multiline</Typography>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </div>
                <div>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="filled"
                    />
                    <TextField
                        id="filled-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="filled"
                    />
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="standard"
                    />
                </div>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Typography variant='h4'>Icons</Typography>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        With a start adornment
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icons.AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.AccountCircle />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="standard"
                />
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Icons.AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="With sx" variant="standard" />
                </Box>
            </Box>
            <Stack direction="row" spacing={2}>
                <TextField label="small secondary" variant="outlined" color='secondary' size='small' />
                <TextField label="small secondary required" variant="outlined" color='secondary' size='small' required />
                <TextField
                    label="password disabled"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    required
                    helperText="Don't share your password with anyone"
                    type="password"
                    disabled
                />
                <TextField
                    label="Password (read-only)"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    required
                    helperText="Don't share your password with anyone"
                    type="password"
                    slotProps={{
                        input: {
                            readOnly: true
                        }
                    }}
                />
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <TextField
                    label="Amount"
                    size='small'
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        },
                    }}
                />
                <TextField
                    label="Amount"
                    size='small'
                    variant='outlined'
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        },
                    }}
                />
                <TextField
                    label="Password"
                    size='small'
                    error
                    variant='outlined'
                    type={passwordVisible ? 'text' : 'password'}
                    className="password-autofill" // Apply the CSS class here
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end" onClick={handlePasswordVisibility} style={{ cursor: 'pointer', color: 'black' }} >
                                    {passwordVisible ? <Icons.VisibilitySharp /> : <Icons.VisibilityOff />}
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Stack>
            <Divider width='1080px' color='primary' />
        </Stack>
    );
};
