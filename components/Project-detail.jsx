import { Card, CardMedia, CardContent, Typography, Chip, Link, Box, IconButton } from '@mui/material';
import { ExternalLink } from 'lucide-react';

const ProjectDetails = ({
    project: { img, name, demo, description, technologies },
    layoutType = 'default',
    theme,
}) => {
    const isDefault = layoutType === 'default';
    return (
        <Card
            data-aos="fade-up"
            sx={{
                mx: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                maxWidth: '1200px',
                borderRadius: 3,
                boxShadow: 3,
                my: 2,
                overflow: 'hidden',
            }}
        >
            {/* Image Section */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    order: isDefault ? 0 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 3, lg: 6 },
                    borderRight: {
                        md: isDefault ? `1px solid ${theme.palette.divider}` : 'none',
                    },
                    borderLeft: {
                        md: !isDefault ? `1px solid ${theme.palette.divider}` : 'none',
                    },
                }}
            >
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                        component="img"
                        image={img}
                        alt={`${name} preview`}
                        sx={{
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: 'cover',
                            transition: 'transform 0.5s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Link>
            </Box>

            {/* Content Section */}
            <CardContent
                sx={{
                    width: { xs: '100%', md: '50%' },
                    order: isDefault ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: { xs: 3, lg: 6 },
                }}
            >
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {name}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {technologies?.map((tech, idx) => (
                        <Chip key={idx} label={tech} variant="outlined" />
                    ))}
                </Box>

                <Box sx={{ mt: 2 }}>
                    <IconButton
                        component={Link}
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            p: 1,
                            borderRadius: 2,
                            color: 'grey.600',
                            '&:hover': { bgcolor: 'grey.100' },
                        }}
                    >
                        <ExternalLink />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectDetails;