import React from 'react';

const Nav = (props) => {
    return(
        <nav>
            {props.tgl ? <h1>Nav</h1> : ""}
        </nav>
    );
};

export default Nav