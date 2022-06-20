import React from 'react';
import './style.css';
import Linkedin from '../../assets/images/linkedin.svg';
import Github from '../../assets/images/github.svg';
import Button from '../../components/Button';

const CardTeam = ({ img, name, course, pronoun, signUp, urlLinkedin, urlGitHub }) => {
    const goToLinkedin = () => {
        window.open(urlLinkedin, '_blank');
    }
    const goToGitHub = () => {
        window.open(urlGitHub, '_blank');
    }

    const goToSubscription = () => {
        window.open('https://forms.gle/SoyBSfJ3wXr73qS49', '_blank')
    }

    return (
        <div className='card-team'>
            <img src={img} alt='avatar' className='card-team-image' />
            <p id='name' className='card-team-infos'>{name}</p>
            <p className='card-team-pronoun'>{pronoun}</p>
            <p className='card-team-infos' id='card-team-course'>{course}</p>
            {!signUp &&
                <div className='card-team-networks-links'>
                    <img className='card-team-networks' src={Linkedin} alt='linkedin'
                        onClick={goToLinkedin} />
                    <img className='card-team-networks' src={Github} alt='github'
                        onClick={goToGitHub} />
                </div>
            }
            {signUp &&
                <div className='card-team-networks-links' id='card-team-button'>
                    <Button
                        title="Inscreva-se"
                        color="#6451A6"
                        width="130px"
                        height="42px"
                        padding="0px 0 6px 0"
                        handlerButton={goToSubscription} />
                </div>
            }

        </div>
    )
}

export default CardTeam;