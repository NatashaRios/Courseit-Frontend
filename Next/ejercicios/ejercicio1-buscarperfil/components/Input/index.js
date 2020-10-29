import styles from '../../styles/Input.module.scss';

export default function Input({ placeholder, type, handleInput, value }){
    return(
        <>
            <input type={type} placeholder={placeholder} onChange={(e) => handleInput(e.target.value)} value={value}/>
        </>
    )
}