import { Card, CardContent, CardMedia } from '@mui/material';
import image from 'src/static/images/banner.jpg';

export default function Banner() {
    return (
        <Card variant="outlined" sx={{ width: 1 }}>
            <CardContent>
                <CardMedia
                    component="img"
                    height={300}
                    image={image}
                    sx={{ filter: 'blur(5px)' }}
                    alt="Books placed horizontally on a shelf"
                />
            </CardContent>
        </Card>
    );
}
