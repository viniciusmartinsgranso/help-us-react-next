"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from "./page.module.css"
import Image from "next/image";
import { CustomValidators } from "@/app/utils/functions";
import isValidEmail = CustomValidators.isValidEmail;
import isValidPassword = CustomValidators.isValidPassword;

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    console.log(user);
    // if (user.email && user.password) {
    //   localStorage.setItem('loggedUser', JSON.stringify(user));
    //   router.push('/home');
    // }
  }

  function goToRegister(): void {
    console.log('register')
  }

  function canLogin(): boolean {
    return isValidEmail(user.email) && isValidPassword(user.password);
  }

  const h1Style = {
    fontSize: '1.3rem',
    color: 'white',
  }

  const white = {
    color: 'white'
  }

  return (
    <div className={ styles.login }>
      <Image src="/images/logo.svg" alt="Logo" width={ 140 } height={ 120 }/>
      <h1 style={ h1Style }>Entre com sua conta</h1>

      <div className={ styles.fields }>
        <div className={ styles.form }>
          <Image className={ styles.icon } src="/images/user-login-icon.svg" width={ 25 } height={ 20 } alt="Imagem"/>
          <input className={ styles.input }
                 value={ user.email }
                 onChange={ (e) => setUser({ ...user, email: e.target.value }) }
                 placeholder="Email" type="text"/>
        </div>

        <div className={ styles.form }>
          <Image className={ styles.icon } src="/images/u_lock.svg" width={ 25 } height={ 20 } alt="Imagem"/>
          <input className={ styles.input }
                 value={ user.password }
                 onChange={ (e) => setUser({ ...user, password: e.target.value }) }
                 placeholder="Senha" type={ showPassword ? 'text' : 'password' }/>
          <button className={ styles.eye } onClick={ (e) => setShowPassword(!showPassword) }>
            <Image src={ showPassword ? 'images/eye_icon.svg' : 'images/eye-off_icon.svg' }
                   width={ 25 }
                   height={ 20 }
                   alt="Imagem"></Image>
          </button>
        </div>

        <span style={ white } onClick={ goToRegister }>Registrar-se</span>
      </div>

      <button onClick={ handleLogin }
              disabled={ !canLogin() }
              className={ styles.enter }>Entrar
      </button>

      <div className={ styles.or }>
        <Image src="images/line.svg" width={ 140 } height={ 10 } alt=""/>
          <label style={ white }>ou</label>
        <Image src="images/line.svg" width={ 140 } height={ 10 } alt=""/>
      </div>

    </div>
  );
}