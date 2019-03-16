import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/FavoriteRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import MoreVertIcon from '@material-ui/icons/MoreVertRounded';

const styles = theme => ({
    card: {
        minWidth: 480,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class EventCard extends React.Component {
    state = {
        expanded: false,
        love: false,
    };

    handleToggleState = name => () => {
        this.setState(state => ({[name]: !state[name]}))
    };

    render() {
        const {classes, abbr, title, subheader, brief, description, imageSource} = this.props;
        const {expanded, love} = this.state;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {abbr}
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={title}
                    subheader={subheader}
                />
                <CardMedia
                    className={classes.media}
                    image={imageSource}
                />
                <CardContent>
                    <Typography component="p">
                        {brief}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites" onClick={this.handleToggleState("love")}>
                        <FavoriteIcon color={love ? "error" : undefined}/>
                    </IconButton>
                    <IconButton
                        className={classNames(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={this.handleToggleState("expanded")}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

EventCard.propTypes = {
    classes: PropTypes.object.isRequired,
    abbr: PropTypes.string,
    title: PropTypes.string,
    subheader: PropTypes.string,
    brief: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string,
};

export default withStyles(styles)(EventCard);