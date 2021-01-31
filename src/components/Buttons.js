import { Link } from 'react-router-dom'

function Buttons() {


  return (

    <div>
      <pre className="pt-3 ">
        <Link to="/"><button type="button" className="btn mr-3 bg-dark text-white"> Home </button></Link>
        <Link to="a"><button type="button" className="btn bg-dark text-white mr-3"> A </button></Link>
        <Link to="b"><button type="button" className="btn bg-dark text-white mr-3"> B </button></Link>
        <Link to="c"><button type="button" className="btn bg-dark text-white"> C </button></Link>
      </pre>
    </div>
  );
}


export default Buttons;