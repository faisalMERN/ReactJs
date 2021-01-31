function Btncomponent(props) {

  return (
    <button type="button" style={{ backgroundColor: props.color, color: props.textclr }} className="btn">{props.text}</button>
  );
}

Btncomponent.defaultProps = {
  text: 'Default',
  color: 'yellow',
  textclr: 'gray'
}



export default Btncomponent;
