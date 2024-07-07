import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderBox}>
      <div className={styles.loader} />
    </div>
  );
};
