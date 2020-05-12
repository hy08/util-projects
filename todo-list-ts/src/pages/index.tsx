import React from 'react';
import Demo from '../components/demo';
import styles from './index.css';

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.normal}>
      <Demo title="Demo" intro={{ content: '这是介绍文本' }} />
    </div>
  );
}
export default Home;