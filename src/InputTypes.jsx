import styled from 'styled-components';

export function InputFieldSet({ title, label, type, value, setValue, labelReverse }) {
    return (
        <FieldSet>
            <Legend>{title}</Legend>
            <TextInputPair labelReverse={labelReverse}>
                <InputLabel htmlFor={title}>{label}</InputLabel>
                <Input
                    type={type}
                    id={title}
                    name={label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </TextInputPair>
        </FieldSet>
    );
}

export function RadioInputFieldSet({ type, setType }) {
    return (
        <RadioFieldSet>
            <Legend>Mortgage Type</Legend>

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
        </RadioFieldSet>
    );
}

function LabeledRadioInput({ label, groupName, value, setValue }) {
    return (
        <RadioPair checked={label === value}>
            <RadioInput
                type='radio'
                id={label}
                value={label}
                checked={label === value}
                name={groupName}
                onChange={(e) => setValue(e.target.value)}
            />
            <RadioLabel htmlFor={label}>{label}</RadioLabel>
        </RadioPair>
    );
}

const FieldSet = styled.fieldset`
    border: none;
    padding: 0rem;
`;

const RadioFieldSet = styled.fieldset`
    border: none;
    padding: 0rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Legend = styled.legend`
    font-size: 1rem;
    margin-bottom: 0.25rem;
    color: hsl(200, 24%, 40%);
`;

const RadioPair = styled.div`
    padding: 0.25rem 0.75rem 0.3rem;
    border-radius: 0.25rem;
    overflow: clip;
    background-color: ${(p) => (p.checked ? 'hsl(61, 70%, 52%, 0.2)' : 'revert')};
    border: 1px solid ${(p) => (p.checked ? 'hsl(61, 70%, 52%)' : 'hsl(200, 26%, 54%)')};

    @media (hover: hover) {
        &:hover {
            outline: 2px solid hsl(61, 70%, 52%);
        }
    }
`;

const RadioInput = styled.input`
    margin-right: 0.5rem;
    accent-color: ${(p) => (p.checked ? 'hsl(61, 70%, 52%)' : 'revert')};
`;

const RadioLabel = styled.label`
    color: hsl(202, 55%, 16%);
    font-weight: 700;
`;

const TextInputPair = styled.div`
    display: flex;
    flex-direction: ${(p) => (p.labelReverse ? 'row-reverse' : 'row')};
    border: 1px solid hsl(200, 26%, 54%);
    border-radius: 0.25rem;
    overflow: clip;

    &:focus-within {
        outline: 2px solid hsl(61, 70%, 52%);

        label {
            background-color: hsl(61, 70%, 52%);
            color: hsl(202, 55%, 16%);
        }
    }

    @media (hover: hover) {
        &:hover {
            outline: 2px solid hsl(61, 70%, 52%);
        }
    }
`;

const InputLabel = styled.label`
    padding: 0.4rem 0.75rem 0.5rem;
    background-color: hsl(202, 86%, 94%);
    color: hsl(200, 24%, 40%);
    font-weight: 700;
`;

const Input = styled.input`
    border: none;
    padding: 0rem 0.75rem;
    width: 100%;

    &:focus {
        outline: none;
    }
`;
