import Head from 'next/head';
import styles from '../../styles/members.module.css';
import Link from 'next/link'

export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props : {members:data}
    }
}
const Members = ({ members }) => {
    return ( 
        <>
         <Head>
        <title>App Monsters| Members</title>
      </Head>
        <h1>Members</h1>
        {members.map(member =>(
            <Link href ={'/members/' + member.id} key ={member.id}>
             <a className ={styles.single}>
                 <h3>{member.name}</h3>
             </a>
            </Link>
        ))}
        </>
     );
}
 
export default Members;