import React from 'react';
import styled from 'styled-components';

export function InputFieldSet({ title, label, type, inputValue }) {
    const [value, setValue] = React.useState(inputValue);

    return (
        <FieldSet>
            <legend>{title}</legend>
            <div>
                <label htmlFor={title}>{label}</label>
                <input
                    type={type}
                    id={title}
                    name={label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </FieldSet>
    );
}

export function RadioInputFieldSet({ type }) {
    const [value, setValue] = React.useState(type);

    return (
        <FieldSet>
            <legend>Mortgage Type</legend>

            <LabeledRadioInput
                label='Repayment'
                groupName='mortgage_type'
                inputValue={value}
                update={setValue}
            />

            <LabeledRadioInput
                label='Interest Only'
                groupName='mortgage_type'
                inputValue={value}
                update={setValue}
            />
        </FieldSet>
    );
}

function LabeledRadioInput({ label, groupName, inputValue, update }) {
    return (
        <div>
            <input
                type='radio'
                id={label}
                value={label}
                checked={label === inputValue}
                name={groupName}
                onClick={(e) => update(e.target.value)}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

const FieldSet = styled.fieldset`
    border: none;
    padding: 0rem;
`;
