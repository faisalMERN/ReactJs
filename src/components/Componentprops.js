function Componentprops(props) {

  return (
    <header>
      <h3 className="text-secondary">Title: {props.title}</h3>
      <h3 className="text-secondary">Name: {props.name}</h3>
    </header>
  );
}

Componentprops.defaultProps = {
  title: 'Default Title',
  name: 'Default Name',
}



export default Componentprops;
