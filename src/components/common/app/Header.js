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

  constructor(props) {
    super(props);
    this.merchantID = '';
    this.merchantExist = true;
    this.password = '';
    this.passwordCorrect = true;
    this.signuppassword =  '';
    this.signupconfirmPassword = '';

    this.signupCustomerID = '';
    this.signupCustomerPassword = '';
    this.creditCardNo = '';
    this.creditCardCVV = '';
  }

  state = {
    openLogin: false,
    openSignup: false,
    value: 0,
    
  };

  getCustomerID(evt){
    this.signupCustomerID = evt.target.value;
    this.setState({
      signupCustomerID:evt.target.value
    })
  }

  getCustomerPassword(evt){
    this.signupCustomerPassword = evt.target.value;
    this.setState({
      signupCustomerPassword:evt.target.value
    })
  }

  getCustomerCard(evt){
    this.creditCardNo = evt.target.value;
    this.setState({
      creditCardNo:evt.target.value
    })
  }

  getCustomerCardCVV(evt){
    this.creditCardCVV = evt.target.value;
    this.setState({
      creditCardCVV:evt.target.value
    })
  }

  updateMerchantID(evt) {
    this.merchantID = evt.target.value;
    this.setState({
      merchantID: evt.target.value
    });
    console.log(this.merchantID);
  }

  updateMerchantPassword(evt) {
    this.password = evt.target.value;
    this.setState({
      password: evt.target.value
    });
    console.log(this.password);
  }

  passwordSignUp(evt){
    this.signuppassword = evt.target.value;
    this.setState({
      signuppassword: evt.target.value
    });
    console.log(this.signuppassword);
  }

  confirmpasswordSignUp(evt){
    this.signupconfirmPassword = evt.target.value;
    this.setState({
      signupconfirmPassword: evt.target.value
    });
    console.log(this.signupconfirmPassword);
  }

  handleClickLoginOpen = () => {
    this.setState({ openLogin: true });
  };

  handleLoginClose = () => {
    this.setState({ openLogin: false });
  };

  enterPressedPassword = (evt) =>{
    var code = evt.keyCode || evt.which;
    if(code === 13) { //13 is the enter keycode
      var requestUrl = '/api/'+'merchant/'+this.merchantID+'/password/'+this.password;
      fetch(requestUrl)
      .then(response => {
        response.text().then(data => {
          this.passwordCorrect = false;
        })
      })
    } 
    this.passwordCorrect = true;
    console.log("If the password correct "+this.passwordCorrect);
  }

  enterPressedID = (evt) =>{
    var code = evt.keyCode || evt.which;
    if(code === 13) { //13 is the enter keycode
      var requestUrl = '/api/'+'merchant/'+this.merchantID;
      fetch(requestUrl)
      .then(response => {
        response.text().then(data => {
          this.merchantExist = false;
        })
      })
    } 
    this.merchantExist = true;
    console.log("If the merchant exists "+this.passwordCorrect);
  }

  enterPressedConfirmPassword = (evt) => {
      console.log("singup password " + this.signuppassword);
      console.log("confirm password " + this.signupconfirmPassword);
      var code = evt.keyCode || evt.which;
      if(code === 13){
        if (this.signuppassword !== this.signupconfirmPassword) {
          alert("Passwords don't match");
      } else {
        
      }
      }
      
  }
  handleLoginClick = () => {
    this.setState({ openLogin: false });
    window.open("/merchant");
  };

  handleLoginClickCustomer = () => {
    this.setState({ openLogin: false });
    window.open("/customer");
  };

  handleClickSignupOpen = () => {
    this.setState({ openSignup: true });
  };

  handleSignupCloseMerchant = () => {
    this.setState({ openSignup: false });
    alert("Account created successfully");
    fetch('/api/'+'customer/',{
      method: "GET",
      mode: "no-cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    })
      .then(response => {
        response.text().then(data => {
          console.log(data);
        })
      })
  };

  handleSignupCloseCustomer = () => {
    this.setState({ openSignup: false });
    alert("Account created successfully");
    var requestUrl='/api/'+'customer/post';
    var data = {"customerID":this.signupCustomerID,
            "password":this.signupCustomerPassword,
            "bank_account":this.creditCardNo,
            "CVV":this.creditCardCVV};

    fetch(requestUrl, {
      method: "POST", 
      mode: "no-cors", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => {
        console.log(response.text())
      });
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
                          value={this.merchantID}
                          onChange={evt => this.updateMerchantID(evt)}
                          onKeyPress={evt => this.enterPressedID(evt)}
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
                          value={this.password}
                          onChange={evt => this.updateMerchantPassword(evt)}
                          onKeyPress={evt => this.enterPressedPassword(evt)}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleLoginClick} color="primary">
                        Login
                      </Button>
                    </DialogActions>
                    {this.merchantExist ? (
                      <div />
                    ) : (
                        <DialogContent ><Typography variant="h6">Account does not exist.</Typography></DialogContent>
                      )}
                    {this.passwordCorrect ? (
                      <div />
                    ) : (
                        <DialogContent ><Typography variant="h6">Incorrect Password!</Typography></DialogContent>
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
                          defaultValue=""
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
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleLoginClickCustomer} color="primary">
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
                          defaultValue=""
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
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          value={this.signuppassword}
                          onChange={evt => this.passwordSignUp(evt)}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Confirm Password"
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          value={this.signupconfirmPassword}
                          onChange={evt=>this.confirmpasswordSignUp(evt)}
                          onKeyPress={evt => this.enterPressedConfirmPassword(evt)}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleSignupCloseMerchant} color="primary">
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
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          value={this.signupCustomerID}
                          onChange={evt=>this.getCustomerID(evt)}
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
                          value={this.signupCustomerPassword}
                          onChange={evt=>this.getCustomerPassword(evt)}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Confirm Password"
                          defaultValue=""
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
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          value={this.creditCardNo}
                          onChange={evt=>this.getCustomerCard(evt)}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description" >
                        <TextField
                          required
                          id="outlined-required"
                          label="Credit Card CVV"
                          defaultValue=""
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          value={this.creditCardCVV}
                          onChange={evt=>this.getCustomerCardCVV(evt)}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleSignupCloseCustomer} color="primary">
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