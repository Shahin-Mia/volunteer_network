import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        '&:nth-of-type(4n-1)': {
            backgroundColor: '#FFBD3E',
        },
        '&:nth-of-type(4n)': {
            backgroundColor: '#FF7044',
        },
        '&:nth-of-type(4n+1)': {
            backgroundColor: '#3F90FC',
        },
        '&:nth-of-type(4n+2)': {
            backgroundColor: '#421FCF',
        },
        maxWidth: 270,
        display: "inline-block",
        margin: 18,
        color: "white"
    },
    media: {
        width: 270,
        height: 240
    },
    link: {
        color: "white",
        textDecoration: "none",
    }
});


export default function MediaCard(props) {
    const classes = useStyles();
    const { _id, title, image } = props.data

    return (
        <Card className={classes.root}>
            <Link className={classes.link} to={`/register/${title}/${_id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                    />
                    <CardContent>
                        <Typography variant="subtitle2" align="center"  >
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card >
    );
}
