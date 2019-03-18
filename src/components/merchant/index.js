import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HeaderLoggedinMerchant from "../common/app/HeaderLoggedinMerchant";
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';

const options = [
    'Wooden Pen',
    'Pencil',
];

const styles = theme => ({
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
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "80%"
    },
    card: {
        marginTop: "1.5%",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: 151,
    },
    cardContent: {
        flex: '1 0 auto',
    },
    image: {
        width: "200px",
        height: "200px",
    }
});

class MerchantApp extends React.Component {
    constructor(props) {
        super(props);
        this.newOrders = [];
        this.allProducts = [];
    }

    state = {
        anchorEl: null,
        selectedIndex: 1,
    };

    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

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
                            <Typography variant="h5" gutterBottom>MerchantID: 221</Typography>
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
                                                    Quantity:
                                                </Typography>
                                            </Grid>
                                            <Grid container>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    Customer:
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
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
                                        </Grid>
                                    </Grid>
                                </Card>
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
                                <img className={classes.canvas} src={"https://static.thenounproject.com/png/187803-200.png"} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Name"
                                        defaultValue=""
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid container>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Price"
                                        defaultValue=""
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid container>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Description"
                                        defaultValue=""
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid container>
                                    <List component="nav">
                                        <ListItem
                                            button
                                            aria-haspopup="true"
                                            aria-controls="lock-menu"
                                            aria-label="Select Catagory"
                                            onClick={this.handleClickListItem}
                                        >
                                            <ListItemText
                                                primary="Select Catagory"
                                                secondary={options[this.state.selectedIndex]}
                                            />
                                        </ListItem>
                                    </List>
                                    <Menu
                                        id="lock-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={this.handleClose}
                                    >
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                selected={index === this.state.selectedIndex}
                                                onClick={event => this.handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }
}

MerchantApp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MerchantApp);