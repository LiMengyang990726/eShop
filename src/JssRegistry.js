import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import jssNested from 'jss-nested';
import {createGenerateClassName, createMuiTheme, jssPreset, MuiThemeProvider} from '@material-ui/core/styles'

const generateClassName = createGenerateClassName();
const jss = create({
    plugins: [jssPreset().plugins, jssNested()],
    ...jssPreset(),
});
const hysiaTheme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 48,
            '@media (min-width:0px) and (orientation: landscape)': {
                minHeight: 36,
            },
            '@media (min-width:600px)': {
                minHeight: 56,
            }
        }
    },
    palette: {
        primary: {main: '#FF9800', contrastText: '#f9f9f9'},
        secondary: {main: '#b300d7', contrastText: '#363D4E'},
        error: {main: '#F4606C',},
    },
    shape: {
        borderRadius: 8,
        buttonBorderRadius: 4,
        avatarBorderRadius: 16
    },
    typography: {
        useNextVariants: true,
    },
});

const JssRegistry = ({children}) => {
    return (
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={hysiaTheme}>
                {children}
            </MuiThemeProvider>
        </JssProvider>
    )
};

export default JssRegistry;
