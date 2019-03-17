import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  canvas: {
    width: "100%"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  popup: {
    width: "100%",
    height: "40%",
    margin: "auto",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class ButtonAppBar extends React.Component {

  state = {
    openLogin: false,
    openSignup:false,
    value:0,
    merchantExist: '',
    merchantID: ''
  };

  componentDidMount(){
    axios.get('http://localhost:8080/checkMerchantExist/{merchantID}')
    .then(res =>{
      console.log("here is executing" + res)
      this.setState({
        merchantExist: res.data
      })
    })
  }

  updateMerchantID(evt) {
    this.setState({
      merchantID: evt.target.value
    });
    console.log(this.state.merchantID);
  }

  handleClickLoginOpen = () => {
    this.setState({ openLogin: true });
  };

  handleLoginClose = () => {
    this.setState({ openLogin: false });
  };

  handleLoginClick = () => {
    this.setState({ openLogin: false });
  };

  handleClickSignupOpen = () => {
    this.setState({ openSignup: true });
  };

  handleSignupClose = () => {
    this.setState({ openSignup: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              A Pen For You
          </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>

            <div>
              <Button color="inherit" onClick={this.handleClickLoginOpen}>
                Login
              </Button>
              <Dialog
                open={this.state.openLogin}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleLoginClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <AppBar position="static" color="default">
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                  >
                    <Tab label="As merchants" />
                    <Tab label="As customers" />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={classes.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={this.state.value}
                  onChangeIndex={this.handleChangeIndex}
                >
                  <TabContainer dir={classes.direction}>
                    <DialogTitle id="alert-dialog-slide-title">
                      {"Log in to your account"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="ID"
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          value={this.state.merchantID}
                          onChange={evt => this.updateMerchantID(evt)}
                          key={this.state.merchantExist}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Password"
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleLoginClick} color="primary">
                        Login
                      </Button>
                    </DialogActions> 
                    {this.state.merchantExist ? (
                      <div/>
                      ) : (
                        <DialogContent ><Typography variant="h5">Account does not exist.</Typography></DialogContent>
                    )}
                    
                  </TabContainer>

                  <TabContainer dir={classes.direction}>
                  <DialogTitle id="alert-dialog-slide-title">
                      {"Log in to your account"}
                    </DialogTitle>
                    <DialogContent>

                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="ID"
                          defaultValue="Your account ID"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Password"
                          defaultValue="Password"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleLoginClose} color="primary">
                        Login
                      </Button>
                    </DialogActions>
                  </TabContainer>
                </SwipeableViews>

              </Dialog>
            </div>

            <div>
              <Button color="inherit" onClick={this.handleClickSignupOpen}>
                Signup
              </Button>
              <Dialog
                open={this.state.openSignup}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleSignupClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <AppBar position="static" color="default">
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                  >
                    <Tab label="As merchants" />
                    <Tab label="As customers" />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={classes.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={this.state.value}
                  onChangeIndex={this.handleChangeIndex}
                >
                  <TabContainer dir={classes.direction}>
                    <DialogTitle id="alert-dialog-slide-title">
                      {"Sign up for our shop"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="ID"
                          defaultValue="Your account ID"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Password"
                          defaultValue="Password"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Confirm Password"
                          defaultValue="Confirm Password"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleSignupClose} color="primary">
                        Signup
                      </Button>
                    </DialogActions>
                  </TabContainer>

                  <TabContainer dir={classes.direction}>
                  <DialogTitle id="alert-dialog-slide-title">
                      {"Sign up for our shop"}
                    </DialogTitle>
                    <DialogContent>

                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="ID"
                          defaultValue="Your account ID"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Password"
                          defaultValue="Password"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Confirm Password"
                          defaultValue="Confirm Password"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Credit Card Number"
                          defaultValue="E.g. 1234 4321 1234 4321"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Credit Card CVV"
                          defaultValue="E.g. 123"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleSignupClose} color="primary">
                        Signup
                      </Button>
                    </DialogActions>
                  </TabContainer>
                </SwipeableViews>

              </Dialog>
            </div>




          </Toolbar>
          <img className={classes.canvas}
        src={require('../../asset/landingPic.png')}
      />
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);




