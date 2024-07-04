import React from 'react';
import "./Breadcrum.css";

export const Breadcrum = ({ props }) => {
  if (!props) {
    return <div className='breadcrum'>Home</div>;
  }

  const { type, name } = props;

  return (
    <div className='breadcrum'>
      Home &gt; {type} &gt; {name}
    </div>
  );
};
