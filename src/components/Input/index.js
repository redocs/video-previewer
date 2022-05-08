import PropTypes from 'prop-types';
import './input.scss';
import cn from 'classnames';

const Input = props => {

    const { label, type, name, placeholder, rightLabel, theme, value } = props;

    return <div className={cn('inputField', { [theme]: theme })}>
        <label>
            <span>{label} {rightLabel && rightLabel}</span>
            <input name={name} type={type} placeholder={placeholder} defaultValue={value} />
        </label>
    </div>
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'date']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    rightLabel: PropTypes.any,
    theme: PropTypes.string
}

Input.defaultProps = {
    type: 'text'
}

export default Input;