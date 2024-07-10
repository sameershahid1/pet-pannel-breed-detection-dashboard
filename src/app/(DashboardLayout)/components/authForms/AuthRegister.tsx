import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { registerType } from "@/app/(DashboardLayout)/types/auth/auth";
import { Box, Typography, Button, Divider } from "@mui/material";


const AuthRegister = ({ title, subtitle, subtext, error, handleSubmit }: registerType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}
    {subtext}
    <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          sign up
        </Typography>
      </Divider>
    </Box>

    <Box>
      <form onSubmit={handleSubmit}>
        {
          error.status && error.label === "validation" ? <p style={{ color: "red", textAlign: "center" }}> {error.message} </p> : null
        }
        <CustomFormLabel htmlFor="firstName">First Name</CustomFormLabel>
        <CustomTextField id="firstName" variant="outlined" fullWidth />
        {
          error.status && error.label === "firstName" ? <p style={{ color: "red" }}> {error.message} </p> : null
        }
        <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
        <CustomTextField id="lastName" variant="outlined" fullWidth />
        {
          error.status && error.label === "lastName" ? <p style={{ color: "red" }}> {error.message} </p> : null
        }
        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
        <CustomTextField id="email" variant="outlined" fullWidth />
        {
          error.status && error.label === "email" ? <p style={{ color: "red" }}> {error.message} </p> : null
        }
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField id="password" type={"password"} variant="outlined" fullWidth />
        {
          error.status && error.label === "password" ? <p style={{ color: "red" }}> {error.message} </p> : null
        }
        <Box mt={3}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
    {subtitle}
  </>
);

export default AuthRegister;
