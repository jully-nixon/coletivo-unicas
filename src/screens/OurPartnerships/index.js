import React from 'react';
import './style.css';
import LogoMinas from '../../assets/images/logos/logo_minas.png';
import LogoPortoDigital from '../../assets/images/logos/logo_porto_digital.png';
import LogoTechnovationGirlsBr from '../../assets/images/logos/logo_technovation_girls_br.png';
import LogoUnicap from '../../assets/images/logos/logo_unicap.png';

const OurPartnerships = () => {
    return (
        <div className='our-partnerships' id='partnerships'>
            <h2 className='our-partnerships-title'>NOSSAS PARCERIAS</h2>
            <div className='our-partnerships-logos'>
                <ul>
                    <li>
                        <img id='our-partnerships-logos' src={LogoMinas} alt='LogoMinas' />
                    </li>

                    <li>
                        <img id='our-partnerships-logos' src={LogoPortoDigital} alt='LogoPortoDigital' />
                    </li>

                    <li>
                        <img id='our-partnerships-logos' src={LogoTechnovationGirlsBr} alt='LogoTechnovationGirlsBr' />
                    </li>

                    <li>
                        <img id='our-partnerships-logos' src={LogoUnicap} alt='LogoUnicap' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OurPartnerships;