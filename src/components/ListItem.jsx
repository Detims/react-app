export default function ListItem({id, title, description, onDelete}) {
    function handleClick(){
        onDelete(id)
    }
    
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}