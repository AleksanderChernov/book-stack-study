import { Box, Container } from '@mui/material';

import { useQueryClient } from 'react-query';

export default function Landing() {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                height: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: { xs: 4, md: 0 },
            }}>
            <Box></Box>
        </Container>
    );
}
