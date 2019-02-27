import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Order extends React.Component {
    state = {
        open: true,
    };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

    handleClose = () => {
        this.setState({open: false});
        this.props.history.push(`/canteen/search`)
    };

    render() {
        return (
            <div>
                {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Slide in alert dialog
        </Button> */}
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Yay the food you ordered is being prepared!"}
                    </DialogTitle>
                </Dialog>
            </div>
        );
    }
}

export default Order;