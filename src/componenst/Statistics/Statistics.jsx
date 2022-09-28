import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { stats, title } = props

  const li = stats.map((arr) =>
    <li className="item" key={arr.id}>
      <span className="label">{arr.label}</span>
      <span className="percentage">{arr.percentage}%</span>
    </li>
  );

  return (<section class="statistics">
    <div className="stats_cont">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {li}
      </ul>
    </div>
  </section>
  );
}

Statistics.prototype = {
  stats: PropTypes.array,
  title: PropTypes.string,
}

const colorRandom = Math.floor(Math.random() * 16777215).toString(16)
console.log(colorRandom)

