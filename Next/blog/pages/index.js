import Link from 'next/link';


export default function Home({ blog }){
  
  
return (
  <section>
  {blog.map((item, key) => {
    return(
      <Link href={`/articulo/${item.id}`}>
        <a href='#' key={key}>
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>
        </a>
      </Link>
      )
    })}
    </section>
  )
}


export async function getStaticProps(){
  const data = await fetch('https://dev.to/api/articles?tag=javascript&top=1');
  const json = await data.json();
  
  return{
    props: {
      blog: json
    },
    revalidate: 3600
  };
}