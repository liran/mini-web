import AntdTestComponents from 'components/AntdTest';
import './index.less';

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div style={{ width: 800 }}>
          <AntdTestComponents />
        </div>
      </main>
    </div>
  );
}
