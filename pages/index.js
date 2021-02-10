import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>App Monsters| Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Sunt adipisicing enim ullamco culpa cupidatat eu consectetur tempor. Proident est incididunt exercitation proident ipsum ipsum enim labore tempor est qui amet eiusmod do. Fugiat sit id nostrud reprehenderit reprehenderit irure tempor amet. Incididunt anim reprehenderit aliqua in minim nisi.</p>
        <p className={styles.text}>Voluptate anim occaecat ullamco do non deserunt sint ex sit. Ut officia aute officia sit nisi mollit minim adipisicing anim non incididunt officia duis adipisicing. Labore proident Lorem magna consequat sint ut laboris anim eu labore. Aliqua cupidatat enim occaecat proident amet esse cupidatat aute quis sit sunt veniam tempor ad. Cillum ullamco et sunt commodo.</p>
        <Link href="/members">
          <a className={styles.btn}>See Joined Members</a>
        </Link>
      </div>  
   </> 
  )
}
