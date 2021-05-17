import AntdTestComponents from 'components/AntdTest';
import Link from 'next/link';
import './index.less';

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <Link href="/tailwind">
          <div className="text-5xl text-green-400 cursor-pointer hover:text-blue-400">Go to Tailwind</div>
        </Link>
        <div className="w-10/12">
          <AntdTestComponents />
        </div>
      </main>
    </div>
  );
}
