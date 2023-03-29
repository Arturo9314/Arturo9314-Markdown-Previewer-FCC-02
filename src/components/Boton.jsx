import React from "react";
import {ReactComponent as ExpandIcon} from '../assets/icons/maximize-solid.svg'
import {ReactComponent as MinimizeIcon} from '../assets/icons/down-left-and-up-right-to-center-solid.svg'

const Boton = ({expand, onClick})=>{

    const icon = expand?  <MinimizeIcon/> : <ExpandIcon/>;
    return(
        <button className="btn-expand" onClick={onClick}>
            {icon}
        </button>
    ) 

}

export default Boton;