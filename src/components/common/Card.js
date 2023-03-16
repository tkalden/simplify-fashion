import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import ClothContext from '../../context/clothContext';
import Tooltip from '@mui/material/Tooltip';


export default function ClothingCard({ item, closet, tryOn }) {
    const clothContext = useContext(ClothContext);
    const { addToCloset } = clothContext;
    function update() {
        addToCloset(item)
    };

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300 "
                image={item.imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="Try On Virtual Model">
                    <Button size="small">Try</Button>
                </Tooltip>
                {!closet ? <Tooltip title="Add To Virtual Closet">
                    <Button onClick={update} size="small">Add </Button></Tooltip> : ""}
            </CardActions>

        </Card>
    );
}
