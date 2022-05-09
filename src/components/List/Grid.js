import PropTypes from 'prop-types';
import './lists.scss';
import cn from 'classnames';

const Grid = props => {

    const { data, active, onSelect } = props;

    const _onSelect = e => {
        // console.log({ e });
        onSelect(e);
    }

    return <div className='grid'>
        {data.map((item, i) => {
            return <div key={i} onClick={() => { _onSelect(i) }} className={cn('grid__item', { 'active': active === i })}>
                <img alt={item.name} src={item.image} width={150} height={85} />
                <h2>{item.name}</h2>
            </div>
        })}
    </div>

}

Grid.propTypes = {
    data: PropTypes.array,
    active: PropTypes.number,
    onSelect: PropTypes.func
}

Grid.defaultProps = {
    onSelect: () => {}
}

export { Grid, Grid as default };