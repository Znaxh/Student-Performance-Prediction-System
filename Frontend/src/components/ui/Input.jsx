import React from 'react';

const Input = ({ 
  label, 
  error, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name, 
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const inputClasses = `
    w-full px-4 py-3 border rounded-lg transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 hover:border-gray-400'
    }
    ${className}
  `;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
