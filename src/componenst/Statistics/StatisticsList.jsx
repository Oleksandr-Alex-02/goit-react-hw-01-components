// import PropTypes from 'prop-types';
// import css from './Statistics.module.css'

// function bacColor() {
//   const colorRandom = Math.floor(Math.random() * 16777215).toString(16)
//   return `#${colorRandom}`
// }

// export default function StatisticsList(props) {
//   const { stats, id, label, percentage } = props

//   return stats.map((stat) => {
//     const background = bacColor();

//     return < li className={css.item} style={{ backgroundColor: background }} key={id} >
//       <span className={css.label}>{label}</span>
//       <span className={css.percentage}>{percentage}%</span>
//     </li >
//   });
// }

// StatisticsList.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.string.isRequired,

//     })),
// }