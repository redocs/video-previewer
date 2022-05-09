import Input from '../../components/Input';
import { Button } from '../../components/Button';
import mock from '../../mock/mock';
import { Edit } from '../../components/Icons';

const Profile = props => {

    // Profile Sub Page

    // TODO API Call for the User Info
    const { user } = props;
    const profileImage = mock.user.image;

    return <div className="profile">
        <div className="profile__image">
            <img src={profileImage} alt='User' />
            <div className='profile__image__edit'>
                <Edit fill="#3860ad" />
            </div>
        </div>
        <div className="profile__form">
            <form>
                <div className='row'>
                    <Input
                        label='First Name'
                        name='firstname'
                        type='text'
                        theme='black'
                        value={user.name}
                    />
                    <Input
                        label='Last Name'
                        name='lastname'
                        type='text'
                        theme='black'
                    />
                </div>
                <div className='row'>
                    <Input
                        label='Email'
                        name='email'
                        type='email'
                        theme='black'
                        value={user.email}
                    />
                </div>
                <div className='profile__form__submit'>
                    <Button type='input' theme='primary' text='Save Changes' />
                </div>
            </form>
        </div>
    </div>
};

export default Profile;