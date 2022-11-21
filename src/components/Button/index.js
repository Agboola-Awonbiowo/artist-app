import React from 'react';

function Button({ styled, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        styled
          ? ' rounded-md shadow inline-flex items-center justify-center rounded-md border border-transparent bg-green-500 px-2 py-2 text-base font-medium text-white hover:bg-green-500'
          : 'inline-flex items-center justify-center rounded-md border border-transparent bg-white px-2 py-2 text-base font-medium text-green-500 hover:bg-green-500 hover:text-white rounded-md shadow'
      }
    >
      {children}
    </button>
  );
}

export default Button;
