import React from 'react';
import './TeamPage.css';

const TeamMember = ({ name, role, linkedIn, avatar }) => (
  <div className="team-member">
    <div className="member-content">
      <div className="avatar-container">
        {avatar}
      </div>
      <h2 className="member-name">{name}</h2>
      <p className="member-role">{role}</p>
      <a 
        href={linkedIn} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="linkedin-link"
      >
        LinkedIn
        <svg 
          className="arrow-icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </div>
  </div>
);

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Liam Davis",
      role: "CEO",
      linkedIn: "#",
      avatar: (
        <div className="avatar">👨‍💼</div>
      )
    },
    {
      name: "Elliot Jones",
      role: "CCO",
      linkedIn: "#",
      avatar: (
        <div className="avatar">👨‍💼</div>
      )
    },
    {
      name: "Rob Smith",
      role: "CTO",
      linkedIn: "#",
      avatar: (
        <div className="avatar">👨‍💼</div>
      )
    },
    {
      name: "Bella Garcia",
      role: "Head of Content",
      linkedIn: "#",
      avatar: (
        <div className="avatar">👩‍💼</div>
      )
    }
  ];

  return (
    <div className="team-page">
      <h1 className="page-title">
        Meet the <span className="highlight">team</span>
      </h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            linkedIn={member.linkedIn}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
