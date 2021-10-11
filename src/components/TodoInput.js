import React from "react";

class TodoInput  extends  React.Component{
    render() {
        let {item,handleChange,handleSubmit,editItem}=this.props
        return (
            <div className="container">
                <pre>{JSON.stringify(item)}</pre>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text bg-info">
                                            <i className="fa fa-book text-white "/>
                                        </div>
                                        </div>
                                        <input
                                            value={item}
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control text-capitalize"
                                            placeholder="Enter the task "/>
                                    </div>

                                    <div>
                                       <button className={
                                           editItem?"btn btn-success btn-sm":"btn btn-primary btn-sm"
                                       }>
                                           {
                                               editItem?"Edit Item":"Add task"
                                           }
                                       </button>
                                    </div>
                                    
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
export default  TodoInput;