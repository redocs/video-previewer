import PropTypes from 'prop-types';
import './icons.scss';
import cn from 'classnames';

const Arrow = props => {

    const { direction, onClick, size } = props

    return <i className={cn('icon', 'icon__arrow', { [direction] : direction, [size] : size })} onClick={onClick} />
}

Arrow.propTypes = {
    direction: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string
}

Arrow.defaultProps = {
    onClick: () => {},
    size: 'normal'
}

export { Arrow, Arrow as default }