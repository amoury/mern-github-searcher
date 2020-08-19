import React from 'react';
import users from 'mockdata/user.json';
import Card from 'components/Card';
import './Results.scss';

const Results = (): JSX.Element => {
  return (
    <div className="Results Results--fullheight">
      <div className="Results--data">
        {users?.items.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Results;
