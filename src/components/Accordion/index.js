import PropTypes from 'prop-types';
import { Arrow } from "../Icons";
import { Grid } from "../List";
import cn from 'classnames';
import './accordion.scss';
import { useState } from "react";

const Accordion = props => {

    const { data, active, activeType, onSelect } = props;

    const [tabActive, setTabActive] = useState(activeType);

    const onChangeAccordion = e => {
        // console.log('onChangeAccordion')
        setTabActive(e)
    }

    const _onSelect = e => {
        // console.log({ e });
        onSelect(e, tabActive);
    }

    return <div className="accordion">
        {data.map((item, i) => {
            const isActive = i === tabActive;
            return <div key={i} onClick={() => { onChangeAccordion(i) }} className={cn('accordion__item', { 'active': isActive })}>
                {isActive && <>
                    <div className="accordion__title">
                        <h2>{item.type}</h2>
                        <Arrow direction='up' size='big' onClick={() => { }} />
                    </div>
                    <div>
                        <Grid active={active} data={item.items} onSelect={_onSelect} />
                    </div>
                </>}
                {!isActive && <>
                    <div className="accordion__title">
                        <h2>{item.type}</h2>
                        <Arrow direction='down' size='big' onClick={() => { }} />
                    </div>
                </>}
            </div>
        })}
    </div>
}

Accordion.propTypes = {
    data: PropTypes.array,
    active: PropTypes.number,
    activeType: PropTypes.number,
    onSelect: PropTypes.func
}

Accordion.defaulProps = {
    onSelect: () => { }
}

export default Accordion;