export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    const paths = data.map(user =>{
        return{
            params: {id: user.id.toString()}
        }
    })

    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    const userId = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + userId);
    const data = await res.json();

    return{
        props: {memberData:data}
    }
}

const MemberDetails = ({ memberData }) => {
    return ( 
        <div>
            <h1>{memberData.name}</h1>
            <p>{memberData.email}</p>
            <p>{memberData.website}</p>
        </div>
     );
}
 
export default MemberDetails;