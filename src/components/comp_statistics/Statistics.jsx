import css from './Statistics.module.css'
import { getBgColor } from './getBgColor';

export const  Statistics = ({ title, stats}) => {
    return (<section className={css.statistics}>{title && (<h2 className={css.title}>{title}</h2>)}
    
     <ul className={css.list}>
        {stats.map(({label, id, percentage})=>
              (<li className={css.item} key={id}
              style={{ backgroundColor: getBgColor(id)}}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>)
        )}
    </ul></section>);
};



