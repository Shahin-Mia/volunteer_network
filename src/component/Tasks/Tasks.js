import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 500,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 15,
    },
    media: {
        height: 194,
        width: 173
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'baseline'
    },
});

function Tasks(props) {
    const classes = useStyles();
    const { _id, activity, date, image } = props.data;

    const deleteUser = (id, event) => {
        fetch(`http://localhost:4000/deleteUser/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result))
        event.target.parentNode.parentNode.parentNode.style.display = 'none'
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardActions className={classes.body}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {activity}
                        </Typography>
                        <Typography variant="body1" component="h2">
                            {date}
                        </Typography>

                    </CardContent>
                    <Button variant="outlined" onClick={(event) => deleteUser(_id, event)} size="medium" color="default">
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
export default Tasks;