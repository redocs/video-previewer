import PropTypes from 'prop-types';
import cn from 'classnames';

const IconMenu = props => {

    const { name, svg, active } = props;

    let elementSVG = () => { };

    const colorIcon = active ? '#3860ad' : '#999999';

    switch (svg) {
        case 'create':
            elementSVG = Videos;
            break;

        case 'saved':
            elementSVG = List;
            break;

        default:
            elementSVG = Videos;
            break;
    }

    return <div className={cn("iconMenu", { 'active': active })} aria-label={name}>{elementSVG({ fill: colorIcon })}</div>
}

IconMenu.propTypes = {
    name: PropTypes.string,
    svg: PropTypes.string,
    active: PropTypes.bool,
}

IconMenu.defaultProps = {
    name: 'create',
    svg: 'create'
}

const Videos = props => {

    const { fill } = props;

    return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} fillRule="evenodd" clipRule="evenodd" d="M21.6439 16.828V11.004L26.5999 8.00802V19.824L21.6439 16.828ZM19.4319 21.308H2.9119C2.0719 21.308 1.3999 20.664 1.3999 19.852V8.14802C1.3999 7.33602 2.0719 6.69202 2.9119 6.69202H19.4319C20.2719 6.69202 20.9439 7.33602 20.9439 8.14802V19.824C20.9439 20.664 20.2719 21.308 19.4319 21.308ZM17.9199 9.80002C17.9199 9.49202 17.6679 9.24002 17.3599 9.24002H14.1119C13.8039 9.24002 13.5519 9.49202 13.5519 9.80002V10.36C13.5519 10.668 13.8039 10.92 14.1119 10.92H17.3319C17.6399 10.92 17.8919 10.668 17.8919 10.36V9.80002H17.9199Z" />
    </svg>

}

Videos.propTypes = {
    fill: PropTypes.string
}

Videos.defaultProps = {
    fill: '#000'
}

const List = props => {

    const { fill } = props;

    return <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} d="M29.04 8.44801C29.04 7.74401 28.336 7.04001 27.632 7.04001H16.368C15.664 7.04001 14.96 7.74401 14.96 8.44801V8.80001H29.04V8.44801Z" />
        <path fill={fill} d="M32.5599 11.968C32.5599 11.264 31.8559 10.56 31.1519 10.56H12.8479C12.1439 10.56 11.4399 11.264 11.4399 11.968V12.32H32.5599V11.968Z" />
        <path fill={fill} d="M18.48 30.976L27.28 25.52L18.48 20.064V30.976Z" />
        <path fill={fill} d="M32.2079 14.08H11.6159C9.67992 14.08 7.91992 15.84 7.91992 17.776V33.264C7.91992 35.2 9.67992 36.96 11.6159 36.96H32.3839C34.3199 36.96 36.0799 35.2 36.0799 33.088V17.776C36.0799 15.84 34.3199 14.08 32.2079 14.08ZM34.1439 17.776V33.264C34.1439 34.32 33.2639 35.2 32.2084 35.2H11.6159C10.5599 35.2 9.67992 34.32 9.67992 33.088V17.776C9.67992 16.72 10.5599 15.84 11.6159 15.84H32.3839C33.4399 15.84 34.3199 16.72 34.1439 17.776Z" />
    </svg>

}

List.propTypes = {
    fill: PropTypes.string
}

List.defaultProps = {
    fill: '#000'
}

export { IconMenu, IconMenu as default };