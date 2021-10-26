import './App.css';
import SideMenu from './components/SideMenu';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import { CssBaseline } from '@material-ui/core';

import Employees from './pages/Employees/Employees';

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996"
    },
    secondary: {
      main: "#f83245"
    },
    background: {
      default: "$f4f5f6"
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  },
  shape: {
    borderRadius: '12px'
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
