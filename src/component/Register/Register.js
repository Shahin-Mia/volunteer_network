import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import RegisterForm from '../RegisterForm/RegisterForm';




const Register = () => {
    const [loggedInUser] = useContext(UserContext);
    const { title, id } = useParams();
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({
        date: "",
        description: "",
        activity: title
    });

    const [activityData, setActivityData] = useState([]);
    useEffect(() => {
        fetch(`https://young-ocean-39701.herokuapp.com/activity/${id}`)
            .then(res => res.json())
            .then(data => setActivityData(data))
    }, [id]);

    const { image } = activityData;

    const handleBlur = event => {
        const newUserInfo = { ...userInfo };
        if (event.target.name === "date") {
            newUserInfo.date = event.target.value;
        }
        if (event.target.name === "description") {
            newUserInfo.description = event.target.value;
        }
        setUserInfo(newUserInfo);
    }

    const handleSubmit = () => {
        const details = { ...loggedInUser, ...userInfo, image };
        fetch('https://young-ocean-39701.herokuapp.com/addVolunteer', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(results => console.log(results))
        history.push('/allRegisteredActivities');
    }

    return (
        <div>
            <RegisterForm
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                title={title}
                userInfo={userInfo}
            />
        </div>
    );
};

export default Register;