// DataTable.js
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import Navbar from "../components/navbar";

const DataTable = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchColumn, setSearchColumn] = useState("project_name_th"); // Default search column

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/projects"); // เปลี่ยน URL ตาม API ของคุณ
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle search filtering
  useEffect(() => {
    const results = projects.filter((project) =>
      project[searchColumn]
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
  }, [searchTerm, searchColumn, projects]);

  // Define the columns for the DataGrid
  // Define the columns for the DataGrid
  const columns = [
    { field: "project_id", headerName: "รหัสโครงาน", flex: 1 },
    { field: "project_name_th", headerName: "ชื่อโครงงาน ภาษาไทย", flex: 2 },
    {
      field: "project_name_eng",
      headerName: "ชื่อโครงงาน ภาษาอังกฤษ",
      flex: 2,
    },
    { field: "project_type", headerName: "ประเภทโครงงาน", flex: 1 },
    { field: "project_owner", headerName: "ผู้รับผิดชอบ", flex: 1.5 },
    { field: "project_status", headerName: "สถานะ", flex: 1 },
    {
      field: "actions",
      headerName: "ดูรายละเอียด",
      flex: 2,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              window.open(
                `http://localhost:3333/files/view/${params.row.project_id}`,
                "_blank"
              )
            }
            style={{ marginRight: 8 }}
          >
            View PDF
          </Button>
          
        </>
      ),
    },
    { field: "project_create_time", headerName: "เวลาที่สร้าง", flex: 1.5 },
  ];

  return (
    <Box sx={{ height: 550, width: "100%", mt: 10 }}>
      <Navbar />
      {/* Search Field and Search Column Selection */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>ค้นหาตาม</InputLabel>
          <Select
            label="Search by"
            value={searchColumn}
            onChange={(e) => setSearchColumn(e.target.value)}
          >
            <MenuItem value="project_id">รหัสโครงาน</MenuItem>
            <MenuItem value="project_name_th">ชื่อโครงงาน ภาษาไทย</MenuItem>
            <MenuItem value="project_name_eng">ชื่อโครงงาน ภาษาอังกฤษ</MenuItem>
            <MenuItem value="project_type">ประเภทโครงงาน</MenuItem>
            <MenuItem value="project_owner">ผู้รับผิดชอบ</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="ค้นหา"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Data Grid */}
      <DataGrid
        rows={filteredProjects}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        getRowId={(row) => row.project_id} // Assuming 'project_id' is unique for each row
      />
    </Box>
  );
};

export default DataTable;
