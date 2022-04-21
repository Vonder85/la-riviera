import React from 'react';

import { Box } from '@mui/material';
import PageLoading from '../loading/PageLoading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { Pages } from '../pages';
import { MainNavigation } from './navigation/MainNavigation';

function Index() {
    const { accountIsLoading } = useAppSelector(state => state.account);

    if (accountIsLoading === true) {
        return <PageLoading />;
    }

    return (
        <BrowserRouter>
            <React.Suspense fallback={<PageLoading />}>
                <Box sx={{ display: 'flex' }}>
                    <MainNavigation />
                    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                        <Routes>
                            {Pages.listAllowed().map(page => {
                                return <Route key={page.id} path={page.path} element={page.element} />;
                            })}
                            {/* <Route path="*" element={<Navigate to={user.address ? Pages.getPathById('dashboard') : Pages.getPathById('home')} />} /> */}
                        </Routes>
                    </Box>
                </Box>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default Index;
