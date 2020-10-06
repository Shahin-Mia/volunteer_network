import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        background: "white",
        padding: 30,
        borderRadius: 10
    },
    fieldWidth: {
        width: 450
    }
}));


const AddEvent = () => {
    const classes = useStyles();
    const [eventInfo, setEventInfo] = useState({
        date: "",
        title: "",
        image: "https://i.ibb.co/q53bYDp/extra-Volunteer.png",
        description: ""
    });

    const handleInput = (event) => {
        const newEventInfo = { ...eventInfo };
        if (event.target.name === "title") {
            newEventInfo.title = event.target.value;
        }
        if (event.target.name === "date") {
            newEventInfo.date = event.target.value;
        }
        if (event.target.name === "description") {
            newEventInfo.description = event.target.value;
        }
        setEventInfo(newEventInfo);
    }

    const handleSubmit = () => {
        fetch('https://young-ocean-39701.herokuapp.com/addActivity', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(eventInfo)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
            <TextField
                required
                className={classes.fieldWidth}
                name="title"
                label="Event Title"
                variant="outlined"
                onBlur={handleInput}
            />
            <TextField
                required
                variant="outlined"
                name="date"
                label="Date"
                type="date"
                onBlur={handleInput}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br />
            <TextField
                required
                className={classes.fieldWidth}
                name="description"
                label="Description"
                rows={5}
                multiline
                variant="outlined"
                size="medium"
                onBlur={handleInput}
            />
            <TextField
                label="Upload Image"
                name="image"
                variant="outlined"
                type="file"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Submit
            </Button>
        </form>
    );
};

export default AddEvent;