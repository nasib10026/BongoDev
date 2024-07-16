import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, Grid, Avatar } from '@mui/material';

export const ProfilePage = () => {
  // Dummy profile data including profile picture
  const initialProfile = {
    name: 'Rakibul Nasib',
    email: 'nasib1026@gmail.com',
    phone: '01756666666',
    address: 'KUET',
    profilePic: 'https://dummyimage.com/200x200/000/fff', // Dummy profile picture URL
  };

  // State to manage profile data and edit mode
  const [profile, setProfile] = useState(initialProfile);
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle form submission (in a real application, this would handle update)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile logic can be added here in a real application
    setIsEditMode(false); // Exit edit mode after submit
    alert('Profile Updated!');
  };

  // Function to handle cancel editing
  const handleCancelEdit = () => {
    setProfile(initialProfile); // Reset to initial profile data
    setIsEditMode(false);
  };

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Profile
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar alt="Profile Picture" src={profile.profilePic} sx={{ width: 150, height: 150, mx: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={9}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!isEditMode}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!isEditMode}
              />
              <TextField
                label="Phone"
                fullWidth
                margin="normal"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                disabled={!isEditMode}
              />
              <TextField
                label="Address"
                fullWidth
                multiline
                rows={3}
                margin="normal"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                disabled={!isEditMode}
              />
              {isEditMode ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button variant="contained" color="primary" type="submit">
                    Save Changes
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button variant="contained" color="primary" onClick={() => setIsEditMode(true)}>
                  Edit Profile
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Additional Options
          </Typography>
          {/* Example additional options */}
          <Button variant="outlined" color="secondary">
            Change Password
          </Button>
          {/* Add more functionality as needed */}
        </Box>
      </Box>
    </Container>
  );
};

