import { AppBar, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
    const pages = ['Products', 'Pricing', 'Blog'];

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        open
                    >
                        {pages.map(page => (
                            <MenuItem key={page}>
                                <Typography textAlign="center">Products</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
