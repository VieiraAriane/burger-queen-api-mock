const Input = (props) => { 
return (
  <div>
    <label> { props.label } </label>
    <input 
    placeholder={ props.placeholder}
    type={ props.tipo || 'text'}
    value={ props.valor}
    name={ props.name}
    />
  </div>
)
}
export default Input