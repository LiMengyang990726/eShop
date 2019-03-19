import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "../common/app/HeaderLoggedinCustomer";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import cart from '../asset/cart.json';
import PurchaseCard from './PurchaseCard';

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
    }
});

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.result = [];
    }

    componentDidMount() {
        fetch('/product/')
            .then(response => {
                response.text().then(data => {
                    this.result = data;
                    console.log(this.result);
                    console.log("Here (Did) is being executed");
                })
            })
    }

    componentWillMount() {
        fetch('/product/')
            .then(response => {
                response.text().then(data => {
                    this.result = data;
                    console.log(this.result);
                    console.log("Here (Will) is being executed");
                })
            })
    }

    getResponse = () => {
        fetch('/product/')
            .then(response => {
                response.text().then(data => {
                    //   this.result = data;
                    //   console.log(this.result);
                    console.log("Here (function) is being executed");
                    console.log(data);
                })
            })
    };

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

                        <Grid container spacing={24} className={classes.grid}>

                            <Grid item>
                                {
                                    cart.map((product, index) => (
                                        <Grid key={index} xs item>
                                            <PurchaseCard
                                                productID={product.productID}
                                                merchantID={product.merchantID}
                                                price={product.price}
                                                description={product.description}
                                                image={product.image}
                                                catogory={product.catogory} 
                                                qty={product.qty}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}


Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);