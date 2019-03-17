import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import HeaderLoggedinMerchant from "../common/app/HeaderLoggedinMerchant";

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        width: "80%",
        margin: "auto",
        marginTop: "3%"
    },
    bigAvatar: {
        width: 100,
        height: 100,
    },
    titles: {
        marginLeft: "10%",
        marginRight: "10%"
    },
    divider: {
        marginTop: "3%",
        marginBottom: "3%"
    },
    grid: {
        marginTop: "1%",
    }
});

class MerchantApp extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <HeaderLoggedinMerchant />
                <div className={classes.content}>
                    <Grid container alignItems="center" spacing={16}>
                        <Grid item xs={2}>
                            <Avatar
                                src="https://cdn2.iconfinder.com/data/icons/person-gender-hairstyle-clothes-variations/48/Female-Side-comb-O-neck-512.png"
                                className={classes.bigAvatar} />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5" gutterBottom>MerchantID</Typography>
                            <Typography variant="subheading" color="textSecondary" gutterBottom>Description</Typography>
                        </Grid>


                        <Grid item xs={12}>
                            <div className={classes.divider}>
                                <Divider />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.titles}>
                                <Typography variant="h4">
                                    New Orders
                        </Typography>
                            </div>
                        </Grid>


                        <Grid item xs={12}>
                            <div className={classes.divider}>
                                <Divider />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.titles}>
                                <Typography variant="h4">
                                    All Products
                        </Typography>
                            </div>
                        </Grid>


                        <Grid item xs={12}>
                            <div className={classes.divider}>
                                <Divider />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.titles}>
                                <Typography variant="h4">
                                    New Products
                        </Typography>
                            </div>
                        </Grid>


                        <Grid container spacing={24} className={classes.grid}>
                            <Grid item xs={3}>
                                <img className={classes.canvas} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg"} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container>
                                    <Typography variant="h6">Name</Typography>
                                </Grid>
                                <Grid container>
                                    <Typography variant="h6">Price</Typography>
                                </Grid>
                                <Grid container>
                                    <Typography variant="h6">Description</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

MerchantApp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MerchantApp);