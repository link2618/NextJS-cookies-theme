import NextLink from "next/link";

import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuOutlined />
                </IconButton>

                <Link component={NextLink} href="/" passHref>
                    <Typography variant="h6" color="white">
                        CookieMaster
                    </Typography>
                </Link>

                <div style={{ flex: 1 }} />

                <Link component={NextLink} href="/theme-changer" passHref>
                    <Typography variant="h6" color="white">
                        Cambiar Tema
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};
