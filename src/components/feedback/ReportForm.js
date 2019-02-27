import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "../common/Button";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import RequiredField from "../common/RequiredField";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '5%',
        marginRight: '5%'
    },
    menu: {
        width: 200,
    },
    textField: {
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

class ReportForm extends React.Component {
    state = {
        name: '',
        phone: '',
        email: '',
        matric: '',
        category: 'ACA',
        reporter: 'STU',
        issues: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = () => {
        this.props.handleClose();
        this.props.handleSubmit();
    };

    render() {
        const {classes} = this.props;
        const {name, phone, email, matric, category, reporter, issues} = this.state;

        return (
            <FormControl className={classes.container} noValidate autoComplete="off">
                <RequiredField initValue="">
                    <TextField
                        id="name-field"
                        label="Name"
                        className={classes.textField}
                        value={name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                </RequiredField>
                <RequiredField initValue="">
                    <TextField
                        id="matric-no-field"
                        label="Matric No./Staff No."
                        className={classes.textField}
                        value={matric}
                        onChange={this.handleChange('matric')}
                        margin="normal"
                    />
                </RequiredField>
                <TextField
                    id="phone-no-field"
                    label="Phone Number"
                    className={classes.textField}
                    value={phone}
                    onChange={this.handleChange('phone')}
                    margin="normal"
                />
                <RequiredField initValue="">
                    <TextField
                        id="email-field"
                        label="Email"
                        className={classes.textField}
                        required
                        value={email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    />
                </RequiredField>
                <TextField
                    id="select-issue-category"
                    className={classes.textField}
                    select
                    required
                    label="Select Issue Category"
                    value={category}
                    onChange={this.handleChange('category')}
                    SelectProps={{MenuProps: {className: classes.menu}}}
                    margin="normal"
                >
                    {categories.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="select-reporter-category"
                    className={classes.textField}
                    select
                    required
                    label="Domain"
                    value={reporter}
                    onChange={this.handleChange('reporter')}
                    SelectProps={{MenuProps: {className: classes.menu}}}
                    margin="normal"
                >
                    {reporters.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <RequiredField initValue="">
                    <TextField
                        id="outlined-uncontrolled"
                        label="Your Issues"
                        required
                        multiline
                        rows="4"
                        rowsMax="8"
                        value={issues}
                        onChange={this.handleChange('issues')}
                        margin="normal"
                    />
                </RequiredField>
                <div style={{display: "flex"}}>
                    <div style={{flexGrow: 1}}/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </div>
            </FormControl>
        );
    }
}

ReportForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReportForm);
