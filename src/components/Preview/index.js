import PropTypes from 'prop-types';
import { Button } from '../Button';
import './preview.scss';

const Preview = props => {

    const { image } = props;

    return <div className="preview">
        <div className="preview__actor">
            <img alt="preview Actor" src={image} />
            <span className="preview__label">Preview</span>
        </div>
        <div className="preview__info">
            <div>
                Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages
            </div>
            <div className="preview__button">
                <Button text="Listen" />
            </div>
            <span className='count_char'>0 char</span>
        </div>
    </div>
}

Preview.propTypes = {
    image: PropTypes.string,
}

Preview.defaultProps = {
    image: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
}

export default Preview;