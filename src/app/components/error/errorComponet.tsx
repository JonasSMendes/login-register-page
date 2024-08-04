import { useState } from "react";
import e from "./error.module.css";

type Props = {
    onclick: () => void;
    info: String
    color: String
}

export default function ComponentErro({ onclick, info, color }: Props) {

    return (
        <div className={e.main} style={{ backgroundColor: `${color}` }}>
            <div className={e.info} >
                <img src="Vector.png" alt="" />
                <p>{info}</p>
                <h2 onClick={onclick}>X</h2>
            </div>
        </div>
    )
}