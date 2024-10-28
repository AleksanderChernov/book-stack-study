import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import image from 'src/static/images/favourites.jpg';

export default function Favourites() {
    return (
        <Card variant="outlined" sx={{ width: { sm: 1, md: '48%' } }}>
            <CardContent sx={{ position: 'relative', textAlign: 'center' }}>
                <CardMedia
                    component="img"
                    height={300}
                    image={image}
                    sx={{ filter: 'blur(5px)' }}
                    alt="2 books in a stack"
                />
                <Typography variant="h2" sx={{ position: 'absolute', top: '38%', left: '18%', color: 'yellow' }}>
                    Favourites
                </Typography>
            </CardContent>
        </Card>
    );
}
