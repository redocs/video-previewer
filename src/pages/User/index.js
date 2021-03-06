import React, { Suspense } from 'react';
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { Button } from "../../components/Button";
import Tabs from "../../components/Tabs";
import Profile from "./Profile";
// import Plans from "./Plans";
// import Billing from "./Billing";
import mock from "../../mock/mock";
import { useState } from "react";
import { useStateValue } from "../../state";
import './user.scss';
import ls from 'local-storage';

// We use React.lazy for optimize performance
// Maybe <Suspense> need a Skeleton Loading Component

const Plans = React.lazy(() => import('./Plans'));
const Billing = React.lazy(() => import('./Billing'));

const User = () => {

    // * User Page
    // We create subPages for the Tab Navigation

    const navigate = useNavigate();

    const [{ user }, dispatch] = useStateValue();

    const onLogout = () => {
        console.log('onLogout');
        dispatch({
            type: 'addUser',
            user: {}
        });
        ls.remove('user');
        ls.remove('myVideos');
        navigate("/");
    }

    const onChangeTab = e => {
        setTabActive(e);
    }
    
    const [tabActive, setTabActive] = useState(0);

    return <div className="page">
        <Title title='My Account'>
            <div className='page__actions'>
                <Button onClick={onLogout} text='Logout' theme='light-error' />
            </div>
        </Title>
        <div className="page__container">
            <div className="profile__container">
                <Tabs noGrid active={tabActive} tabs={mock.userTabs} changeTab={onChangeTab}>
                    {tabActive === 0 && <Profile user={user} />}
                    {tabActive === 1 && <Suspense fallback={<div>Loading...</div>}><Plans /></Suspense>}
                    {tabActive === 2 && <Suspense fallback={<div>Loading...</div>}><Billing /></Suspense>}
                </Tabs>
            </div>
        </div>
    </div>
}

export default User;