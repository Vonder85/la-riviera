import React from 'react';
import { useAppSelector } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import PageLoading from './pages/loading/PageLoading';
import { Navbar } from './pages/nav/navbar';

function App() {
    const { accountIsLoading } = useAppSelector(state => state.account);

    if (accountIsLoading === true) {
        return <PageLoading />;
    }

    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
}

export default App;
