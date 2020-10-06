import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Container, Typography } from '@material-ui/core';
import './Home.css';
import MediaCard from '../MediaCard/MediaCard';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://young-ocean-39701.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="banner">
            <Container maxWidth='lg'>
                <NavBar></NavBar>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                >
                    I GROW BY HELPING PEOPLE IN NEED
                </Typography>
                <div className="search-field">
                    <input type="text" name="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>
                {
                    data.map(data => <MediaCard data={data} key={data._id}></MediaCard>)
                }
            </Container>
        </div>
    );
};

export default Home;