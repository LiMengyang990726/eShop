import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

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
        marginTop: "1.5%"
    },
    card: {
        marginTop: "1.5%",
    },
    image: {
        width: "200px",
        height: "200px",
    },
    grid: {
        marginTop: "1.5%",
        marginBottom:"1.5%",
    }
});

class ProductCard extends React.Component {
    handleAddToCart = () => {
        alert("Add to cart successfully!")
    }

    render() {
        const { classes, productID, merchantID, price, description, image, catogory } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <img className={classes.image} src={image} />
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container>
                                <Typography component="h5" variant="h5">
                                    Product ID: {productID}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Price: {price}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Description: {description}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Catagory: {catogory}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Merchant: {merchantID}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Button color="primary" onClick={this.handleAddToCart}>Add to cart</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    productID: PropTypes.int,
    merchantID: PropTypes.string,
    price: PropTypes.float,
    description: PropTypes.string,
    image: PropTypes.string,
    catogory: PropTypes.string,
};

export default withStyles(styles)(ProductCard);