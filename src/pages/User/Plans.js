import mock from "../../mock/mock";
import { Check, False } from "../../components/Icons";
import { Button } from "../../components/Button";
import cn from 'classnames';

const Plans = () => {

    // Plans Sub Page

    // TODO API Call for Plans
    const plans = mock.plans;

    // TODO API Call for the User Info
    const current = 2;

    return <div className="plans">
        {plans.map((plan, i) => {
            const isActive = current === i;
            let buttonText = isActive ? 'Current Plan' : 'Upgrade';
            let buttonTheme = isActive ? 'big-disabled' : 'big';
            if(plan.price < plans[current].price) {
                buttonText = 'Downgrade';
            }

            return <div className={cn("plans__single", { "active": isActive })} key={i}>
                <h2>{plan.name}</h2>
                <ul className="plans__options">
                    {plan.options.map((option, i) => <Option key={i} color={isActive ? '#fff' : '#181059'} name={option.text} inPlan={option.inPlan} />)}
                </ul>
                <div className="plans__price"><span>$</span>{plan.price}</div>
                <Button theme={buttonTheme} text={buttonText} disable={isActive} />
            </div>
        })}
    </div>
};

const Option = props => {

    const { name, inPlan, color } = props;

    const iconPlan = inPlan ? Check : False;

    return <li><span>{iconPlan({ fill: color })}</span>{name}</li>
}

export default Plans;