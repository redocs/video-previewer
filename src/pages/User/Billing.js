import mock from "../../mock/mock";
import { Invoice } from "../../components/Icons";

const Billing = props => {

    const mockTableHeader = mock.table.header;
    const mockTableData = mock.table.data;

    return <div className="billing">
        <table className="billing__table">
            <thead>
                <tr>
                    {mockTableHeader.map(item => <th key={item}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {mockTableData.map((item, i) => {
                    return <tr key={i}>
                        <td>{item.reference}</td>
                        <td>{item.date}</td>
                        <td>${item.amount}</td>
                        <td><Invoice fill="#222222" /></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default Billing;