// DataTable.js
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Box, TextField } from '@mui/material';

const DataTable = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/projects'); // เปลี่ยน URL ตาม API ของคุณ
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle search filtering
  useEffect(() => {
    const results = projects.filter((project) =>
      project.project_name_th.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.project_name_eng.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.project_owner.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
  }, [searchTerm, projects]);

  // Define the columns for the DataGrid
  const columns = [
    { field: 'project_id', headerName: 'Project ID', width: 150 },
    { field: 'project_name_th', headerName: 'Project Name (TH)', width: 200 },
    { field: 'project_name_eng', headerName: 'Project Name (ENG)', width: 200 },
    { field: 'project_owner', headerName: 'Project Owner', width: 200 },
    { field: 'project_status', headerName: 'Status', width: 150 },
    { field: 'project_create_time', headerName: 'Create Time', width: 200 },
  ];

  return (
    <Box sx={{ height: 600, width: '100%', mt: 4 }}>
      {/* Search Field */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Data Grid */}
      <DataGrid
        rows={filteredProjects}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.project_id} // Assuming 'project_id' is unique for each row
      />
    </Box>
  );
};

export default DataTable;
