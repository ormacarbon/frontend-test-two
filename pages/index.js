import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout currentPage='home'>
      <h2>Are you ready to explore the universe?</h2>
      <Link href='/explore'>Let&#039;s go!</Link>
    </Layout>
  )
}
