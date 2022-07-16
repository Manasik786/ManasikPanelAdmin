import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';

const IdleTimerContainer = () => {
  const idleTimerRef = useRef(null);

  const onIdle = async () => {
    console.log('User is idle');
    await window.localStorage.setItem('isAuthenticated', false);
    window.location.href = '/';
  };
  return (
    <div>
      <IdleTimer ref={idleTimerRef} onIdle={onIdle} timeout={1000 * 60 * 30} />
    </div>
  );
};

export default IdleTimerContainer;
