import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '95%',
        height: 450,
    },
    normal: {
        color: 'rgba(0, 255, 0, 0.54)',
    },
    closed: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    crowded: {
        color: 'rgba(255, 255, 0, 0.54)',
    },
    flooded: {
        color: 'rgba(255, 0, 0, 0.54)',
    }
});

const ConditionalIcon = ((props) => {
    const {classes, canteenStatus, status} = props;

    if (canteenStatus === "closed") {
        return (
            <IconButton className={classes.closed}>
                <InfoIcon/>
            </IconButton>
        )
    } else {
        if (status === "normal") {
            return (
                <IconButton className={classes.normal}>
                    <InfoIcon/>
                </IconButton>
            )

        } else if (status === "crowded") {
            return (
                <IconButton className={classes.crowded}>
                    <InfoIcon/>
                </IconButton>
            )

        } else {
            return (
                <IconButton className={classes.flooded}>
                    <InfoIcon/>
                </IconButton>
            )
        }
    }
});

const TitlebarGridList = (({classes, counters, canteenStatus}) => {
    return (
        <div className={classes.root}>
            <GridList cellHeight={240} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <ListSubheader style={{padding: '0px', fontSize: '20px'}} component="div">Canteen
                        Status: {canteenStatus}</ListSubheader>
                </GridListTile>
                {counters.map((counter) => (
                    <GridListTile key={counter.img} cols={0.66}>
                        <img src={counter.img} alt={counter.name}/>
                        <GridListTileBar
                            title={counter.name}
                            subtitle={<span>Style: {counter.style}</span>}
                            actionIcon={
                                <ConditionalIcon
                                    classes={classes}
                                    canteenStatus={canteenStatus}
                                    status={counter.status}
                                />
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
});

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.string,
    counters: PropTypes.array
};

export default withStyles(styles)(TitlebarGridList);

