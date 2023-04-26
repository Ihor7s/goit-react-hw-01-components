import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {data.map(item => {
          return (
            <li
              key={item.id}
                  className={css.item}
            >
              <span className={css.label}> {item.label} </span>
              <span className={css.percentage}> {item.percentage}% </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};