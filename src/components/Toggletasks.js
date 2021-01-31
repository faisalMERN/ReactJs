import Task from './Task'


function Tasks({ onDelete, tasks }) {

  return (
    <>

      { tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} />))}


    </>
  );
}




export default Tasks;
