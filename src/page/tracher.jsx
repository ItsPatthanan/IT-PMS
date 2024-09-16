import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const TracherCard = () => {
  const [profiles, setProfiles] = useState([]);

  // Fetch profiles from backend
  useEffect(() => {
    axios.get('http://localhost:5000/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profiles!', error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {profiles.map((profile) => (
        <Grid item xs={12} md={6} lg={4} key={profile.id}>
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar 
                    src={profile.profile_image} 
                    alt={profile.name} 
                    sx={{ width: 100, height: 100 }} 
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5">{profile.name}</Typography>
                  <Typography color="textSecondary">{profile.position}</Typography>
                  <Typography color="textSecondary">ความถนัด: {profile.expertise}</Typography>
                  <Typography>Email: {profile.email}</Typography>
                  <Typography>Phone: {profile.phone}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TracherCard;
