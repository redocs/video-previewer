import PropTypes from 'prop-types';
import { Button } from '../Button';
import './preview.scss';

const Preview = props => {

    const { image, onChangeText, text } = props;

    const _onChangeText = (e) => {
        // console.log('onChangeText', { e });
        onChangeText(e.target.value)
    }

    return <div className="preview">
        <div className="preview__actor">
            <img alt="preview Actor" src={image} width={700} height={394} />
            <span className="preview__label">Preview</span>
        </div>
        <div className="preview__info">
            <textarea aria-label='Preview Text' onChange={_onChangeText} className="preview__text" rows="6" cols="50" defaultValue={text} />
            <div className="preview__button">
                <Button text="Listen" />
            </div>
            <span className='count_char'>0 char</span>
        </div>
    </div>
}

Preview.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    onChangeText: PropTypes.func
}

Preview.defaultProps = {
    image: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    onChangeText: () => {}
}

export default Preview;