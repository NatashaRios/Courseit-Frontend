export default function Prueba({ blog }){
  console.log(blog)
return <p>holi </p>
}

export async function getStaticProps(){
  const data = await fetch('https://dev.to/api/articles?tag=javascript&top=1');
  const json = await data.json();
  
  return{
    props: {
      blog: json
    },
  };
}