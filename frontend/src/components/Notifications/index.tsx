import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'reducers';

import { dismissError } from 'actions/status.actions';
import { DismissErrorAction, Status } from 'types/status.types';

import './Notifications.scss';

interface NotificationProps {
  status: Status;
  dismissError: () => DismissErrorAction;
}

const Notifications = ({ status, dismissError }: NotificationProps): JSX.Element | null => {
  const { errors } = status;

  useEffect(() => {
    const errorTimer = setTimeout(() => dismissError(), 3000);
    return () => {
      clearTimeout(errorTimer);
    };
  }, [errors, dismissError]);

  if (!errors || !errors.length) return null;
  return (
    <div className="Notifications Notifications--red">
      <div className="Notifications__header">
        <div className="Notifications__title">
          <h2>Oh Snap!</h2>
        </div>
        <div className="Notifications__close-btn" onClick={dismissError}>
          &times;
        </div>
      </div>
      <div className="Notifications__content">
        <ul>
          {errors?.map((error, i) => (
            <li key={i}>{error.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ status }: StoreState) => ({
  status,
});

export default connect(mapStateToProps, { dismissError })(Notifications);
