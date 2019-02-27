import React from 'react';
import * as PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import FunctionCard from '../common/FunctionCard'
import CounterGrid from './CounterGird'
import CounterCard from './CounterCard'
import recentViewed from '../../asset/recentViewed.json'
import popular from '../../asset/popular.json'
import canteenInfo from '../../asset/canteenInfo.json'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    candiv: {
        marginBottom: 30,
    },
    subtitle: {
        marginBottom: 10,
        marginLeft: '2%'
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
    cardRoot: {
        overflowX: "scroll",
        display: "flex",
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
    buttonRoot: {
        borderRadius: 0,
    }
});


const displayCanteens = () => {
    let canteens = [];
    canteenInfo.forEach((canteen) => {
        let children = () => {
            return (
                <CounterGrid
                    counters={canteen.counters}
                    canteenStatus={`${canteen.status}`}
                />
            )
        };
        canteens.push(
            <FunctionCard
                children={children()}
                title={`${canteen.name}`}
            />
        )
    });
    return canteens
};

class CanteenApp extends React.Component {


    search = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push(`/canteen/search`);
        }
    };

    handleSearch = () => {
        this.props.history.push('/canteen/search');
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
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
                            placeholder="Tell us what is your favorite?"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onKeyPress={this.search}
                        />
                    </div>
                </div>

                <div className={classes.candiv}>
                    <Typography className={classes.subtitle} variant="h5">Recently visited</Typography>
                    <div className={classes.cardRoot}>
                        {
                            recentViewed.map((counter, index) => (
                                <CounterCard key={index} counter={counter}/>
                            ))
                        }
                    </div>
                </div>

                <div className={classes.candiv}>
                    <Typography className={classes.subtitle} variant="h5">Trending</Typography>
                    <div className={classes.cardRoot}>
                        {
                            popular.map((counter, index) => (
                                <CounterCard key={index} counter={counter}/>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.candiv}>
                    <Typography className={classes.subtitle} variant="h5">Explore More</Typography>
                    {displayCanteens()}
                </div>
            </div>
        )
    }
}

CanteenApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CanteenApp);