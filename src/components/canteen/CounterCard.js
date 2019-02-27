import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../common/Button';
import Typography from '@material-ui/core/Typography';
import StatusIcon from './StatusIcon'

const styles = {
    card: {
        minWidth: 310,
        height: 350,
        margin: 20,
    },
    media: {
        height: 200,
    },
};

const CounterCard = ({classes, counter}) => {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={counter.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1">
                        {counter.name}
                    </Typography>
                    <Typography variant="subtitle2">
                        {counter.canteen}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Order
                </Button>
                <StatusIcon
                    canteenStatus={counter.canteenStatus}
                    status={counter.status}
                />
            </CardActions>
        </Card>
    );
};

CounterCard.propTypes = {
    classes: PropTypes.object.isRequired,
    counter: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterCard);

