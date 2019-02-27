import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "../common/Button";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '2%',
    marginRight: '2%'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  paper1: {
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

const categories = [
  {
    value: 'ACA',
    label: 'Academic Matters',
  },
  {
    value: 'REM',
    label: 'Residential Matters',
  },
  {
    value: 'FAI',
    label: 'Facility Issue',
  },
  {
    value: 'CLR',
    label: 'Cleaness Report',
  },
];

const reporters = [
  {
    value: 'STU',
    label: 'Student',
  },
  {
    value: 'STA',
    label: 'Staff',
  },
  {
    value: 'ALU',
    label: 'Alumni',
  },
  {
    value: 'VIS',
    label: 'Vistor',
  },
];

const initialState = {
    name: '',
    phone: '',
    email: '',
    matric: '',
    category: 'ACA',
    reporter: 'STU',
    issues: '',
    open: false
};

class ReportForm extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    matric: '',
    itemname: '',
    reporter: 'STU',
    description: '',
    open: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    this.handleOpen()
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name-field"
          label="Name"
          style={{width: '45%', marginRight: '4%'}}
          required
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
            id="matric-no-field"
            label="Phone Number"
            style={{width: '45%', marginLeft: "4%"}}
            fullWidth
            value={this.state.phone}
            onChange={this.handleChange('phone')}
            margin="normal"
        />
        <TextField
          id="email-field"
          label="Email"
          style={{width: '45%', marginRight: "4%"}}
          required
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          id="matric-no-field"
          label="Matric No./Staff No."
          style={{width: '45%', marginLeft: "4%"}}
          value={this.state.matric}
          onChange={this.handleChange('matric')}
          margin="normal"
        />
        <TextField
          id="lost-item-field"
          label="Lost Item"
          style={{width: '45%', marginRight: "4%"}}
          placeholder="e.g. Room Key"
          fullWidth
          value={this.state.itemname}
          onChange={this.handleChange('itemname')}
          margin="normal"
        />
        <TextField
            id="select-reporter-category"
            select
            label="Domain"
            value={this.state.reporter}
            onChange={this.handleChange('reporter')}
            style={{width: '45%', marginLeft: "4%"}}
            SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
            margin="normal"
        >
          {reporters.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-uncontrolled"
          label="Some Description"
          style={{width: '98%', height: '200'}}
          multiline
          rows="4"
          rowsMax="8"
          className={classes.textField}
          value={this.state.issues}
          onChange={this.handleChange('description')} 
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary"
          style={{width: '10%'}}
          onClick={this.handleSubmit}
        >
          Submit
        </Button>

        

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Thank you for your submission
            </Typography>
          </div>
        </Modal>
      </form>
    );
  }
}

ReportForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportForm);
