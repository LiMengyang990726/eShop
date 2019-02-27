import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
    normal: {
        margin: theme.spacing.unit * 2,
        color: 'rgba(0, 255, 0, 0.54)',
    },
    closed: {
        margin: theme.spacing.unit * 2,
        color: 'rgba(0, 0, 0, 0.54) !important',
    },
    crowded: {
        margin: theme.spacing.unit * 2,
        color: 'rgba(240, 240, 0, 1)',
    },
    flooded: {
        margin: theme.spacing.unit * 2,
        color: 'rgba(255, 0, 0, 0.54)',
    }
});

const ConditionalIcon = ((props) => {
    const {classes, canteenStatus, status} = props;
    if (canteenStatus === "closed") {
        return (
            <Icon className={classes.closed}>fiber_manual_record</Icon>
        )
    } else {
        if (status === "normal") {
            return (
                <Icon className={classes.normal}>fiber_manual_record</Icon>
            )

        } else if (status === "crowded") {
            return (
                <Icon className={classes.crowded}>fiber_manual_record</Icon>
            )

        } else {
            return (
                <Icon className={classes.flooded}>fiber_manual_record</Icon>
            )
        }
    }
});


const StatusIcon = ({classes, canteenStatus, status}) => {
    return (
        <div className={classes.root}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <ConditionalIcon
                classes={classes}
                canteenStatus={canteenStatus}
                status={status}
            />
        </div>
    );
};

StatusIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    canteenStatus: PropTypes.string,
    status: PropTypes.string
};

export default withStyles(styles)(StatusIcon);