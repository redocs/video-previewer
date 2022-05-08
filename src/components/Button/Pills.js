import PropTypes from 'prop-types';
import './button.scss';
import cn from 'classnames';

const Pills = props => {

    const { text, theme } = props;

    return <span className={cn('pills', { [theme]: theme })}>{text}</span>
}

Pills.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string
}

export { Pills, Pills as default };