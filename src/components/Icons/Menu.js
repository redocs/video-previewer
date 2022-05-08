import PropTypes from 'prop-types';
import './icons.scss';
import cn from 'classnames';

const Menu = props => {

    const { onClick } = props

    return <i className={cn('icon', 'icon__menu')} onClick={onClick}>
        <span />
    </i>
}

Menu.propTypes = {
    onClick: PropTypes.func
}

Menu.defaultProps = {
    onClick: () => {}
}

export { Menu, Menu as default };