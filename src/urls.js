import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import PageNotFound from './components/common/app/PageNotFound';
import HomeApp from './components/home/';
import MerchantApp from './components/merchant/';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './components/common/app/Header';
import CustomerApp from "./components/customer/";
import WoodenSearch from "./components/search/woodenSearch";
import PencilSearch from "./components/search/pencilSearch";
import CartApp from "./components/cart/index";
import HeaderLoggedinMerchant from "./components/common/app/HeaderLoggedinMerchant";

const history = createBrowserHistory();

const classes = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%'
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0,
		minHeight: '100%'
	},
	toolbar: theme.mixins.toolbar
});

function LogInTrack(isLoggedIn) {
	if (isLoggedIn) {
		return <Header LogInTracker={isLoggedIn} />;
		console.log("in urls", isLoggedIn);
	} else {
		return <HeaderLoggedinMerchant />;
		console.log("in urls", isLoggedIn);
	}
}

const RootRouter = ({ classes }) => (
	<Router history={history}>
		<div className={classes.root}>
			<main>
				<Switch>
					<Route exact path="/" component={HomeApp} />
					<Route path="/merchant" component={MerchantApp} />
					<Route path="/customer" component={CustomerApp} />
					<Route path="/wooden" component={WoodenSearch} />
					<Route path="/pencil" component={PencilSearch} />
					<Route path="/cart" component={CartApp} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<div id="outfox-footer-container" />
		</div>
	</Router>
);

export default withStyles(classes)(RootRouter);

