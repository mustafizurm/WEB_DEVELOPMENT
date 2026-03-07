import React from 'react'
import "./TODOBoard.css"

const TODOBoard = () => {
    return (
        <section id='TODO__Board'>
            <header>
                <h1 className='todo_board_title'>Todo Board</h1>
                <div className='input__area'>
                    <input type="text" />
                    <button>Add</button>
                </div>
            </header>
            <div className='Todo_Board_container'>
                <div className='todos-wrapper'>
                    <article className='todo__cart'>
                        <p>Water Plants</p>
                        <button>Delete</button>
                    </article>
                    <article className='todo__cart'>
                        <p>Water Plants</p>
                        <button>Delete</button>
                    </article>
                                        <article className='todo__cart'>
                        <p>Water Plants</p>
                        <button>Delete</button>
                    </article>
                    <article className='todo__cart'>
                        <p>Water Plants</p>
                        <button>Delete</button>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default TODOBoard