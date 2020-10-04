import React from 'react'

const List = (props) => {
    return <div>
        <h2>正在进行
                    {props.todos.filter(item=> !item.done).length}
                    </h2>
                <ul>
                    {props.renderdoings(false)}
                </ul>
                <h2>完成
                    {props.todos.filter(item=> item.done).length}
                </h2>
                <ul style = {{color:'red'}}>
                    {props.renderdoings(true)}
                </ul>
    </div>    
    // <ul 
    // // style={{color:this.props.style}}
    // >
    //     {props.renderdoings(props.text)}
    // </ul>
}

export default List
