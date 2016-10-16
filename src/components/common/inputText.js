import React, { Component, PropTypes } from 'react';


const InputText = ({name, value, placeholder, childern, onChange}) => {

    return (
        <input type="text"
            name={name}
            value={childern}
            placeholder={placeholder}
            onChange={onChange}>

            {childern}
        </input>
    );
};

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    childern: PropTypes.array,
    onChange: PropTypes.func
};


export default InputText;