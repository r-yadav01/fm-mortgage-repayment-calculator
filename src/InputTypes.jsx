import styled from 'styled-components';

function LabeledRadioInput({ label, groupName, inputValue }) {
    return (
        <div>
            <input
                type='radio'
                id={label}
                value={label}
                checked={label === inputValue}
                name={groupName}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

export function RadioInputFieldSet({ type }) {
    return (
        <FieldSet>
            <legend>Mortgage Type</legend>

            <LabeledRadioInput
                label='Repayment'
                groupName='mortgage_type'
                inputValue={type}
            />

            <LabeledRadioInput
                label='Interest Only'
                groupName='mortgage_type'
                inputValue={type}
            />
        </FieldSet>
    );
}

export function InputFieldSet({ title, label, type, inputValue }) {
    return (
        <FieldSet>
            <legend>{title}</legend>
            <div>
                <label htmlFor={title}>{label}</label>
                <input
                    type={type}
                    id={title}
                    name={label}
                    value={inputValue}
                />
            </div>
        </FieldSet>
    );
}

const FieldSet = styled.fieldset`
    border: none;
    padding: 0rem;
`;
