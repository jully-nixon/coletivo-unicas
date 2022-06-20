import React from 'react';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import TextArea from '../../components/Form/TextArea';
import useForm from '../../Hooks/useFormInput';
import './style.css';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/b1ac43c0-f041-11ec-94cd-436cd72d679b';

const Contact = () => {
  const name = useForm();
  const email = useForm('email');
  const [who, setWho] = React.useState('');
  const [contactReason, setContactReason] = React.useState('');
  const message = useForm();

  const whoOptions = [
    'Estudante/Ex-Estudante da Unicap',
    'Estudante fora da Unicap',
    'Empresa',
    'Instituição de Ensino',
    'Coletivo',
    'Outro',
  ];

  const contactReasonOptions = [
    'Convidar para Evento ou Projeto',
    'Estabelecer Parceria',
    'Participar do Coletivo',
    'Saber mais sobre evento/projeto promovido pelo coletivo',
    'Trocar uma ideia',
    'Dúvidas Gerais',
  ];

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    if (name.validate() && email.validate() && message.validate()) {
      name.setValue(`${name.value} (${who})`);
      message.setValue(
        `Motivo de contato: ${contactReason} / Mensagem: ${message.value}`,
      );
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    } else {
      console.log('Não Enviar');
    }
  };

  if (submitted) {
    name.setValue('');
    email.setValue('');
    message.setValue('');
    setWho('');
    setContactReason('');
    setSubmitted(false);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-texts">
        <h3 className="contact-title">ENTRE EM CONTATO COM A GENTE</h3>
        <div className="contact-form">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="container">
              <div className="contact-form-personal">
                <Input
                  label="Nome*"
                  id="name"
                  type="text"
                  placeholder="Nome"
                  {...name}
                />
                <Input
                  label="Email*"
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...email}
                />
              </div>

              <Select
                id="who"
                label="Eu sou..."
                options={whoOptions}
                value={who}
                setValue={setWho}
              />

              <Select
                id="contactReason"
                label="Motivo de Contato"
                options={contactReasonOptions}
                value={contactReason}
                setValue={setContactReason}
              />

              <TextArea
                label="Sua mensagem"
                id="message"
                placeholder="Deixe aqui sua mensagem que teremos o maior prazer em te responder!"
                rows="5"
                {...message}
              />
              <button className="contact-button">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-image"></div>
    </section>
  );
};

export default Contact;

/** DESATIVADO - Informações Gerais  */
/* <div className="contact-general-info">
  <h6>Informações Gerais</h6>
  <p>
    Telefone: <a href="tel:+5581997730481">+55 (81) 99773-0481</a>
  </p>
  <p>
    Email:{' '}
    <a href="mailto:coletivounicas@gmail.com">coletivounicas@gmail.com</a>
  </p>
  Endereço:
  <p>
    <a
      href="https://goo.gl/maps/apVwmSeMBfyPVbq98"
      target="_blank"
      rel="noreferrer noopener"
    >
      {' '}
      R. do Príncipe, 526, CEP 50050-900
      <br />
      Boa Vista, Recife - Pernambuco
    </a>
  </p>
</div>; */
