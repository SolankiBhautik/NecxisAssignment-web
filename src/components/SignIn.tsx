'use client';

import React, { useState } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { auth } from '@/config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoogleSignIn}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <GoogleIcon />}
        fullWidth
        size="large"
        sx={{
          py: 1.5,
          textTransform: 'none',
          fontSize: '1.1rem',
          borderRadius: 2,
          boxShadow: 2,
          '&:hover': {
            boxShadow: 4
          }
        }}
      >
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </Button>
    </Box>
  );
}