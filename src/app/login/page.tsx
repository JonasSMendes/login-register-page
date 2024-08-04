'use client'

import { useState } from "react"


import Button from "../components/button/button"
import InfoLogo from "../components/InfoLogo/infoLogo"
import Input from "../components/inputs/input"
import Logo from "../components/Logo/logo"
import s from "./login.module.css"
import ComponentErro from "../components/error/errorComponet"

export default function login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [sucess, setSucess] = useState(false);

    const [showError, setShowError] = useState(true)


    async function sendEmail(e: React.FormEvent) {
        e.preventDefault();

        if (email === '' || pass === '') {
            setShowError(false)
            return;
        }

        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    email: email,
                    password: pass
                })
            });

            if (!response.ok) {
                throw new Error('Falha no login');
            }

            const data = await response.json();
            setSucess(true);
            console.log(data);

        } catch (error) {
            setErrorMessage('Erro no login, tente novamente');
            setError(true);
        }
    }


    return (
        <main className={s.main}>
            <div className={s.containerInfo}>
                {showError == false &&
                    <ComponentErro
                        onclick={() => setShowError(true)}
                        info={"Preencha todos os campos"}
                        color={'#FF5F5F'}
                    />
                }

                {error == true &&
                    <ComponentErro
                        onclick={() => setError(false)}
                        info={"Erro ao efetuar login"}
                        color={'#FF5F5F'}
                    />
                }

                {sucess == true &&
                    <ComponentErro
                        onclick={() => setSucess(false)}
                        info={"Login Efetuado"}
                        color={'#21b21b'}
                    />
                }

                <InfoLogo />
                <form onSubmit={sendEmail}>
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

                    <Button
                        but1={"Login Now"}
                        but2={"Signup Now"}
                        rota={'/register'}
                    />
                </form>

            </div>
            <div className={s.containerLogo}>
                <Logo />
            </div>
        </main>
    )
}