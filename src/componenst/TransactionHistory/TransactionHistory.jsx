import PropTypes from 'prop-types';

export default function TransactionHistory(props) {
    const { items } = props

    const tableLtems = items.map((item) =>
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    )

    return (<table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {tableLtems}
        </tbody>
    </table>)
}

PropTypes.transactionHistory = {
    items: PropTypes.array,
}