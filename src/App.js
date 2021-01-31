import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Componentb from './components/Componentb'
import Componentc from './components/Componentc'
import Componenta from './components/Componenta'
import Component1 from './components/Component1'
import Componentprops from './components/Componentprops'
import Buttons from './components/Buttons'
import Btncomponent from './components/Btncomponent'
import MapThroughArray from './components/MapThroughArray'
import Toggletasks from './components/Toggletasks'
import AddTask from './components/AddTask'
import { useState } from 'react'



function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Hassaan',
      city: 'Lahore'
    },
    {
      id: 2,
      text: 'Hashim',
      city: 'Sialkot'
    },
    {
      id: 3,
      text: 'Hamza',
      city: 'Gujranwala'
    }
  ])

  //Add Task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (


    <Router>
      <div className="text-center container-fluid text-align-center">
        <h1 className="pt-3 text-success"><b>ReactJS Cheat Sheet <small>(with Bootstrap)</small></b></h1>

        <hr className="hr" />

        <h2 className="pb-3 text-info"><b>1. Navigating through components</b></h2>
        <Route path='/' exact component={Component1} />
        <Route path='/a' exact component={Componenta} />
        <Route path='/b' exact component={Componentb} />
        <Route path='/c' exact component={Componentc} />
        <Buttons />

        <hr className="hr" />

        <h2 className="pb-3 text-info"><b>2. Component Using Props</b></h2>
        <h4>Title and Name below are Specified in Component Props.</h4>
        <Componentprops title='ReactJS' name='Faisal' />
        <h4>Title and Name below are not Specified, hence Default.</h4>
        <Componentprops />

        <hr className="hr" />

        <h2 className="pb-3 text-info"><b>3. Button Component with Different Props</b></h2>
        <p>Button that use props to set the Text, Text Color and Background Color : <Btncomponent text='Test 1' color='green' textclr='yellow' /></p>
        <p>Button that use props to set the Text, Text Color and Background Color : <Btncomponent text='Test 3' color='blue' textclr='white' /></p>
        <p>Default Button with Default Text, Text Color and Background Color : <Btncomponent /></p>

        <hr className="hr" />

        <h2 className="pb-3 text-info"><b>4. Map through Array and Display items</b></h2>
        <MapThroughArray />

        <hr className="hr" />

        <h2 className="pb-3 text-info"><b>5. Persons List using Props and States</b></h2>
        <AddTask onAdd={addTask} />
        <h1 className="text-align-center pb-3 text-secondary"><b>( Persons List )</b></h1>

        {tasks.length > 0 ? (<Toggletasks tasks={tasks} onDelete={deleteTask} />) : (<h5>Nothing to Show</h5>)}

        <hr className="hr mt-5" />



      </div>

    </Router>



  );
}





export default App;
