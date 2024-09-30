
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
  Button,

} from '@mui/material';
import {
  Dashboard,

} from '@mui/icons-material';

const drawerWidth = 240;

const handleLogout = (event) => {
  event.preventDefault();
  localStorage.removeItem('token');
  window.location.href = '/'; 
  
}
const StudentDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          Student Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2c3e50',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="ส่งเอกสาร" />
            </ListItemButton>
          </ListItem>
          
          
         
        </List>
        <Button onClick={handleLogout} variant="contained" color="primary" sx={{ margin: 2 }}> ออกจากระบบ </Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#ecf0f1', p: 3 }}
      >
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome to the Student Dashboard 
          </Typography>
          <Grid container spacing={3}>
            
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
