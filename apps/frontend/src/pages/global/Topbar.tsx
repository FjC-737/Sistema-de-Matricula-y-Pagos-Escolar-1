"use client";

import type React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlined from "@mui/icons-material/MenuOutlined";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #E5DAA4",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Botón menú */}
      <IconButton
        onClick={onMenuClick}
        sx={{
          color: "#1A1363",
          "&:hover": {
            backgroundColor: "rgba(26, 19, 99, 0.08)",
          },
        }}
      >
        <MenuOutlined />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Sunny%20Path-baCvL17UVIOWy2lkb1I5T8lqOm7wDX.png"
          alt="Sunny Path Logo"
          sx={{
            height: "40px",
            width: "40px",
            display: { xs: "none", sm: "block" },
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1A1363",
            textAlign: "center",
          }}
        >
          Sunny Path Bilingual School
        </Typography>
      </Box>

      {/* Espacio vacío para balancear el IconButton */}
      <Box width="40px" />
    </Box>
  );
};

export default Topbar;