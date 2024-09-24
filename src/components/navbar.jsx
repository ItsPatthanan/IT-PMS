import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate สำหรับการนำทาง

function Navbar() {
  const navigate = useNavigate(); // ฟังก์ชันสำหรับนำทาง

  const handleSignIn = () => {
    navigate("/signin"); // นำทางไปยังหน้า SignIn
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f0a10e",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* โลโก้ */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#000" }}
            onClick={() => navigate("/")}
          >
            <span style={{ color: "#fafafa" }}>IT</span>-PMS
          </Typography>
          <Box sx={{ display: "flex", gap: 3, marginLeft: 3 }}>
            <Button
              sx={{ color: "#FFFFFF", textTransform: "none" }}
              onClick={() => navigate("/teacher")}
            >
              ข้อมูลอาจารย์
            </Button>
            <Button
              onClick={() => navigate("/department")}
              sx={{ color: "#FFFFFF", textTransform: "none" }}
            >
              แผนกเทคโนโลยีสารสนเทศ
            </Button>
            <Button
              onClick={() => navigate("/document")}
              sx={{ color: "#FFFFFF", textTransform: "none" }}
            >
              เอกสารที่เกี่ยวข้อง
            </Button>
          </Box>
        </Box>

        {/* ปุ่มเข้าสู่ระบบ */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFC107",
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleSignIn} // เมื่อกดจะนำไปยังหน้า SignIn
          >
            <LockIcon sx={{ marginRight: "5px" }} />
            เข้าสู่ระบบ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
