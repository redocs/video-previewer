import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { Button } from "../../components/Button";
import Tabs from "../../components/Tabs";
import Profile from "./Profile";
import Plans from "./Plans";
import Billing from "./Billing";
import mock from "../../mock/mock";
import { useState } from "react";
import { useStateValue } from "../../state";
import './user.scss';

const User = props => {

    const navigate = useNavigate();

    const [{ user }, dispatch] = useStateValue();

    const onLogout = () => {
        console.log('onLogout');
        dispatch({
            type: 'addUser',
            user: {}
        });
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
                <Tabs active={tabActive} tabs={mock.userTabs} changeTab={onChangeTab}>
                    {tabActive === 0 && <Profile user={user} />}
                    {tabActive === 1 && <Plans />}
                    {tabActive === 2 && <Billing />}
                </Tabs>
            </div>
        </div>
    </div>
}

export default User;