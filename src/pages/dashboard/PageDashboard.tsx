import { Box, Button, Card, CardContent, CardHeader, Container } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { Authentication } from '../../services/Authentication';
import { Serverless } from '../../services/Serverless';
import { useAppSelector } from '../../store/store';

const PageDashboard = (): JSX.Element => {
    const { infos, selectedEnvId } = useAppSelector(state => state.environment);

    const serverlessInfos = useCallback(() => {
        Serverless.getInfo(selectedEnvId);
    }, [selectedEnvId]);

    // Load serverless infos if not yet feteched
    if (!infos) {
        serverlessInfos();
    }

    // Refresh serverless infos on env change
    useEffect(() => {
        serverlessInfos();
    }, [serverlessInfos]);

    return (
        <Container maxWidth={false}>
            <Card variant="outlined" sx={{ mb: 2 }}>
                <CardHeader title="DASHBOARD"></CardHeader>
                <CardContent>
                    <Button onClick={() => Authentication.logout()} variant="outlined">
                        Disconnect
                    </Button>
                    <Box>{JSON.stringify(infos)}</Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PageDashboard;
