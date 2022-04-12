import { RouteProps } from 'react-router-dom';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

export interface IPage extends RouteProps {
    id: string;
    title: string;
    menu?: boolean;
    auth?: boolean;
    layout?: '404';
    icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
        muiName: string;
    };
}
