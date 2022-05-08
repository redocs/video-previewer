import PropTypes from 'prop-types';
import './button.scss';
import cn from 'classnames';

const Tag = props => {

    const { checked, value, onClick } = props;

    return <label className={cn('checkbox-button', { 'checked': checked })}>
        <input type="checkbox" className="checkbox-assistive-text" value={value} checked={checked} onChange={onClick} />
        <span>{value}</span>
    </label>
}

Tag.propTypes = {
    checked: PropTypes.bool,
    value: PropTypes.string,
    onClick: PropTypes.func
}

Tag.defaultProps = {
    onClick: () => {}
}

export { Tag, Tag as default };