import PropTypes from 'prop-types';
import './title.scss';

const Title = props => {

    const { title, children } = props;

    return <div className="title">
        <div className='title__view'>
            <div>
                <h1>
                    {title}
                </h1>
            </div>
            {children && <div className='title_buttons'>{children}</div>}
        </div>
    </div>
}

Title.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}

export default Title;