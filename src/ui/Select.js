import { useState } from 'react';

import styles from './Select.module.css';

function Select({ defaultValue, ...props }) {
  const [active, setActive] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <select
        {...props}
        className={styles.Select}
        value={active}
        onChange={(e) => setActive(e.target.value)}>
        {props.children}
      </select>
      <div
        className={styles.custom}
        aria-hidden="true">
        <div
          className={styles.trigger}
          style={{ display: open ? "none" : "block" }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log('trigger');
            setOpen(true)
          }}></div>
        <div
          className={styles.menu}
          style={{ display: open ? "block" : "none" }}>
          {props.children.map(_ => {
            const classes = [styles.option];
            if (_.props.value === active) {
              classes.push(styles.active);
            }

            return (
              <div
                key={`custom_${_.props.value}`}
                className={classes.join(' ')}
                onClick={(e) => {
                  e.preventDefault();
                  console.log('option')
                  setOpen(false);
                  setActive(_.props.value)
                }}
              >
                <span>{_.props.children}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Select;