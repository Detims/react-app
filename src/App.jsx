import { useState } from 'react'
import './App.css'
import AddListItem from './components/AddListItem'
import ListItem from './components/ListItem'

function App() {
  const [tasks, setTasks] = useState([])
  
  function addItem(task) {
    setTasks((prevTasks) => {
      return [...prevTasks, task]
    })
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className='container'>
      <AddListItem 
        addItem={addItem}
      />
      {tasks.map((item, index) => {
        return (
          <ListItem 
            key={index}
            id={index}
            title={item.title}
            description={item.description}
            onDelete={deleteTask}
          />
        )
      })}
    </div>
  )
}

export default App
