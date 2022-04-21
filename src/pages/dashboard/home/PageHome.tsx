import { Button, Card, CardContent, CardHeader, Container, Typography } from '@mui/material';
import { Authentication } from '../../../services/Authentication';

const PageHome = (): JSX.Element => {
    return (
        <Container maxWidth={false}>
            <Card variant="outlined" sx={{ mb: 2 }}>
                <CardHeader title="HOME"></CardHeader>
                <CardContent>
                    <Button onClick={() => Authentication.login()} variant="outlined">
                        Connect
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PageHome;
