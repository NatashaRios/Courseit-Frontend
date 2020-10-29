import styles from '../../styles/User.module.scss';

export default function User({ user }){
  const name = user.name;
  const desc = user.desc;
  const img = user.img;

  return(
    <>
      <img src={img} />
      <p>{name}</p>
      <p>{desc}</p>
    </>
  )
}