const Input = (props) => { 
  const aoDigitar = (e) => {
    props.aoSalvar(e.target.value)
  }
return (
  <div>
    <label> { props.label } </label>
    <input 
    onChange={aoDigitar}
    placeholder={ props.placeholder}
    type={ props.tipo || 'text'}
    value={ props.valor}
    name={ props.name}
    />
  </div>
)
}
export default Input