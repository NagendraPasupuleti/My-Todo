import React from "react";

class TodoItem  extends  React.Component{
    render() {
        const {item,handleDelete,handleEdit}=this.props
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col">

                            <li className="list-group-item  my-3 d-flex justify-content-between">
                            <h6 className="font-weight-bold text-capitalize text-primary">{item}</h6>
                                <div className="todo-icon">
                                    <span>
                                        <i onClick={handleEdit} className="fa fa-pen font-weight-bold text-info mx-2"/>
                                    </span>
                                    <span>
                                        <i onClick={handleDelete} className="fa fa-trash font-weight-bold mx-2 text-danger "/>
                                    </span>

                                </div>
                            </li>
                    </div>
                </div>


            </div>
        );
    }

}
export default  TodoItem;
