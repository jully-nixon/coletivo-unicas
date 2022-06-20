import React from 'react';
import depositions_rayssa from '../../assets/images/depositions_rayssa.jpeg';
import depositions_mariana from '../../assets/images/depositions_mariana.jpg';
import depositions_hanaty from '../../assets/images/depositions_hanaty.jpeg';
import depositions_deborah from '../../assets/images/depositions_deborah.jpg';
import depositions_mayara from '../../assets/images/depositions_mayara.jpeg';
import Carousel from 'react-elastic-carousel';
import './style.css';

const Depositions = () => {

    return (

        <div id='depositions'>
            <Carousel
                itemsToShow={1}
                pagination={true}
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={30000}

            >
                <div className='dep'>
                    <img className='depositions-image' src={depositions_rayssa} alt='banner' />
                    <p className='depositions-text'>
                        "Pertencer a um coletivo como o UNICAs, que é sinônimo de união,
                        representatividade e apoio, é incrível. E nele ter a oportunidade
                        de trocar conhecimentos sobre ciência e tecnologia, de compartilhar
                        vivências e de realizar as ações do coletivo em conjunto com mulheres
                        maravilhosas, é sensacional!"
                    </p>
                    <p id='depositions-name'>Rayssa Muniz</p>
                    <p id='depositions-descrition'>Aluna de Ciências da Computação</p>
                </div>

                <div>
                    <img className='depositions-image' src={depositions_mariana} alt='banner' />
                    <p className='depositions-text'>
                        "Quando entrei na Unicap não esperava encontrar uma rede de apoio
                        tão perfeita como a das meninas!! Não é atoa que são chamadas de
                        Únicas porque é verdade, elas são! Como sempre digo: Vocês foram
                        meu melhor presente de caloura."
                    </p>
                    <p id='depositions-name'>Mariana Oliveira</p>
                    <p id='depositions-descrition'>Aluna de Engenharia da Complexidade<br></br>
                        e participante do projeto Technovation Girls</p>
                </div>

                <div>
                    <img className='depositions-image' src={depositions_hanaty} alt='banner' />
                    <p className='depositions-text'>
                        "Fazer parte do UNICAs e participar das ações do coletivo, me
                        oportunizou vivenciar na prática uma das nossas bandeiras mais
                        importantes: O incentivo a inserção e permanência de mulheres na tecnologia."
                    </p>
                    <p id='depositions-name'>Hanaty Mendonça</p>
                    <p id='depositions-descrition'>Aluna de Ciências da Computação</p>
                </div>

                <div>
                    <img className='depositions-image' src={depositions_deborah} alt='banner' />
                    <p className='depositions-text'>
                        "O UNICAs foi uma das maiores transformações da minha vida!
                        Poder contar com essa rede de apoio me fez conhecer mulheres
                        incríveis, somar e compartilhar conhecimentos."
                    </p>
                    <p id='depositions-name'>Deborah Camila</p>
                    <p id='depositions-descrition'>Ex aluna da UNICAP</p>

                </div>

                <div>
                    <img className='depositions-image' src={depositions_mayara} alt='banner' />
                    <p className='depositions-text'>
                        "Entrar no UNICAs, foi uma das melhores escolhas que fiz.
                        Desde conhecer mulheres que são da área de tecnologia,
                        dos conhecimentos e experiências que trocados, fazer parte
                        de um coletivo tão acolhedor."
                    </p>
                    <p id='depositions-name'>Mayara Ribeiro</p>
                    <p id='depositions-descrition'>Aluna de Sistemas para Internet</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Depositions;