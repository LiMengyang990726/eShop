import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import EventCard from './EventCard.js';
import eventInfo from '../../asset/eventInfo.json';
import Grid from "@material-ui/core/Grid";

const styles = () => ({
    root: {
        flexGrow: 1,
        width: "70%",
        margin: "auto",
    },
});

const EventApp = ({classes}) => {
    return (
        <Grid className={classes.root} spacing={16} container>
            {
                eventInfo.map((event, index) => (
                    <Grid key={index} xs item>
                        <EventCard
                            abbr={event.abbr}
                            title={event.title}
                            subheader={event.subheader}
                            brief={event.brief}
                            description={event.description}
                            imageSource={event.imageSource}
                        />
                    </Grid>
                ))}
        </Grid>
    );
};

EventApp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventApp);