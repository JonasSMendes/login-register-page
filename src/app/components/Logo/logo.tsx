import l from "./logo.module.css";


export default function Logo() {
    return (
        <div className={l.logo}>
            <h1>You should, MoveIt!</h1>
            <img src="/Delivery.svg" alt="" />
        </div>
    )
}