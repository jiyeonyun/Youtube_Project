import React from 'react';

const Header = (props) => (
            <nav>
                <span className='title_logo'><img src="../images/logo.png" alt="" />YouTube</span>
                <form action=""className='search_form'>
                    <input type="text" placeholder='Search...' className='search_input'/>
                    <button className='search_btn'><img src="../images/search.png" alt="" /></button>
                </form>
            </nav>
    );

export default Header;