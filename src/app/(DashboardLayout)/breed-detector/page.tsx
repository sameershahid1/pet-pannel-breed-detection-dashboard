"use client"

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Grid, Box, Button } from '@mui/material';

const BreedDetector = () => {
    return (
        <PageContainer title="Dog breed" description="this is dog breed detector page">
            <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={7}
                    xl={8}
                    sx={{
                        position: 'relative',
                        '&:before': {
                            content: '""',
                            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
                            backgroundSize: '400% 400%',
                            animation: 'gradient 15s ease infinite',
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            opacity: '0.3',
                        },
                    }}
                >
                    <Box position="relative">
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            Dog Image Breed Detector
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default BreedDetector