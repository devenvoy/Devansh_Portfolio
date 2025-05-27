import React, { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Person, GMail, Chat, Submit } from '../components/icons/Icons';
import { validateForm } from '../utils/formValidation';
import {
    Box,
    Button,
    TextField,
    Typography,
    useTheme,
    Container,
    InputAdornment,
} from '@mui/material';

const Contact = () => {
    const theme = useTheme();

    const initialFormData = { name: '', email: '', message: '' };
    const initialErrData = { nameError: '', emailError: '', messageError: '' };

    const [formData, setFormData] = useState(initialFormData);
    const [errData, setErrData] = useState(initialErrData);

    useEffect(() => {
        setFormData(initialFormData);
        setErrData(initialErrData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await validateForm(formData, setFormData, setErrData, initialFormData, initialErrData);
    };


    return (
        <Box
            id="Contact"
            sx={{
                pt: 10,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
                color: theme.palette.text.primary,
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: theme.palette.text.primary,
                    }}
                >
                    Get in touch with me
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={3}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            error={Boolean(errData.nameError)}
                            helperText={errData.nameError}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            type="email"
                            name="email"
                            label="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            error={Boolean(errData.emailError)}
                            helperText={errData.emailError}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <GMail />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            multiline
                            minRows={6}
                            name="message"
                            label="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            error={Boolean(errData.messageError)}
                            helperText={errData.messageError}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{ alignSelf: 'start', mt: 1.5 }}
                                    >
                                        <Chat />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                alignSelf: 'flex-start',
                                px: 5,
                                py: 1.5,
                                fontWeight: 'bold',
                                background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                                },
                            }}
                            endIcon={
                                <Box
                                    sx={{
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    <Submit />
                                </Box>
                            }
                        >
                            Let's Connect
                        </Button>
                        <input type="hidden" name="_subject" value="New submission!" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default Contact;
