import React, { ReactElement } from 'react';

import './styles.css';

interface FabProps {
  icon: ReactElement
  onClick: () => void
}

const Fab: React.FC<FabProps>  = (props) => {
  return (
    <div className='fab' onClick={props.onClick}>
      {props.icon}
    </div>
  );
};

export default Fab;