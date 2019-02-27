import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    root: {
        flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	}
});


class BusApp extends React.Component {
    redirectToTarget = () => {
        this.props.history.push(`https://itunes.apple.com/sg/app/ntu-go/id1004510295?mt=8`)
    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.redirectToTarget}>Redirect</button>
            </div>
        )
    }
}

BusApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusApp);
