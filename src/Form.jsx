import styled from 'styled-components';
import { RadioInputFieldSet, InputFieldSet } from './InputTypes';

export function Form({ amount, term, rate, type, setMockData }) {
    function updateMockData(event, setMockData) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        // const newMockData = Object.fromEntries(formData.entries());
        const newMockData = {
            amount: formData.get('£'),
            term: formData.get('years'),
            rate: formData.get('%'),
            type: formData.get('mortgage_type'),
        };

        // console.log(newMockData);
        setMockData(newMockData);
    }
    return (
        <InputForm onSubmit={(event) => updateMockData(event, setMockData)}>
            <InputFieldSet
                type='number'
                title='Mortgage Amount'
                label='£'
                inputValue={amount}
            />
            <InputFieldSet
                type='number'
                title='Mortgage Term'
                label='years'
                inputValue={term}
            />
            <InputFieldSet
                type='number'
                title='Interest Rate'
                label='%'
                inputValue={rate}
            />

            <RadioInputFieldSet type={type} />

            <button type='submit'>Calculate Repayments</button>
        </InputForm>
    );
}

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
