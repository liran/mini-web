import AntdTestComponents from 'components/Antd';
import styles from './index.less';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div style={{ width: 800 }}>
          <AntdTestComponents />
        </div>
      </main>
    </div>
  );
}
