import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "../common/app/HeaderLoggedinCustomer";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";

const styles = () => ({
    root: {
        alignItems: 'center',
    },
    divider: {
        marginTop: "3%",
        marginBottom: "3%"
    },
    title: {
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"1.5%"
    },
    card: {
        marginTop: "1.5%",
    },
    image: {
        width: "200px",
        height: "200px",
    }
});

class PencilSearch extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header />

                <div className={classes.root}>
                    <div className={classes.divider}>
                        <Divider />
                    </div>

                    <div className={classes.title}>
                        <Typography variant="h4" gutterBottom stype={{ marginLeft: "10%" }}>
                            All Results
                        </Typography>

                        <Card className={classes.card}>
                        <Grid container spacing={24} className={classes.grid}>
                            <Grid item xs={3}>
                                <img className={classes.image} src={"https://cdn11.bigcommerce.com/s-ngj8xv09kn/images/stencil/1280x1280/products/414/2238/Wood_Pen_Rosewood_Wide_with_logo__42226.1510468652.jpg"} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container>
                                    <Typography component="h5" variant="h5">
                                        Product ID:
                                </Typography>
                                </Grid>
                                <Grid container>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Price:
                                </Typography>
                                </Grid>
                                <Grid container>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Description:
                                </Typography>
                                </Grid>
                                <Grid container>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Catogory:
                                </Typography>
                                </Grid>
                                <Grid container>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Merchant: 
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                    </div>

                    
                </div>
            </div>
        );
    }
}


PencilSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PencilSearch);