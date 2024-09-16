import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#F7F9FC",
        position: "fixed", // Fixed at the bottom
        bottom: 0, // Align to the bottom
        width: "100%", // Full width
        zIndex: 1000, // Make sure it appears on top
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Left side - Logo */}
        <img
          src="src/assets/logo.png"
          alt="IT-PMS"
          style={{ width: "100px", height: "30px", marginRight: "8px" }}
        />
      </Box>

      {/* Center - Links */}
      <Box sx={{ display: "flex", gap: "24px" }}>
        <Link
          href="https://www.lampangtc.ac.th/home/"
          sx={{
            color: "#3F51B5",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Lampang Technical College
        </Link>
        <Link
          href="https://old.lampangtc.ac.th/branch11/"
          sx={{
            color: "#3F51B5",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Information Technology
        </Link>
        <Link
          href="https://www.rmutl.ac.th/"
          sx={{
            color: "#3F51B5",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Rajamangala University of Technology Lanna{" "}
        </Link>
      </Box>

      {/* Right side - Copyright */}
      <Typography variant="body2" color="textSecondary">
        © 2024 IT-PMS All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
