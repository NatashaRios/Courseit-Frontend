import styles from '../../styles/Input.module.scss';

export default function Input({ placeholder, type, onChange, onKeyPress, value }){
    
    return(
        <>
            <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange} onKeyPress={onKeyPress} value={value}/>
        </>
    )
}