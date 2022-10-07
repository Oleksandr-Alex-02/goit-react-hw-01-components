import PropTypes from 'prop-types';
// import StatisticsList from './StatisticsList';
import css from './Statistics.module.css'

function bacColor() {
  const colorRandom = Math.floor(Math.random() * 16777215).toString(16)
  return `#${colorRandom}`
}

export default function Statistics(props) {
  const { stats, title } = props

  return (<section className={css.statistics}>
    <div className={css.stats__cont}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        {stats.map((stat) => {
          const background = bacColor();

          return < li className={css.item} style={{ backgroundColor: background }} key={stat.id} >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li >
        })}
      </ul>
    </div>
  </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,

    })),
}

