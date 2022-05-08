
import PropTypes from 'prop-types';
import { NavLink, Link, useLocation } from "react-router-dom";
import { IconMenu } from "../Icons";
import logo from './logo.svg';
import user from './user.png';

const Header = props => {

    let location = useLocation();
    const { menu } = props;

    return <header className="header">
        <div className="header__logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
        {menu && <div className="header__menu">
            {['create', 'saved'].map(item => <NavLink
                key={item}
                to={`/${item}`}
            >
                {({ isActive }) => {
                    // console.log({ location, isActive });
                    let activeMenu = isActive;
                    if(location.pathname === '/' && item === 'create') {
                        activeMenu = true;
                    }
                    return <IconMenu name={item} svg={item} active={activeMenu} />
                }}
            </NavLink>)}
        </div>}
        {menu && <div className="header__user">
            <Link to='/user'>
                <img src={user} alt="User" />
            </Link>
        </div>}
    </header>
}

Header.propTypes = {
    menu: PropTypes.bool
}

Header.defaultProps = {
    menu: false
}

export default Header;