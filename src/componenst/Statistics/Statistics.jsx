import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function bacColor() {
  const colorRandom = Math.floor(Math.random() * 16777215).toString(16)
  return `#${colorRandom}`
}

export default function Statistics(props) {
  const { stats, title } = props

  const li = stats.map((arr) => {
    const background = bacColor();

    return < li className={css.item} style={{ backgroundColor: background }} key={arr.id} >
      <span className={css.label}>{arr.label}</span>
      <span className={css.percentage}>{arr.percentage}%</span>
    </li >
  });

  if (li.length !== 0) {
    return (<section className={css.statistics}>
      <div className={css.stats__cont}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.stat__list}>
          {li}
        </ul>
      </div>
    </section>
    );
  }
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,

  })),
}

