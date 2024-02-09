import React from "react";
import style from "../css/NotFound.module.css"
export const NotFound =()=>{
    return(
        <div className="container text-center d-flex flex-column aling-items-centor justify-content-center" style={{"height":"80vh"}}>
            <div className={style.number}>404</div>
        <div className={style.text}><span>Ooops...</span><br/>page not found</div>
        </div>
    )
}