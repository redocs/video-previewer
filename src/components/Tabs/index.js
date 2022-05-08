import PropTypes from 'prop-types';
import './tabs.scss';
import cn from 'classnames';

const Tabs = props => {

    const { tabs, active, changeTab, children } = props;

    const onTabClick = e => {
        // console.log('onTabClick', { e })
        changeTab(e);
    }

    return <div className='tabs'>
        <ul className='tabs__menu'>
            {tabs.map((tab, i) => <li className={cn({ 'active': i === active })} onClick={() => onTabClick(i)} key={i}>{tab}</li>)}
        </ul>
        <div className="tabs__container">
            {children}
        </div>
    </div>
}

Tabs.propTypes = {
    tabs: PropTypes.array,
    active: PropTypes.number,
    changeTab: PropTypes.func,
    children: PropTypes.any
}

export default Tabs;