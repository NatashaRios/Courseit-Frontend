import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [route, setRoute] = useState('');
  function handleChange(e){
    setRoute(e.target.value)
  }
  return (
    <div >
      <input type='text' onChange={handleChange}/>
      <Link href={`/prueba/${route}`}>
        <div>Ir a {route}</div>
        </Link>
    </div>
  )
}
