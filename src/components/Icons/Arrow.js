import PropTypes from 'prop-types';
import './icons.scss';
import cn from 'classnames';

const Arrow = props => {

    const { direction, onClick } = props

    return <i className={cn('icon', 'icon__arrow', { [direction] : direction })} onClick={onClick} />
}

Arrow.propTypes = {
    direction: PropTypes.string,
    onClick: PropTypes.func
}

Arrow.defaultProps = {
    onClick: () => {}
}

export { Arrow, Arrow as default }