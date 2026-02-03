import styled from 'styled-components';

export function InputFieldSet({ title, label, type, value, setValue }) {
    // const [value, setValue] = React.useState(inputValue);

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

export function RadioInputFieldSet({ type, setType }) {
    return (
        <FieldSet>
            <legend>Mortgage Type</legend>

            <LabeledRadioInput
                label='Repayment'
                groupName='mortgage_type'
                value={type}
                setValue={setType}
            />

            <LabeledRadioInput
                label='Interest Only'
                groupName='mortgage_type'
                value={type}
                setValue={setType}
            />
        </FieldSet>
    );
}

function LabeledRadioInput({ label, groupName, value, setValue }) {
    return (
        <div>
            <input
                type='radio'
                id={label}
                value={label}
                checked={label === value}
                name={groupName}
                onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

const FieldSet = styled.fieldset`
    border: none;
    padding: 0rem;
`;
