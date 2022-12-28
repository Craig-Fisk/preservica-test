import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { EmailValidationResponse, validateEmail } from "./validateEmail";
import {
  PasswordValidationResponse,
  validatePassword,
} from "./validatePassword";

export function LoginPage() {
  const [emailValidation, setEmailValidation] = useState<
    EmailValidationResponse | undefined
  >(undefined);

  const [passwordValidation, setPasswordValidation] = useState<
    PasswordValidationResponse | undefined
  >(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailValidation = validateEmail(data.get("email"));
    const passwordValidation = validatePassword(data.get("password"));
    setEmailValidation(emailValidation);
    setPasswordValidation(passwordValidation);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailValidation && !emailValidation?.valid}
            helperText={emailValidation?.label}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={passwordValidation && !passwordValidation?.valid}
            helperText={passwordValidation?.label}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
