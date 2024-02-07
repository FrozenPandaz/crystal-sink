import styles from './react-vitest-storybook.module.css';

/* eslint-disable-next-line */
export interface ReactVitestStorybookProps {}

export function ReactVitestStorybook(props: ReactVitestStorybookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactVitestStorybook!</h1>
    </div>
  );
}

export default ReactVitestStorybook;
