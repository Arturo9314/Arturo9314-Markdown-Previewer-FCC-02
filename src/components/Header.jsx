import React, { useState } from "react";
import Boton from "./Boton";
import {ReactComponent as MainIcon} from '../assets/icons/markdown.svg'

const Header = ({sectionName, handleSizeChange})=>{

    const [expand, setExpand] = useState(false);
    const handleExpandClick = ()=>{
        setExpand(!expand)
        handleSizeChange(sectionName)
    }
    return(
            <header className="toolbar"><MainIcon className='mainIcon'/>{sectionName}<Boton expand={expand} onClick={handleExpandClick}/></header>
    );
}

export default Header;