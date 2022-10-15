import {Form, InputGroup} from "react-bootstrap";
import React from "react";

const Input = ({title, id, handleChange, placeholder})=> {
    return (
        <InputGroup>
        <InputGroup.Text>{title}</InputGroup.Text>
        <Form.Control
            id={id}
            name={id}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
        />
    </InputGroup>)
}

export default Input;
