import { Divider, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useRouteMatch } from '../../../hooks/useRouteMatch';
import { getEnv } from '../../../utils/env';
import { Pages } from '../../pages';

export const MainNavigation = (): JSX.Element => {
    const match = useRouteMatch(Pages.list().map(page => page.path) as string[]);

    const drawerWidth = 240;
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <Typography variant="h6" component="h1">
                    {getEnv('REACT_APP_NAME')}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {Pages.listMenu().map(page => {
                    const PageIcon = page.icon;
                    const selected = match?.pathname === page.path;
                    return (
                        <ListItem button key={page.id} component={Link} href={page.path} selected={selected}>
                            {PageIcon && (
                                <ListItemIcon>
                                    <PageIcon />
                                </ListItemIcon>
                            )}
                            <ListItemText primary={page.title} />
                        </ListItem>
                    );
                })}
            </List>
            <Divider />
        </Drawer>
    );
};
