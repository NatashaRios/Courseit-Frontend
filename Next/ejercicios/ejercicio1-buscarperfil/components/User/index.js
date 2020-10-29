import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../../styles/User.module.scss';

export default function User({ user, info }){
  const router = useRouter()
  console.log(info)

  return(
    <>
      {router.route == '/' && (
        <div className={styles.container}>
          <img className={styles.img} src={user.img} />
          <div className={styles.text}>
            <Link href={`/handler/${user.login}`}>
              <p className={styles.name}>{user.name}</p>
            </Link>
            <p className={styles.desc}>{user.desc}</p>
          </div>
        </div>
      )}
      {router.route == '/handler/[handler]' && (
        <div className={styles.container}>
          <img className={styles.img} src={info.avatar_url} />
          <div className={styles.text}>
            <p className={styles.name}>{info.name}</p>
            <p className={styles.desc}>{info.bio}</p>
          </div>
        </div>
      )}
    </>
  )
}