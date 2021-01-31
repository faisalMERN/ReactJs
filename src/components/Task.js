function Task({ task, onDelete }) {

    return (
        <div style={{ width: '50%', marginLeft: '30%' }}>
            <h4><small>Name: </small>{task.text}
                <button className="fa fa-close btn text-danger pl-5" onClick={() => onDelete(task.id)} />
            </h4>
            <h6 className="text-align-left pr-5 text-monospace"><small>City: </small> {task.city} </h6>
        </div>
    );
}




export default Task;
