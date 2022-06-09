import ToDoList from "./ToDoList";
import data from "../data";

const ToDoItem = () => {
    return (
        <div>
            {
                data.map((elt, i) =>
                    <ToDoList
                        key={i}
                        item={elt.item}
                        completed={elt.completed}
                    />
                )
            }
        </div>
    );
}

export default ToDoItem;