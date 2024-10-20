import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import image from 'src/static/images/search.jpg';

export default function Search() {
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
                <Typography variant="h2" sx={{ position: 'absolute', top: '38%', left: '28%', color: 'yellow' }}>
                    Search
                </Typography>
            </CardContent>
        </Card>
    );
}
