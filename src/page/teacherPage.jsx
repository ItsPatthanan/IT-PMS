// Dashboard.js
import { Box, Grid, Card, CardContent, Typography, AppBar, Toolbar, Drawer, List, ListItem, ListItemText } from '@mui/material';

const TeacherPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Side Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#1a1a1a', color: '#fff' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Analytics', 'Clients', 'Tasks'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* App Bar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#333' }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Overview Cards */}
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={12} md={3}>
            <Card sx={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">Users</Typography>
                <Typography variant="h4">14k</Typography>
                <Typography variant="body2">Last 30 days</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">Conversions</Typography>
                <Typography variant="h4">325</Typography>
                <Typography variant="body2">Last 30 days</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">Event count</Typography>
                <Typography variant="h4">200k</Typography>
                <Typography variant="body2">Last 30 days</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">Page views</Typography>
                <Typography variant="h4">1.3M</Typography>
                <Typography variant="body2">Last 6 months</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Details */}
        {/* You can add more grids or components below this line */}
      </Box>
    </Box>
  );
};

export default TeacherPage;
