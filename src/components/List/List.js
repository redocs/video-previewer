import PropTypes from 'prop-types';
import './lists.scss';
import cn from 'classnames';
import play from './play.svg';

const List = props => {

    const { data, active, onSelect } = props;

    const _onSelect = e => {
        // console.log({ e });
        onSelect(e);
    }

    return <div className='list'>
        {data.map((item, i) => {
            return <div key={i} onClick={() => { _onSelect(i) }} className={cn('list__item', { 'active': active === i })}>
                <div className='play'><img src={play} alt='Play' /></div>
                <div>
                    <h2>{item.name}</h2>
                    <img alt={item.name} src={item.image} />
                </div>
            </div>
        })}
    </div>

}

List.propTypes = {
    data: PropTypes.array,
    active: PropTypes.number,
    onSelect: PropTypes.func
}

List.defaultProps = {
    onSelect: () => {}
}

export { List, List as default };