import React, { useRef } from 'react';

function Header({search}){
    const inputRef = useRef();
    const handleSearch = ()=>{
        const value = inputRef.current.value;
        search(value);
    };
    const onClick = ()=>{
        handleSearch();
    };
    const onKeyPress = (event)=>{
        if(event.key === 'Enter'){
            handleSearch();
        }
        
    };

    return(
        <header>
            <span className='title_logo'>
                <img src="../images/logo.png" alt="" />YouTube
            </span>
                <div className='search_form'>
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder='Search...' 
                    className='search_input'
                    onKeyPress={onKeyPress}
                    />
                <button 
                className='search_btn'
                onClick={onClick}
                >
                <img src="../images/search.png" alt="" /></button>
                </div>
        </header>
            );
        };

export default Header;