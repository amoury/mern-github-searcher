import React from 'react';
import './Card.scss';

// {
//   name: 'amoury',
//   full_name: 'submit50/amoury',
//   owner: {
//     login: 'submit50'
//   },
//   html_url: 'https://github.com/submit50/amoury',
//   description: null,
//   stargazers_count: 1,
//   watchers_count: 1,
//   forks_count: 0
// },

// {
//   login: 'amoury',
//   id: 16633104,
//   avatar_url: 'https://avatars1.githubusercontent.com/u/16633104?v=4',
//   url: 'https://api.github.com/users/amoury',
//   type: 'User',
//   html_url: 'https://github.com/amoury',
//   name: 'Ansar Memon (Amoury)',
//   company: 'Namshi.com',
//   blog: 'amourycodes.com',
//   hireable: true,
//   location: null,
//   bio: 'Frontend Engineer\r\n',
//   public_repos: 98,
//   followers: 5,
//   following: 3
// }

// interface CardProps {
//   data: object;
// }

const Card = (): JSX.Element => {
  return (
    <div className="Card">
      <div className="Card__description">
        <div className="Card__avatar">
          <div className="Card__image-wrapper">
            <img src="https://avatars1.githubusercontent.com/u/16633104?v=4" alt="user image" />
          </div>
        </div>
        <div className="Card__information">
          <h2>Ansar Memon (Amoury)</h2>
          <div className="Card__meta">
            <p className="Card__subtitle">@amoury</p>
          </div>
          <div className="Card__description"></div>

          <div className="Card__footer">
            <div className="Card__statistics">
              <div className="Card__stat-column">
                <h3 className="Card__stat">98</h3>
                <p className="Card__stat-title">Public Repos</p>
              </div>
              <div className="Card__stat-column">
                <h3 className="Card__stat">5</h3>
                <p className="Card__stat-title">Followers</p>
              </div>
              <div className="Card__stat-column">
                <h3 className="Card__stat">3</h3>
                <p className="Card__stat-title">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
