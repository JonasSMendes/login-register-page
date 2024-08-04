import i from "./input.module.css";

type Props = {
    inputType: String
    label: String
    placeholder: String
    icon: String
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export default function Input({ inputType, label, placeholder, icon, onChange, value }: Props) {
    return (
        <div className={i.input}>
            <div className={i.inputLabel}>
                <label>{label}</label>
            </div>
            <div className={i.inputCamp}>
                <input onChange={onChange} value={value} type={`${inputType}`} id={`${label}`} placeholder={`${placeholder}`} />
                <div className={i.inputTag}>
                    <img src={`${icon}`} alt="" />
                </div>
            </div>

        </div>
    )
}