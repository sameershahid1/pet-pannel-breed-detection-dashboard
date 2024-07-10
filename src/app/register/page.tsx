"use client";
import { useState } from "react";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import AuthRegister from "../(DashboardLayout)/components/authForms/AuthRegister";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { RegistrationSchema } from "@/utils/schema/auth";
import { FormErrorType } from "@/utils/type/form";
import Image from "next/image";
import { ZodError } from "zod";
import Link from "next/link";
import { registrationRequest } from "@/utils/request/auth";

export default function Register() {
  const [error, setError] = useState<FormErrorType>({ status: false, label: "", message: "" })

  const handleSubmit = async (evt: any) => {
    try {
      evt.preventDefault()
      const formData = {
        "firstName": evt.target.elements[0].value,
        "lastName": evt.target.elements[2].value,
        "email": evt.target.elements[4].value,
        "password": evt.target.elements[6].value,
      }
      const validatedData = RegistrationSchema.parse(formData)
      const response = await registrationRequest(validatedData)
      if (response?.status_code !== 200 && response?.status_code !== 201) {
        setError(() => ({ status: true, message: response?.detail, label: "validation" }))
      }
    } catch (error) {
      if (error instanceof ZodError) {
        setError(() => ({ status: true, message: error.issues[0].message, label: error.issues[0].path[0] }))
      } else {
        console.log(error)
      }
    }
  }

  return (
    <PageContainer title="Register Page" description="this is Sample page">
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ overflowX: "hidden" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={7}
          xl={8}
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
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
              height={"calc(100vh - 75px)"}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            >
              <Image
                src={"/images/backgrounds/login-bg.svg"}
                alt="bg" width={500} height={500}
                style={{
                  width: "100%",
                  maxWidth: "500px", maxHeight: '500px',
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
            <AuthRegister
              error={error}
              title="Welcome to Modernize"
              subtext={
                <Typography variant="subtitle1" color="textSecondary" mb={1}>
                  Your Admin Dashboard
                </Typography>
              }
              handleSubmit={handleSubmit}
              subtitle={
                <Stack direction="row" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                    Already have an Account?
                  </Typography>
                  <Typography
                    component={Link}
                    href="/login"
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    Sign In
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

Register.layout = "Blank";

