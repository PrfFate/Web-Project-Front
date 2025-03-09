import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    let userId = 5;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    {/* Sol Taraf - Menü İkonu ve Home */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                Home
                            </Link>
                        </Typography>
                    </Box>

                    {/* Sağ Taraf - User */}
                    <Typography variant="h6" component="div">
                        <Link to={`/users/${userId}`} style={{ textDecoration: "none", color: "white", padding: "10px 20px" }}>
                            User
                        </Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
