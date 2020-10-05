import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const RegisterForm = (props) => {
    const [loggedInUser] = useContext(UserContext);
    const classes = useStyles();
    const { handleBlur, handleSubmit, title } = props;

    return (
        <div className={classes.paper}>
            <Link to="/"><img style={{ height: 70 }} src={logo} alt="volunteer-network-logo" /></Link>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Register As a Volunteer
                </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    defaultValue={loggedInUser.displayName}
                                    label="Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    defaultValue={loggedInUser.email}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="date"
                                    label="Date"
                                    type="date"
                                    name="date"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="activity"
                                    label="Activity"
                                    name="activity"
                                    defaultValue={title}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!props.userInfo.date}
                        >
                            Register
                    </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default RegisterForm;