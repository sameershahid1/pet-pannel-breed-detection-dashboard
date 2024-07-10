import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";

const AuthLogin = ({ title, subtitle, subtext, error, handleSubmit }: loginType) => (
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
          sign in
        </Typography>
      </Divider>
    </Box>
    <Stack>
      <form onSubmit={handleSubmit}>
        {
          error.status && error.label === "validation" ? <p style={{ color: "red", textAlign:"center" }}> {error.message} </p> : null
        }
        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
        <CustomTextField id="email" type="email" variant="outlined" fullWidth />
        {
          error.status && error.label === "email" ? <p style={{ color: "red" }}> {error.message} </p> : null
        }
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField
          id="password"
          type="password"
          variant="outlined"
          fullWidth
        />
        {
          error.status && error.label === "password" ? <p style={{ color: "red" }}> {error.message} </p> : null
        }
        <Box mt={4}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            fullWidth
          >
            Sign In
          </Button>
        </Box>
      </form>
    </Stack>
    {subtitle}
  </>
);

export default AuthLogin;
