import React from 'react';
import _startCase from 'lodash/startCase';
import './Card.scss';
import { ResponseItem } from 'types/results.types';

interface CardProps {
  data: ResponseItem;
}

const Card = (props: CardProps): JSX.Element => {
  const { id, avatar_url, name, html_url, login, stats, meta } = props.data;
  const sanitizedMeta = meta.filter(meta => meta);

  return (
    <div key={id} className="Card">
      <div className="Card__description">
        <div className="Card__avatar">
          {avatar_url && (
            <div className="Card__image-wrapper">
              <img loading="lazy" src={avatar_url} alt={`${name} avatar`} />
            </div>
          )}
        </div>
        <div className="Card__information">
          <h2>{name ? name : login}</h2>
          <div>
            <p className="Card__subtitle">@{login}</p>
            {Boolean(sanitizedMeta.length) && (
              <div className="Card__meta">
                <span>{sanitizedMeta.join(' | ')}</span>
              </div>
            )}
          </div>
          <div className="Card__content">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              <button className="Card__cta-button">Visit Profile</button>
            </a>
          </div>
        </div>
      </div>

      <div className="Card__footer">
        <div className="Card__statistics">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="Card__stat-column">
              <h3 className="Card__stat">{value}</h3>
              <p className="Card__stat-title">{_startCase(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
