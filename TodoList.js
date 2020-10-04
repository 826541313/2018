import React, { Component } from 'react';
import Input from './Input';
import List from './List';


export class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            inputValue : '',
            todos:[],
        }
    }

    valueChange=(e)=>{
        this.setState({inputValue:e.target.value});

    }
    componentDidMount(){
        // this.input.focus()
        let todos = localStorage.getItem('todos')
        if(todos){
            this.setState({
                todos:JSON.parse(todos)
            })
        }
    }

    addoing=() =>{

        if(this.state.inputValue !=''){

        this.setState(
            {
                todos:[
                    {
                        title:this.state.inputValue,
                        done:false
                    },
                    ...this.state.todos
                ]

        }        
        ,()=>{
            localStorage.setItem('todos',
            JSON.stringify(this.state.todos)
            )
        }
        )
  }

        this.state.inputValue='';
        // this.ref.input.focus();
        
        // this.
        // this.itm.focus();
    }
    wandone = (index)=>{
        let newdoings = JSON.parse(JSON.stringify(this.state.todos))
        newdoings[index].done = !newdoings[index].done
        this.setState({
            todos:newdoings
        },()=>{
            localStorage.setItem('todos',
            JSON.stringify(this.state.todos)
            )
        }
        )
    }

    del = (idx)=>{
        this.setState({
            todos:this.state.todos.filter((item,index)=>index!=idx)
        },()=>{
            localStorage.setItem('todos',
            JSON.stringify(this.state.todos)
            )
        }
        )
    }
    renderdoings = (done)=>{
        return this.state.todos.map((todoss,idx)=>{
            if(done==todoss.done){
                return  <li>
                            <input type='checkbox' onClick ={()=>this.wandone(idx)} checked={done}/>
                            <span dangerouslySetInnerHTML={{__html:todoss.title}}></span>
                            <button onClick={()=>this.del(idx)}>删除</button>
                        </li>
            
            }
        }
        )
    }
    change=(num1,num2,num3)=>{
        num3 = num1;
        num1 = num2;
        num2 = num3;
    }
    render() {
        const {todos,inputValue} = this.state;

        return (
            <div>
                <Input 
                onChange = {this.valueChange}
                    value = {this.state.inputValue}
                ref  = {input => this.input = input}
                onClick = {this.addoing}
                />
                <List 
                renderdoings={this.renderdoings}
                todos ={todos}
                />
            </div>
        )
    }
}

export default TodoList