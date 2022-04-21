import { lazy } from 'react';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import { Authentication } from '../services/Authentication';
import PageLoading from './loading/PageLoading';
import { IPage } from '../interfaces/IPage';

// Lazy load page
const Home = lazy(() => import(/* webpackChunkName: "pages/home" */ './home/home'));
const PageDashboard = lazy(() => import(/* webpackChunkName: "pages/dashboard" */ './dashboard/PageDashboard'));
const PageJobsList = lazy(() => import(/* webpackChunkName: "pages/jobs/list" */ './job/PageJobsList'));
const PageAccount = lazy(() => import(/* webpackChunkName: "pages/account" */ './account/PageAccount'));

// Pages definition
export class Pages {
    public static readonly default: 'home';
    private static routes: IPage[] = [
        {
            path: '/',
            id: 'home',
            title: 'Home',
            element: <Home />,
            auth: false,
        },
        {
            path: '/dashboard',
            id: 'dashboard',
            title: 'Dashboard',
            menu: true,
            auth: true,
            element: <PageDashboard />,
            icon: DashboardCustomizeOutlinedIcon,
        },
        {
            path: '/jobs',
            id: 'jobs/list',
            title: 'Jobs',
            menu: true,
            auth: true,
            element: <PageJobsList />,
            icon: MemoryOutlinedIcon,
        },
        {
            path: '/loading',
            id: 'loading',
            title: 'Loading',
            menu: false,
            element: <PageLoading />,
        },
        {
            path: '/account',
            id: 'account',
            title: 'Account',
            element: <PageAccount />,
            menu: false,
            auth: true,
        },
        // {
        //     path: '/404',
        //     id: '404',
        //     title: 'Not Found',
        //     layout: '404',
        // },
    ];

    public static list(): IPage[] {
        return this.routes;
    }

    public static listMenu(): IPage[] {
        return this.listAllowed().filter(page => page.menu);
    }

    public static listAllowed(): IPage[] {
        const { isConnected } = Authentication;
        return this.routes.filter(
            page => (page.auth === true && isConnected) || (page.auth === false && !isConnected) || page.auth === undefined,
        );
    }

    public static getRouteById(id: string): IPage | undefined {
        return this.routes.find(route => route.id === id);
    }

    public static getPathById(id: string, hash?: string): string {
        const urls: string[] = [];
        if (this.getRouteById(id)?.path) {
            urls.push(this.getRouteById(id)?.path as string);
        }
        if (hash) {
            urls.push(hash);
        }
        return urls.join('#');
    }
}
