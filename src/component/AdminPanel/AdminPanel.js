import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import UserIcon from '../../logos/users-alt 1.png';
import plusIcon from '../../logos/plus 1.png';
import UserList from '../UserList/UserList';
import AddEvent from '../AddEvent/AddEvent';
import { Link } from 'react-router-dom';
import './AdminPanel.css';


const AdminPanel = () => {
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(() => {
        fetch('https://young-ocean-39701.herokuapp.com/volunteerList')
            .then(res => res.json())
            .then(data => setVolunteerList(data));
    }, [])

    const styleSheet = {
        bg: {
            backgroundColor: '#F4F7FC',
            width: "100%",
            height: "82vh",
            padding: 25,
            overflowY: "auto"
        },
    }

    const [addEvent, setAddEvent] = useState(false);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={3} container spacing={4} alignItems="baseline" direction='column'>
                    <Grid item>
                        <Link to="/">
                            <img style={{ height: 60 }} src={logo} alt="volunteer-network-logo" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="#registerList" onClick={() => setAddEvent(false)}>
                            <img style={{ height: 17 }} src={UserIcon} alt='user' />
                            Volunteer Register List
                        </Link>
                        <br /><br />
                        <Link to="#addEvent" onClick={() => setAddEvent(true)}>
                            <img style={{ height: 17 }} src={plusIcon} alt='user' />
                             Add Event
                        </Link>
                    </Grid>
                </Grid>
                <Grid item md={9} xs={12} container direction="column">
                    <Grid item>
                        <Typography style={{ padding: 20 }} variant="h5" component="h2">
                            {addEvent ? "Add Event" : "Volunteer Registration List"}
                        </Typography>
                    </Grid>
                    <Grid item style={styleSheet.bg}>
                        {addEvent ? <AddEvent></AddEvent> : <UserList volunteerList={volunteerList}></UserList>}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminPanel;