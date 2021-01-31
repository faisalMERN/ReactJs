
const list = [
  {
    id: 1,
    text: 'Faisal',
    city: 'Lahore'
  },
  {
    id: 2,
    text: 'Hashim',
    city: 'Sialkot'
  },
  {
    id: 3,
    text: 'Ali',
    city: 'Gujranwala'
  }
]


function List(props) {



  return (
    <>
      {list.map((item) => (<h5 key={item.id}>Name: {item.text} ( {item.city} )</h5>))}
    </>
  );
}




export default List;
