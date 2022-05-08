import PropTypes from 'prop-types';
import mock from "../../mock/mock";
import './videos.scss';
import { Pills } from "../Button";
import { Menu } from "../Icons";

const SingleVideo = props => {
    const { video } = props;

    const imageVideo = mock.actors[video.actor].image;

    return <div className="video">
        <Menu onClick={() => { console.log('open Menu') }} />
        <img src={imageVideo} alt={video.title} />
        <h2>{video.title}</h2>
        <div className="video__tags">
            {video.tags.map(tag => <Pills key={tag} text={tag} />)}
        </div>
    </div>
}

SingleVideo.propTypes = {
    video: PropTypes.object
}

export { SingleVideo, SingleVideo as default };