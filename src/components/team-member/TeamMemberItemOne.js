import React from 'react';
import shape1 from '../../assets/img/team/shape/team-shape-1.png'
import shape2 from '../../assets/img/team/shape/team-shape-2.png'
import shape3 from '../../assets/img/team/shape/team-shape-3.png'

const TeamMemberItemOne = ({data}) => {
    return (
        <div className="team team_style--1">
            <div className="image-wrap">
                <div className="thumb">
                    <img src={require('../../assets/img/team/team-1/' + data.thumb)} alt={data.name}/>
                    <div className="overlay"/>
                    <div className="shape">
                        <img className="shape-01" src={shape1} alt="shape"/>
                        <img className="shape-02" src={shape2} alt="shape"/>
                        <img className="shape-03" src={shape3} alt="shape"/>
                    </div>
                </div>
                <div className="social-networks">
                    <div className="inner">
                        {data.socials.map(social => (
                            <a key={social.id} className="hint--bounce hint--top hint--primary"
                               href={`https://${social.media}.com/${social.username}`}
                               aria-label={social.media}
                            >
                                <i className={`fa fa-${social.media}`}/>
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            <div className="info">
                <h6 className="name">{data.name}</h6>
                <span className="position">{data.designation}</span>
            </div>
        </div>
    );
};

export default TeamMemberItemOne;