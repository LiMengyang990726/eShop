import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    card: {
        margin: '2%'
    },
    media: {
        objectFit: 'cover',
    },
    root: {
        width: '80%',
        margin: "auto",
    },
    inline: {
        display: 'inline',
    },
};

class CanteenCard extends React.Component {

    handleClick = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        this.props.history.push(`/canteen/food-on-the-way`)
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Canteen 13 - Tian Yi Dian
                        </Typography>
                        <Typography component="p">
                            Scrumptious Si Chuan mixed rice. They provide both spicy and non-spicy food
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="canteen-picture"
                        className={classes.media}
                        height="210"
                        image="https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg"
                        title="canteen-picture"
                    />
                    <CardContent style={{paddingBottom: 0}}>
                        <Typography gutterBottom variant="subtitle1">
                            Dishes
                        </Typography>
                    </CardContent>
                    <CardActionArea onClick={this.handleClick}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"
                                        src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/46241/large_fc426cd0a3125e35.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="西红柿炒鸡蛋"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline}
                                                    color="textPrimary">
                                            Translation
                                        </Typography>
                                        {" Egg with Tomato"}
                                    </React.Fragment>
                                }
                            >
                            </ListItemText>
                        </ListItem>
                    </CardActionArea>

                    <CardActionArea onClick={this.handleClick}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"
                                        src="http://ali.xinshipu.cn/20100506/original/1273127528984.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="回锅肉"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline}
                                                    color="textPrimary">
                                            Translation
                                        </Typography>
                                        {" Twice cooked pork with vegatables"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </CardActionArea>


                    <CardActionArea onClick={this.handleClick}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"
                                        src="http://ali.xinshipu.cn/20140910/original/1410358049556.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="宫保鸡丁"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline}
                                                    color="textPrimary">
                                            Translation
                                        </Typography>
                                        {" balabala"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </CardActionArea>

                    <div style={{marginBottom: 2 * theme.spacing.unit}}/>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Canteen 13 - Tian Yi Dian
                        </Typography>
                        <Typography component="p">
                            Scrumptious Si Chuan mixed rice. They provide both spicy and non-spicy food
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="canteen-picture"
                        className={classes.media}
                        height="210"
                        image="https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg"
                        title="canteen-picture"
                    />
                    <CardContent style={{paddingBottom: 0}}>
                        <Typography gutterBottom variant="subtitle1">
                            Dishes
                        </Typography>
                    </CardContent>
                    <CardActionArea onClick={this.handleClick}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"
                                        src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/46241/large_fc426cd0a3125e35.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="西红柿炒鸡蛋"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline}
                                                    color="textPrimary">
                                            Translation
                                        </Typography>
                                        {" Egg with Tomato"}
                                    </React.Fragment>
                                }
                            >
                            </ListItemText>
                        </ListItem>
                    </CardActionArea>

                    <CardActionArea onClick={this.handleClick}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"
                                        src="http://ali.xinshipu.cn/20100506/original/1273127528984.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="回锅肉"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline}
                                                    color="textPrimary">
                                            Translation
                                        </Typography>
                                        {" Twice cooked pork with vegatables"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </CardActionArea>


                    <CardActionArea onClick={this.handleClick}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"
                                        src="http://ali.xinshipu.cn/20140910/original/1410358049556.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="宫保鸡丁"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline}
                                                    color="textPrimary">
                                            Translation
                                        </Typography>
                                        {" balabala"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </CardActionArea>

                    <div style={{marginBottom: 2 * theme.spacing.unit}}/>
                </Card>

            </div>
        )
    }
}

CanteenCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(CanteenCard);