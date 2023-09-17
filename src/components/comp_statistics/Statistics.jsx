import css from './Statistics.module.css'

export function  Statistics ({ title, children }) {
    return (<section className={css.statistics}>{title && <h2 className={css.title}>{title}</h2>}{children}</section>);
};


const getBgColor = variant=> {
    switch (variant) {
        case "id-1":
            return "rgb (255, 0, 0)";
        case "id-2":
return "rgb (0, 255, 0)";
case "id-3":
return "rgb (0, 0, 255)";
case "id-4":
return "rgb (255, 255, 0)";
case "id-5":
return "rgb (0, 255, 255)";
default: throw new Error(`Unsupported variant prop value - ${variant}`);
}
};



export function StatisticsList({ stats }) {
    return (<ul className={css.list}>
        {stats.map(stat => (
              <li className={css.item} key={stat.id}
              style={{ backgroundColor: getBgColor(stat.id)}}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
        ))}
    </ul>);  
};