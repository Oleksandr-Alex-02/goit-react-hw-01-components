import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory(props) {
    const { items } = props

    const tableLtems = items.map((item) =>
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    )

    return (<table className={css.table}>
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

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}