import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { LockOutlined } from "@mui/icons-material";
  import { FC, useState } from "react";
  import { Link } from "react-router-dom";
  
  const Register: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async () => {};
  
    return (
      
      <Box
      sx={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(https://wallpapershome.com/images/wallpapers/mountains-1920x1080-forest-sunset-25698.jpeg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: 3,
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h5">Register</Typography>
            <Box sx={{ mt: 3,
                
             }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegister}
              >
                Register
              </Button>
              
                  <Link to="/login">Login</Link>
               
            </Box>
          </Box>
        </Container>
        </Box>
    );
  };
  
  export default Register;