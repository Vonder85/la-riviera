/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});
