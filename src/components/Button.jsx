import React from 'react';

const Button = ({btnType, btnClass, btnText}) => {
  return (
    <div className='d-flex flex-column'>
      <button type={btnType} className={btnClass}>{btnText}</button>
    </div>
  )
}

export default Button;