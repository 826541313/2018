import React from 'react'

const Input = (props) => {
    return (
        <div>
            <label htmlFor='imt'>to do l</label>
            <input
                id = 'imt'
                type = 'text'
                value = {props.value}
                onChange = {props.onChange}
                ref = {props.ref}
            ></input>
            <button onClick ={props.onClick}>添加</button>
        </div>
    )
}

export default Input
ra