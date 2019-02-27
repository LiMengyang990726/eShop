import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 400,
        minHeight: 450,
        margin: 20,
    },
    media: {
        height: 300,
        border: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 5
    },
};

const ItemCard = ({classes, lostitem}) => {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={lostitem.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {lostitem.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {lostitem.location}
                    </Typography>
                    <Typography component="p">
                        {lostitem.description}
                    </Typography>
                    <Typography component="p">
                        Finder's Contact: {lostitem.contact}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

ItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
    lostitem: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);

