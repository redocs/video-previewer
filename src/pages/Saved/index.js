import WebFont from 'webfontloader';
import { useNavigate } from "react-router-dom";
import Title from '../../components/Title';
import { Button } from '../../components/Button';
import { SingleVideo } from '../../components/Videos';
import { useStateValue } from '../../state';
import { useEffect } from "react";

const Saved = props => {

    // * Saved Page

    // * We decide to use webfontloader because Roboto is called only in 1 page
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto:400']
          }
        });
      }, []);

    const [{ videos }] = useStateValue();

    const navigate = useNavigate();

    // console.log({ videos });

    const onCreateNew = () => {
        navigate("/create");
    }

    return <div className="page">
        <Title
            title='Saved Videos'
        >
            <div className='page__actions'>
                <Button onClick={onCreateNew} text='Create New' theme='primary' />
            </div>
        </Title>
        <div className="page__container">
            <div className='video__container'>
                {videos.map((video, i) => <SingleVideo key={i} video={video} />)}
            </div>
        </div>
    </div>
}
export default Saved;