import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import Tasks from '../Tasks/Tasks';

const TaskManager = () => {
    const [loggedInUser] = useContext(UserContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/registeredActivities?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [loggedInUser])

    return (
        <div>
            <Container maxWidth='lg'>
                <NavBar></NavBar>
            </Container>
            <Grid container justify="center">
                {
                    userData.map(data => <Tasks key={data._id} data={data}></Tasks>)
                }
            </Grid>
        </div>
    );
};

export default TaskManager;