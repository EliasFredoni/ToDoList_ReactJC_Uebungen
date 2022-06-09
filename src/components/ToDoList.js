const ToDoList = (props) => {
    return (
        <form action="">
            <input type="checkbox" name="" id="" checked={props.completed} />
            <label>{props.item}</label>
        </form>
    );
}

export default ToDoList;