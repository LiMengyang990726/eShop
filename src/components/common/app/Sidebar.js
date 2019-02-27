import React from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from '@material-ui/core/Divider';
import FeedbackApp from "../../feedback";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexShrink: 0,
    },
    titleRoot: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    toolbar: theme.mixins.toolbar,
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.grey[50],
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    headerItem: {
        marginRight: 20,
    },
});

class Sidebar extends React.PureComponent {

    state = {
        open: false
    };

    handleOpenFeedback = () => {
        this.props.handleClose();
        this.setState({open: true})
    };

    handleBus = () => {
        this.props.handleClose();
        window.open("https://itunes.apple.com/sg/app/ntu-campus-bus/id1240692219?mt=8");
        window.focus();

    };

    render() {
        const {classes, on, handleClose} = this.props;
        const {open} = this.state;

        return (
            <React.Fragment>
                <Drawer
                    className={classes.drawer}
                    anchor="left"
                    open={on}
                    classes={{paper: classes.drawerPaper}}
                    onClose={handleClose}
                >
                    <CssBaseline/>
                    <List>
                        <ListItem button key="Events"
                                  component={props => <Link to='/events' {...props} />}
                                  onClick={handleClose}
                        >
                            <i className="far fa-calendar-check"/>
                            <ListItemText primary="Events"/>
                        </ListItem>
                        <ListItem button key="Canteen"
                                  component={props => <Link to='/canteen' {...props} />}
                                  onClick={handleClose}
                        >
                            <i className="fas fa-utensils"/>
                            <ListItemText primary="Canteen"/>
                        </ListItem>
                        <ListItem button key="Shuttlebus"
                                  onClick={this.handleBus}
                        >
                            <i className="fas fa-bus"/>
                            <ListItemText primary={"Shuttle Bus"}/>
                        </ListItem>
                        <ListItem button key="Lost and Found"
                                    component={props => <Link to='/lost-and-found' {...props} />}
                                  onClick={handleClose}
                        >
                            <i className="fas fa-key"/>
                            <ListItemText primary={"Lost and Found"}/>
                        </ListItem>
                        <Divider/>
                        <ListItem button key="Feedback"
                                  onClick={this.handleOpenFeedback}
                        >
                            <i className="fas fa-exclamation-triangle"/>
                            <ListItemText primary="Feedback"/>
                        </ListItem>
                    </List>
                </Drawer>
                <FeedbackApp open={open} handleClose={() => this.setState({open: false})}/>
            </React.Fragment>
        );
    }
}

Sidebar.defaultProps = {
    open: false,
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    on: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default withStyles(styles)(Sidebar);