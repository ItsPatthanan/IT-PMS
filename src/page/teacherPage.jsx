
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
  People,
  Assessment,
} from '@mui/icons-material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const drawerWidth = 240;

const handleLogout = (event) => {
  event.preventDefault();
  localStorage.removeItem('token');
  window.location.href = '/'; 
  
}
const AdminDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Tearcher Dashboard
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
              <ListItemText primary="เอกสาร" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <People />
              </ListItemIcon>
              <ListItemText primary="ผู้ใช้" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <AccountCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="ข้อมูลอาจารย์" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="เอกสารที่รอตรวจสอบ" />
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
            Welcome to the Teacher Dashboard
          </Typography>
          <Grid container spacing={3}>
            
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
