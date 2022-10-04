import PropTypes from 'prop-types';

function bacColor() {
  const colorRandom = Math.floor(Math.random() * 16777215).toString(16)
  return colorRandom
}

const background = {
  backgroundColor: bacColor(),
}

export default function Statistics(props) {
  const { stats, title } = props

  const li = stats.map((arr) =>
    <li className="item" style={background} key={arr.id}>
      <span className="label">{arr.label}</span>
      <span className="percentage">{arr.percentage}%</span>
    </li>
  );

  if (li.length !== 0) {
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
}

Statistics.prototype = {
  stats: PropTypes.array,
  title: PropTypes.string,
}

