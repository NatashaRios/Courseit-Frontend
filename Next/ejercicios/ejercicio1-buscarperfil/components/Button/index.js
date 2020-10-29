import styles from '../../styles/Button.module.scss';

export default function Button({ label, handleSearch }){
    return(
        <>
            <button className={styles.button} onClick={handleSearch}>{label}</button>
        </>
    )
}