import PropTypes from 'prop-types';
import './lists.scss';
import cn from 'classnames';

const Align = props => {

    const { data, active, onSelect } = props;

    const _onSelect = e => {
        // console.log({ e });
        onSelect(e);
    }

    return <div className='align'>
        {data.map((item, i) => {
            return <div key={i} onClick={() => { _onSelect(i) }} className={cn('align__item', { 'active': active === i })}>
                <span>{item.name}</span>
            </div>
        })}
    </div>

}

Align.propTypes = {
    data: PropTypes.array,
    active: PropTypes.number,
    onSelect: PropTypes.func
}

Align.defaultProps = {
    onSelect: () => {}
}

export { Align, Align as default };