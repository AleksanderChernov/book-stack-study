import { Box, Container, Stack } from '@mui/material';
import Banner from 'src/components/banner/Banner';
import Favourites from 'src/components/favourites/Favourites';
import Search from 'src/components/search/Search';

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
            <Box>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Banner />
                    <Favourites />
                    <Search />
                </Stack>
            </Box>
        </Container>
    );
}
