import b from "./button.module.css";

import Link from "next/link";

type Props = {
    but1: String
    but2: String
    rota: string
}

export default function Button({ but1, but2, rota }: Props) {
    return (
        <div className={b.buttons}>
            <input type="submit" className={b.button1} value={`${but1}`} />
            <Link className={b.link} href={rota || '#'}><input type="submit" className={b.button2} value={`${but2}`} /></Link>
        </div>
    )
}