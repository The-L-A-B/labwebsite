import React from 'react';

const TeamMemberItemThree = ({data}) => {
    return (
        <div className="team team__style--3">
            <div className="thumb">
                <img src={require('../../assets/img/team/team-3/' + data.thumb)} alt={data.name}/>
                <div className="overlay"
                     style={{backgroundImage: `url(${require('../../assets/img/team/team-3/' + data.thumb)})`}}
                />
                <ul className="social-icon icon-solid-rounded icon-size-medium text-center">
                    {data.socials.map(social => (
                        <li key={social.id} className={social.media}>
                            <a href={`https://${social.media}.com/${social.username}`}
                               className="link"
                               aria-label={social.media}
                            >
                                <i className={`fa fa-${social.media}`}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="team-info text-center">
                <div className="info">
                    <h5>{data.name}</h5>
                    <span>{data.designation}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberItemThree;