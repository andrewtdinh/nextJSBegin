import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there!  Welcome to my first site built using Nextjs!</p>
        <p>
          For now, this site has very little content, but that will change.
        </p>
      </section>
    </Layout>
  )
}