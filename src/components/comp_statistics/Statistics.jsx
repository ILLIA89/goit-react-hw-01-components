import css from './Statistics.module.css'

export function  Statistics ({ title, children }) {
    return (<section className={css.statistics}>{title && <h2 className={css.title}>{title}</h2>}{children}</section>);
};