import React from 'react';
import EmailSvg from '../../assets/icons/socialmedia/EmailSvg'; // [Import .SVG] FORMA 3
import LinkedinSvg from '../../assets/icons/socialmedia/LinkedinSvg';
import GithubSvg from '../../assets/icons/socialmedia/GithubSvg';
import InstagramSvg from '../../assets/icons/socialmedia/InstagramSvg';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-container">
        <div className="footer-social-media">
          <a
            id="footer-button"
            href="mailto:coletivounicas@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailSvg className="icon-social-media" />
          </a>
          <a
            id="footer-button"
            href="https://www.linkedin.com/company/coletivo-unicas"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinSvg className="icon-social-media" />
          </a>
          <a
            id="footer-button"
            href="https://github.com/coletivo-unicas"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSvg className="icon-social-media" />
          </a>
          <a
            id="footer-button"
            href="https://www.instagram.com/coletivo.unicas"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramSvg className="icon-social-media" />
          </a>
        </div>

        <h6>Desenvolvido por Caroline, Jad, Jully, Mayara e Marília</h6>
        <h6>Mantido pelo Coletivo Unicas</h6>
        <h6>Unicap - Recife/PE - Brasil</h6>
      </div>
    </footer>
  );
};

export default Footer;
