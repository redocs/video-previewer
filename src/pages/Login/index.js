import '../Pages.scss';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import Title from '../../components/Title';
import { useStateValue } from '../../state';

const Login = props => {

    const [{ user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addUser',
            user: { email: e.target.elements.email.value }
        });
        navigate("/create");
    }

    return <div className="page login">
        <Title
            title='Sign In'
        />
        <div className="page__container">
            {!user.email && <form onSubmit={onLogin} className='form'>
                <Input
                    label='Email address'
                    name='email'
                    type='email'
                />

                <Input
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    rightLabel={<Link to="/">Forgot ?</Link>}
                />

                <div className='submit'>
                    <Button type='input' theme='primary' text='Login' />
                </div>
            </form>}
            <div className='signup_link'>
                New here? <Link to="/signup">Signup</Link>
            </div>
        </div>
    </div>
}

export default Login;