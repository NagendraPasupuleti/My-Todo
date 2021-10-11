import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "react-uuid"


class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      item:"",
      id:uuid(),
      editItem:false
    }

  }
  handleChange=e=>{
    this.setState({
      item:e.target.value
    })
  }
  handleSumbit=e=> {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      item: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      id:uuid(),
      items:updatedItems,
      item:"",
      editItem:false
    })
  }

   clearItems=()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filteredEmployees=this.state.items.filter(item=>
    item.id!==id)
    this.setState({
      items:filteredEmployees
    })
  }
  handleEdit=id=>{
    const filteredEmployees=this.state.items.filter(item=>
    item.id!==id)
    const selectedItem=this.state.items.find(item=>item.id===id)
    this.setState({
      items:filteredEmployees,
      item:selectedItem.item,
      id:id,
      editItem:true

    })

  }


  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mt-5">
              <h3 className="text-success text-center font-weight-bold">Todo List Application</h3>
              <TodoInput item={this.state.item}
                         editItem={this.state.editItem}
                         handleChange={this.handleChange}
                         handleSubmit={this.handleSumbit}/>
              <TodoList
                  items={this.state.items}
                  clearList={this.clearItems}
                  handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>
          </div>

        </div>
    );
  }

}

export default App;
