import styles from './react-jest.module.css';

/* eslint-disable-next-line */
export interface ReactJestProps {}

export function ReactJest(props: ReactJestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactJest!</h1>
    </div>
  );
}

export default ReactJest;
