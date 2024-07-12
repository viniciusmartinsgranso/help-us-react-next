"use client";
import React, { useState } from 'react';
import styles from "./page.module.css"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CustomValidators } from "../../../public/utils/functions";
import isValidEmail = CustomValidators.isValidEmail;
import isValidPassword = CustomValidators.isValidPassword;
import isEqualStrings = CustomValidators.isEqualStrings;

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleRegister() {
    console.log(form);
  }

  function canRegister() {
    return isValidEmail(form.email) && isValidPassword(form.password) && form.city.trim().length > 2 && isEqualStrings(form.password, form.confirmPassword);
  }

  return (
    <div className={ styles.register }>
      <div className={ styles.navbar }>
        <Image onClick={ () => router.push('/login') } src="/images/back-arrow.svg" alt="Image" width={ 25 } height={ 25 }/>
        <Image src="/images/logo.svg" alt="Logo" style={{ flex: 1 }} width={ 100 } height={ 100 }/>
      </div>

      <div className={ styles.form }>
        <div className={ styles.registerForm }>
          <Image className={ styles.icon } src="/images/user-login-icon.svg" alt="Imagem" width={ 25 } height={ 20 }/>
          <input
            type="text"
            placeholder="Nome"
            value={ form.name }
            className={ styles.input }
            onChange={ (e) => setForm({ ...form, name: e.target.value }) }
          />
        </div>
        <div className={ styles.registerForm }>
          <Image className={ styles.icon } src="/images/user-login-icon.svg" alt="Imagem" width={ 25 } height={ 20 }/>
          <input
            type="text"
            placeholder="Email"
            value={ form.email }
            className={ styles.input }
            onChange={ (e) => setForm({ ...form, email: e.target.value }) }
          />
        </div>
        <div className={ styles.registerForm }>
          <Image className={ styles.icon } src="/images/user-login-icon.svg" alt="Imagem" width={ 25 } height={ 20 }/>
          <input
            type="text"
            placeholder="Cidade"
            value={ form.city }
            className={ styles.input }
            onChange={ (e) => setForm({ ...form, city: e.target.value }) }
          />
        </div>

        <div className={ styles.registerForm }>
          <Image className={ styles.icon } src="/images/u_lock.svg" alt="Imagem" width={ 25 } height={ 20 }/>
          <input
            type={ showPassword ? 'text' : 'password' }
            placeholder="Senha"
            value={ form.password }
            className={ styles.input }
            onChange={ (e) => setForm({ ...form, password: e.target.value }) }
          />
          <button className={ styles.eye } onClick={ (e) => setShowPassword(!showPassword) }>
            <Image src={ showPassword ? 'images/eye_icon.svg' : 'images/eye-off_icon.svg' }
                   width={ 25 }
                   height={ 20 }
                   alt="Imagem"></Image>
          </button>
        </div>

        <div className={ styles.registerForm }>
          <Image className={ styles.icon } src="/images/u_lock.svg" alt="Imagem" width={ 25 } height={ 20 }/>
          <input
            type={ showConfirmPassword ? 'text' : 'password' }
            placeholder="Confirmar senha"
            value={ form.confirmPassword }
            className={ styles.input }
            onChange={ (e) => setForm({ ...form, confirmPassword: e.target.value }) }
          />
          <button className={ styles.eye } onClick={ (e) => setShowConfirmPassword(!showConfirmPassword) }>
            <Image src={ showConfirmPassword ? 'images/eye_icon.svg' : 'images/eye-off_icon.svg' }
                   width={ 25 }
                   height={ 20 }
                   alt="Imagem"></Image>
          </button>
        </div>

        <Image src="/images/line.svg" alt="Imagem" width={ 100 } height={ 10 } style={{ width: '100%' }}/>

        <button className={ styles.submit }
                onClick={ handleRegister }
                disabled={ !canRegister() }
        >Registrar</button>
      </div>
    </div>
  );
}
