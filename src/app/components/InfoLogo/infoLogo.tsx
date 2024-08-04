import i from "./infoLogo.module.css"

export default function InfoLogo() {
    return (
        <div className={i.info}>
            <div className={i.logo}>
                <img src="/logo.svg" alt="" />
                <h2>MoveIt!</h2>
            </div>
            <p>Login into your account</p>
        </div>
    )
}