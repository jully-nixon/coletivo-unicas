import React, { useEffect, useState } from 'react';
import CardTeam from '../../components/CardTeam';
import './style.css';
import BackgroundHive from '../../assets/images/bg_our_team_hive.svg';
import BackgroundLine from '../../assets/images/bg_our_team_line.svg';
import You from '../../assets/images/you.svg';
import api from "../../services/api";
import img_depoimentos_leaf from '../../assets/images/img_depoiments_leaf.svg';

const OurTeam = () => {
    const [membersData, setMembersData] = useState([]);

    const getMembers = async () => {
        await api
            .get("members")
            .then((response) => {
                setMembersData(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        getMembers();
    }, []);


    return (
        <div id='ourTeam'>
            <img className='our-team-plant' src={img_depoimentos_leaf} alt='depositions-plant' />
            <img className='our-team-background-line' src={BackgroundLine} alt='BackgroundLine' />
            <div>
                <h2 className='our-team-title'>NOSSO TIME</h2>
                <div className='our-team-list'>
                    <ul>
                        <li>
                            <CardTeam
                                img={You}
                                name='Você'
                                pronoun='(do jeitinho que você é)'
                                course='Vem fazer parte dessa mudança com a gente!'
                                signUp={true}
                            />
                        </li>
                        {membersData.map((member, id) =>
                            <li key={id}>
                                <CardTeam
                                    img={member.image}
                                    name={member.name}
                                    pronoun={`(${member.pronoun})`}
                                    course={member.course}
                                    urlLinkedin={member.linkedin}
                                    urlGitHub={member.github}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <img className='our-team-background-hive' src={BackgroundHive} alt='BackgroundHive' />
        </div>
    )
}

export default OurTeam;