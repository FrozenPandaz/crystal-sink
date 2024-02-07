import styles from './react-vitest.module.css';

/* eslint-disable-next-line */
export interface ReactVitestProps {}

export function ReactVitest(props: ReactVitestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactVitest!</h1>
    </div>
  );
}

export default ReactVitest;
