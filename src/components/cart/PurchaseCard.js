import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import 'font-awesome/css/font-awesome.min.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable>
            <Paper {...props} />
        </Draggable>
    );
}


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
        marginBottom: "1.5%",
    }
});

class PurchaseCard extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAddToCart = () => {
        alert("Add to cart successfully!")
    }


    render() {
        const { classes, productID, merchantID, price, description, image, catogory, qty } = this.props;

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
                                <Typography variant="subtitle1" color="textSecondary">
                                    Quantity: {qty}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Button color="primary" onClick={this.handleClickOpen}>
                                    Make Payment
                                </Button>
                                <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                >
                                    <DialogTitle id="draggable-dialog-title"><i class="fab fa-telegram-plane"></i>   Confirmation</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            
                                            <Typography>
                                            Congradulations! Your payment is on the way!
                                            </Typography>
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

PurchaseCard.propTypes = {
    classes: PropTypes.object.isRequired,
    productID: PropTypes.int,
    merchantID: PropTypes.string,
    price: PropTypes.float,
    description: PropTypes.string,
    image: PropTypes.string,
    catogory: PropTypes.string,
    qty: PropTypes.int,
};

export default withStyles(styles)(PurchaseCard);