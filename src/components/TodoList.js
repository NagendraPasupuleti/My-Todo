import React from "react";
import TodoItem from "./TodoItem";

class TodoList  extends  React.Component{

    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center bg-primary text-white font-weight-bold">Todo List</h2>
                    <ul className="list-group">
                        {
                            items.map(item=> <TodoItem key={item.id}
                                                       item={item.item}
                                                       handleEdit={()=>handleEdit(item.id)}
                                                       handleDelete={()=>handleDelete(item.id)}/>
                            )
                        }

                    </ul>
                        <button onClick={clearList} className="btn btn-pink btn-block btn-sm mt-5">
                           <i className="fa fa-trash mx-2 font-weight-bold"/> Clear All
                        </button>

                    </div>


                </div>


            </div>
        );
    }

}
export default  TodoList