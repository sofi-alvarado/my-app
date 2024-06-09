import React from 'react'

const InputField = ({ 
	labelFor, 
	labelText,
	idInput,
	inputType, 
	inputValue,
  placeholderInput
}) => {
  return (
  <>
    <div className='d-flex flex-column'>
      <label htmlFor={labelFor} className="form-label mt-3">{labelText}</label>
      <input type={inputType} value={inputValue} id={idInput} placeholder={placeholderInput} />
    </div>
  </>
  );
}

export default InputField;