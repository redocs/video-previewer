import '../Pages.scss';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import Title from '../../components/Title';
import { useStateValue } from '../../state';

const Signup = props => {

    // * Signup Page
    // The form send the information to the State with the dispatch addUser and navigate to Create

    const [{ user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const onSignup = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addUser',
            user: { email: e.target.elements.email.value, name: e.target.elements.fullname.value }
        });
        navigate("/create");
    }

    return <div className="page login">
        <Title
            title='Create an account'
        />
        <div className="page__container">
            {!user.email && <form onSubmit={onSignup} className='form'>
                <Input
                    label='Full name'
                    name='fullname'
                    type='text'
                />

                <Input
                    label='Email address'
                    name='email'
                    type='email'
                />

                <Input
                    label='New Password'
                    name='newpassword'
                    type='password'
                    placeholder=''
                    rightLabel={<span className='strongemail'>Strong</span>}
                />

                <div className='submit'>
                    <Button type='input' theme='primary' text='Signup' />
                </div>
            </form>}
            <div className='signup_link'>
                Already user? <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
}

export default Signup;