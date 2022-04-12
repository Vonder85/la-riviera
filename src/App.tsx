import React from 'react';
import { useAppSelector } from './store/store';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Pages } from './pages/pages';
import PageLoading from './pages/loading/PageLoading';
import { MainNavigation } from './pages/navigation/MainNavigation';
import { Box } from '@mui/material';

function App() {
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

export default App;
