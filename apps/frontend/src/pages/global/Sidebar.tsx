import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentIcon from "@mui/icons-material/Payment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface SidebarProps {
  isSidebarVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarVisible }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: isSidebarVisible ? "300px" : "0px",
        height: "100vh",
        background: "linear-gradient(180deg, #1A1363 0%, #538A3E 100%)",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        top: 0,
        overflow: "hidden",
        transition: "width 0.3s ease",
        boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      {isSidebarVisible && (
        <>
          {/* Perfil */}
          <Box textAlign="center" py={3}>
            <Avatar
              alt="Usuario"
              src="https://via.placeholder.com/100"
              sx={{
                width: 90,
                height: 90,
                margin: "0 auto 10px auto",
                border: "3px solid #FFFFFF",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Usuario
            </Typography>
          </Box>

          {/* Lista de navegación */}
          <Box sx={{ flex: 1, mt: 1 }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 500,
                pl: 4,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Navegación
            </Typography>
            <List sx={{ px: 2, mt: 0.5 }}>
              {[
                { icon: <HomeIcon />, text: "Home", path: "/home" },
                {
                  icon: <SchoolIcon />,
                  text: "Estudiantes",
                  path: "/estudiantes",
                },
                {
                  icon: <PeopleIcon />,
                  text: "Apoderados",
                  path: "/apoderados",
                },
                {
                  icon: <DescriptionIcon />,
                  text: "Reportes",
                  path: "/reportes",
                },
                { icon: <PaymentIcon />, text: "Pagos", path: "/pagos" },
              ].map((item, index) => (
                <ListItemButton
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    py: 1.5,
                    pl: 2,
                    my: 0.5,
                    width: "100%",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    },
                    backgroundColor:
                      location.pathname === item.path
                        ? "rgba(255, 255, 255, 0.15)"
                        : "transparent",
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: "inherit",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>

          {/* Botón Salir */}
          <Box
            px={2}
            pb={3}
            pt={2}
            sx={{
              marginTop: "auto",
            }}
          >
            <ListItemButton
              sx={{
                backgroundColor: "#F38223",
                color: "#FFFFFF",
                py: 1.5,
                px: 2,
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#e67615",
                },
                "&:active": {
                  backgroundColor: "#d56a10",
                },
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <ExitToAppIcon sx={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText
                primary="Salir"
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: "medium",
                }}
              />
            </ListItemButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;