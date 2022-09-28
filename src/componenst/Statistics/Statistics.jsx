export default function Statistics(props) {
    const array = props.stats
    
    return  array.map(arr => {
            return <section class="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
    <li className="item">
        <span className="label">{arr.label}</span>
        <span className="percentage">{arr.percentage}%</span>
    </li>
  </ul>
</section>
    })

} 