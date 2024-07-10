"use client"
import { useEffect, useState } from 'react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import AuthLogin from '../(DashboardLayout)/components/authForms/AuthLogin';
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import { Grid, Box, Stack, Typography } from '@mui/material';
import { LoginSchema } from '@/utils/schema/auth';
import { FormErrorType } from '@/utils/type/form';
import { loginRequest } from '@/utils/request/auth';
import { setToken } from '@/utils/request/token';
import { useRouter } from 'next/navigation';
import { ZodError } from 'zod';
import Image from 'next/image';
import Link from 'next/link';


export default function Login() {
  const [error, setError] = useState<FormErrorType>({ status: false, label: "", message: "" })
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/")
    }
  }, [])

  const handleSubmit = async (evt: any) => {
    try {
      evt.preventDefault()
      const formData = {
        "email": evt.target.elements[0].value,
        "password": evt.target.elements[2].value,
      }
      const validatedData = LoginSchema.parse(formData)
      const response = await loginRequest(validatedData)
      if (response?.status_code !== 200 && response?.status_code !== 201) {
        await setToken(response?.access_token)
        localStorage.setItem("token", response?.access_token)
        router.push("/")
        return;
      }
      setError(() => ({ status: true, message: response?.message?.detail, label: "validation" }))
    } catch (error) {
      if (error instanceof ZodError) {
        setError(() => ({ status: true, message: error.issues[0].message, label: error.issues[0].path[0] }))
      } else {
        console.log(error)
      }
    }
  }


  return (
    <PageContainer title="Login Page" description="this is Sample page">
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
            <Box px={3}>
              <Logo />
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              height={'calc(100vh - 75px)'}
              sx={{
                display: {
                  xs: 'none',
                  lg: 'flex',
                },
              }}
            >
              <Image
                src={"/images/backgrounds/login-bg.svg"}
                alt="bg" width={500} height={500}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  maxHeight: '500px',
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={5}
          xl={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box p={4}>
            <AuthLogin
              error={error}
              handleSubmit={handleSubmit}
              title="Welcome to Modernize"
              subtext={
                <Typography variant="subtitle1" color="textSecondary" mb={1}>
                  Your Admin Dashboard
                </Typography>
              }
              subtitle={
                <Stack direction="row" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="500">
                    New to Modernize?
                  </Typography>
                  <Typography
                    component={Link}
                    href="/register"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Create an account
                  </Typography>
                </Stack>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
};

Login.layout = "Blank";

