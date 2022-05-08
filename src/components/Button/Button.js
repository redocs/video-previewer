import PropTypes from 'prop-types';
import './button.scss';
import cn from 'classnames';

const Button = props => {

    const { text, onClick, theme, disable, type } = props;

    if(type === 'input') return <input type='submit' onClick={onClick} className={cn('button', { [theme]: theme })} disabled={disable} value={text} />;

    return <button onClick={onClick} className={cn('button', { [theme]: theme })} disabled={disable}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string,
    disable: PropTypes.bool,
    type: PropTypes.string
}

Button.defaultProps = {
    onClick: () => {}
}

export { Button, Button as default };