import React from 'react'

export default function Search({handleSearchNote}) {
    return (
            <div className='search' >
                <i className="fas fa-search"></i>&nbsp;
                <input onChange={(e) => handleSearchNote(e.target.value)} className='' placeholder='Search notes...'/>
            </div>
    )
}

