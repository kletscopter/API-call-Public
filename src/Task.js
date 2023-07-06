export const Task = (props) => {
    <div>
        <li>{props.taskName}</li>
        <button onClick={() => props.deleteTask(props.id)}>X</button>  {/*Because a parameter is being added to deleteTask we have to add a function declaration before () => */}
    </div>
    console.log(props.TaskName)
}
