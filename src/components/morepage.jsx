import React from 'react';

const StreamingPage = () => {
  const sections = [
    { title: 'Red Dead Redemption II' },
    { title: 'PUBG Mobile' },
    { title: 'Fortnite' },
    { title: 'Call of Duty: Black Ops III' },
    { title: 'Grand Theft Auto V' },
    { title: 'AI Escape Room' },
    { title: 'The Witcher 3: Wild Hunt' },
    { title: 'Overwatch 2' },
  ];

  const pageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 sections per row
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  };

  const cardStyle = {
    backgroundColor: '#333',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const infoStyle = {
    color: '#fff',
    textAlign: 'center',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '18px',
  };

  return (
    <div style={pageStyle}>
      {sections.map((section, index) => (
        <section key={index} style={cardStyle}>
          <div style={infoStyle}>
            <h3 style={titleStyle}>{section.title}</h3>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StreamingPage;
