import PropTypes from 'prop-types';

const False = props => {

    const { fill } = props;

    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} d="M9.06046 8.00002L12.0292 5.03127C12.1701 4.89062 12.2494 4.69976 12.2495 4.50068C12.2497 4.3016 12.1708 4.1106 12.0301 3.96971C11.8895 3.82881 11.6986 3.74956 11.4996 3.74938C11.3005 3.74921 11.1095 3.82812 10.9686 3.96877L7.99984 6.93752L5.03109 3.96877C4.89019 3.82787 4.69909 3.74872 4.49984 3.74872C4.30058 3.74872 4.10948 3.82787 3.96859 3.96877C3.82769 4.10967 3.74854 4.30076 3.74854 4.50002C3.74854 4.69928 3.82769 4.89037 3.96859 5.03127L6.93734 8.00002L3.96859 10.9688C3.82769 11.1097 3.74854 11.3008 3.74854 11.5C3.74854 11.6993 3.82769 11.8904 3.96859 12.0313C4.10948 12.1722 4.30058 12.2513 4.49984 12.2513C4.69909 12.2513 4.89019 12.1722 5.03109 12.0313L7.99984 9.06252L10.9686 12.0313C11.1095 12.1722 11.3006 12.2513 11.4998 12.2513C11.6991 12.2513 11.8902 12.1722 12.0311 12.0313C12.172 11.8904 12.2511 11.6993 12.2511 11.5C12.2511 11.3008 12.172 11.1097 12.0311 10.9688L9.06046 8.00002Z" />
    </svg>

}

False.propTypes = {
    fill: PropTypes.string
}

False.defaultProps = {
    fill: '#000'
}

export { False, False as default };