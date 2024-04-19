import { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const AdminLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    // For demonstration purposes, navigate to admin dashboard on successful login
    router.push('/admin_form');
  };

  return (
    <Container maxWidth="xs" style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Admin Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AdminLogin;
