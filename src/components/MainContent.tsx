'use client';

import { Box, Typography, Paper, Container, CircularProgress } from '@mui/material';
import SignIn from './SignIn';
import UserProfile from './UserProfile';
import { useAuth } from '@/contexts/AuthContext';

export default function MainContent() {
  const { user, loading } = useAuth();
  const content = loading ? (
    <CircularProgress size={40} />
  ) : user ? (
    <UserProfile />
  ) : (
    <SignIn />
  );

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4
        }}
      >
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 400,
            borderRadius: 2
          }}
        >
          <Typography 
            component="h1" 
            variant="h4" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3
            }}
          >
            Welcome
          </Typography>
          {content}
        </Paper>
      </Box>
    </Container>
  );
}