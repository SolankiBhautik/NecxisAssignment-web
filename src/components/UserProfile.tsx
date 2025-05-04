'use client';

import React, { useState } from 'react';
import { Box, Button, Avatar, Typography, Divider, CircularProgress } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '@/config/firebase';
import { useAuth } from '@/contexts/AuthContext';

export default function UserProfile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Avatar 
        src={user.photoURL || undefined}
        alt={user.displayName || 'User'}
        sx={{ 
          width: 80, 
          height: 80, 
          mx: 'auto',
          mb: 2,
          boxShadow: 2,
          border: '4px solid',
          borderColor: 'primary.light'
        }}
      />
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'bold',
          mb: 0.5
        }}
      >
        {user.displayName || 'User'}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        {user.email}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSignOut}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} /> : <LogoutIcon />}
        fullWidth
        size="large"
        sx={{
          py: 1.5,
          textTransform: 'none',
          borderRadius: 2
        }}
      >
        {loading ? 'Signing out...' : 'Sign Out'}
      </Button>
    </Box>
  );
}