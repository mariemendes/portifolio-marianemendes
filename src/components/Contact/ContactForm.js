import React from 'react';
import styles from './ContactForm.module.css';
import Button from '../Geral/Button';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ExpSubTitle from '../Geral/ExpSubTitle';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Lógica adicional para manipular o envio do email

    const serviceId = 'service_oovjbd6';
    const templateId = 'template_lu5p2s9';
    const userId = 'LpU5zSzetN1fYEDRc';

    // Enviar o email
    emailjs
      .send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log('Email enviado com sucesso!', response);
        // Lógica adicional após o envio do email bem-sucedido
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
        // Lógica adicional em caso de falha no envio do email
      });
  };

  return (
    <form className={`${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
      <ExpSubTitle>Send Me a message!</ExpSubTitle>
      <input
        type="text"
        {...register('name', { required: true })}
        placeholder="Your name"
      />
      {errors.name && <span>Please, fill with your name.</span>}

      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="Your Email"
      />
      {errors.email && <span>Please, fill with a valid email</span>}

      <textarea
        {...register('message', { required: true })}
        placeholder="Your Message"
      ></textarea>
      {errors.message && <span>Please, don't forget the message!'</span>}

      <div className={`${styles.btn}`}>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
