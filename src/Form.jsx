import styled from 'styled-components';
import { RadioInputFieldSet, InputFieldSet } from './InputTypes';

export function Form({ amount, term, rate, type }) {
    return (
        <InputForm>
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
