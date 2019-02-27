import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {Typography} from "@material-ui/core";
import Button from "../common/Button";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
        marginBottom: 30
    },
    subtitle: {
        marginBottom: 10,
        marginLeft: '2%'
    },
    section: {
        padding: 10,
        marginBottom: 30,

        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 10
    },
    candiv: {
        marginBottom: 30,
    },
    search: {
        position: 'relative',
        boxShadow: theme.shadows[1],
        transition: [["box-shadow", "0.1s"]],
        '&:hover': {
            boxShadow: theme.shadows[4],
        },
        "&:focus": {
            boxShadow: theme.shadows[3],
        },
        marginLeft: "10%",
        width: '80%',
    },
    searchIcon: {
        width: "100%",
        height: '100%',
        position: 'absolute',
        display: 'flex',
        pointerEvents: "none",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "95%",
        boxSizing: "border-box"
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 2,
        transition: theme.transitions.create('width'),
        width: '80%',
    },
});

class LostFoundApp extends React.Component {

    render() {
        const {classes, history} = this.props;
        return (
            <div className={classes.root}>
                <Typography align="center" variant="h3" gutterBottom>
                    <img src={require('../../asset/logo.svg')} alt="Outfox logo"/>
                </Typography>
                <div className={classes.candiv}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon
                                color="primary"
                                onClick={this.handleSearch}
                                style={{cursor: "pointer", pointerEvents: "all"}}
                            />
                        </div>
                        <InputBase
                            placeholder="Which item do you want to check?"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onKeyPress={this.search}
                        />
                    </div>
                </div>
                <Typography align="center" variant="subtitle2">
                    {console.log(history)}
                    <Button style={{marginRight: 8}} onClick={() => history.push('/lost-and-found/lost')}>Report
                        Lost</Button>
                    <Button onClick={() => history.push('/lost-and-found/explore')}>Explore</Button>
                </Typography>
            </div>
        )
    }
}

LostFoundApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LostFoundApp);
