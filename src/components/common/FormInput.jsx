
import React from 'react';

const FormInput = ({ type, placeholder, value, onChange }) => (
  <div className="mb-4">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
    />
  </div>
);

export default FormInput;