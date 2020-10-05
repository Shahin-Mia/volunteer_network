import React, { useContext } from 'react';
import {
    AppBar, makeStyles, Toolbar, Typography, withStyles, Button
} from '@material-ui/core';
import logo from '../../logos/Group 1329.png';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 40
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    linkItem: {
        padding: theme.spacing(3)
    },
    appBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    linkBtn: {
        marginLeft: 10
    }
}));

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/"><img style={{ height: 60 }} src={logo} alt="volunteer-network-logo" /></Link>
                    </Typography>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography className={classes.linkItem} color="textPrimary" variant='button' >
                            Home
                        </Typography>
                    </Link>
                    <Link to="#donation" style={{ textDecoration: 'none' }}>
                        <Typography className={classes.linkItem} color="textPrimary" variant='button'>
                            Donation
                        </Typography>
                    </Link>
                    <Link to="/allRegisteredActivities" style={{ textDecoration: 'none' }}>
                        <Typography className={classes.linkItem} color="textPrimary" variant='button'>
                            Events
                        </Typography>
                    </Link>
                    <Link to="#blog" style={{ textDecoration: 'none' }}>
                        <Typography className={classes.linkItem} color="textPrimary" variant='button'>
                            Blog
                        </Typography>
                    </Link>
                    {loggedInUser.email ?
                        <Typography className={classes.linkItem} color="textPrimary" variant='button'>
                            {loggedInUser.displayName}
                        </Typography>
                        : <Button
                            size="large"
                            onClick={() => history.push('/login')}
                            className={classes.linkBtn}
                            color="primary"
                            variant="contained"
                        >Register
                        </Button>
                    }
                    {!loggedInUser.email ?
                        <Button
                            size="large"
                            onClick={() => history.push('/admin')}
                            className={classes.linkBtn}
                            variant="contained"
                        >Admin
                        </Button> :
                        <Button
                            size="large"
                            onClick={() => setLoggedInUser({})}
                            className={classes.linkBtn}
                            variant="contained"
                        >Logout
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );

}



export default withStyles(useStyles)(NavBar);