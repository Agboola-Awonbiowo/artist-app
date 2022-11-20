import React from 'react';

function Button({ styled, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        styled
          ? ' rounded-md shadow inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-2 text-base font-medium text-white hover:bg-indigo-700'
          : 'inline-flex items-center justify-center rounded-md border border-transparent bg-white px-2 py-2 text-base font-medium text-indigo-600 hover:bg-indigo-50 rounded-md shadow'
      }
    >
      {children}
    </button>
  );
}

export default Button;
