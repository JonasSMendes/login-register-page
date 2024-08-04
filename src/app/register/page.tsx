'use client'

import { useState } from "react";

import Button from "../components/button/button";
import InfoLogo from "../components/InfoLogo/infoLogo";
import Input from "../components/inputs/input";
import Logo from "../components/Logo/logo";
import r from "./register.module.css";
import ComponentErro from "../components/error/errorComponet";

export default function Register() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [nome, setName] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [showError, setShowError] = useState(true);
    const [sucess, setSucess] = useState(false);

    async function RegisterEmail(e: React.FormEvent) {
        e.preventDefault();

        if (email === '' || pass === '' || nome === '' || confirmPass === '') {
            if (pass !== confirmPass) {
                setShowError(false);
            }
            setShowError(false)
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nome,
                    email: email,
                    password: pass,
                }),
            });

            console.log("Status da resposta:", response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();

            console.log("Resposta da API:", responseData);


            const { token, name } = responseData;
            console.log("Token:", token);
            console.log("Name:", name);
            setSucess(true);

        } catch (error) {
            console.error("Erro no try/catch:", error);
            setError(true)
        }
    }

    return (
        <div className={r.main}>
            <div className={r.container1}>
                {showError == false &&
                    <ComponentErro
                        onclick={() => setShowError(true)}
                        info={"Preencha todos os campos"}
                        color={'#FF5F5F'}
                    />
                }

                {error == true &&
                    <ComponentErro
                        onclick={() => setShowError(false)}
                        info={"Erro ao efetuar login"}
                        color={'#FF5F5F'}
                    />
                }

                {sucess == true &&
                    <ComponentErro
                        onclick={() => setSucess(false)}
                        info={"Registro feito com sucesso"}
                        color={'#21b21b'}
                    />
                }

                <InfoLogo />
                <form onSubmit={RegisterEmail}>
                    <Input
                        inputType={"text"}
                        label={"Name"}
                        placeholder={"João caetano"}
                        icon={"Frame.svg"}
                        onChange={(e) => setName(e.target.value)}
                        value={nome}
                    />
                    <Input
                        inputType={"email"}
                        label={"E-mail"}
                        placeholder={"alex@email.com"}
                        icon={"Frame.svg"}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Input
                        inputType={"password"}
                        label={"Password"}
                        placeholder={"87*****"}
                        icon={"Frame-lock.svg"}
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />

                    <Input
                        inputType={"password"}
                        label={"Confirm password"}
                        placeholder={"87*****"}
                        icon={"Frame-lock.svg"}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        value={confirmPass}
                    />

                    <Button
                        but1={"Sign up"}
                        but2={"Login now"}
                        rota={'/login'} />
                </form>

            </div>
            <div className={r.container2}>
                <Logo />
            </div>
        </div>
    )
}