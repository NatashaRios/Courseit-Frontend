function Input({ type, handleInput, value }){
  return(
    <>
      <input type={type} onChange={(e) => handleInput(e.target.value)} value={value}/>
    </>
  )
}

export default Input;