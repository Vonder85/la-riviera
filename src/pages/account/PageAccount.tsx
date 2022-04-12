import { Card, CardHeader, CardContent, Typography, Container } from '@mui/material';

const PageAccount = (): JSX.Element => {
    return (
        <Container maxWidth="xl">
            <Card variant="outlined" sx={{ mb: 2 }}>
                <CardHeader title="Account"></CardHeader>
                <CardContent>
                    <Typography variant="body2" component="h2">
                        ACCOUNT
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PageAccount;
