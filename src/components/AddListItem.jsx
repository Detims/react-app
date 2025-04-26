import { useState } from "react"

export default function AddListItem({addItem}) {
    const [task, setTask] = useState({
        title: "",
        description: "",
    })    

    function handleChange(event) {
        const { name, value } = event.target
        setTask((prevItem) => {
            return {
                ...prevItem,
                [name]: value,
            }
        })
    }

    function submitItem(event){
        addItem(task)
        setTask({
            title: "",
            description: "",
        })
        event.preventDefault()
    }

    return(
        <form className="container">
            <input 
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={task.title}
            />
            <textarea 
                name="description"
                placeholder="Write your task..."
                onChange={handleChange}
                value={task.description}
                rows="3"
            />
            <button onClick={submitItem}>Add</button>
        </form>
    )
}