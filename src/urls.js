import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import PageNotFound from './components/common/app/PageNotFound';
import HomeApp from './components/home/';
import MerchantApp from './components/merchant/';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './components/common/app/Header';
import CanteenRouter from "./components/canteen/urls";
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
		return <Header LogInTracker={isLoggedIn}/>;
		console.log("in urls", isLoggedIn);
	}else{
		return <HeaderLoggedinMerchant />;
		console.log("in urls", isLoggedIn);
	}
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		return(
		
		<Router history={history}>
			<div className={classes.root}>
				<LogInTrack isLoggedIn={isLoggedIn} />

				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route exact path="/" component={HomeApp} />
						<Route path="/merchants" component={MerchantApp} />
						<Route path="/canteen" component={CanteenRouter} />
						<Route component={PageNotFound} />
					</Switch>
				</main>
				<div id="outfox-footer-container" />
			</div>
		</Router>
		);
	}
}

export default withStyles(classes)(LoginControl);
