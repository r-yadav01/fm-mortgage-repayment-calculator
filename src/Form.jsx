import styled from 'styled-components';
import React from 'react';
import { calculate } from './utils';
import { RadioInputFieldSet, InputFieldSet } from './InputTypes';

function updateResultShown({ event, setAmount, setTerm, setRate, setType, setResult }) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newAmount = formData.get('£');
    const newTerm = formData.get('years');
    const newRate = formData.get('%');
    const newType = formData.get('mortgage_type');

    setAmount(newAmount);
    setTerm(newTerm);
    setRate(newRate);
    setTerm(newTerm);
    setType(newType);

    const newResult = calculate({ newAmount, newTerm, newRate, newType });
    setResult(newResult);
}

export function Form({ setResult }) {
    const [amount, setAmount] = React.useState('');
    const [term, setTerm] = React.useState('');
    const [rate, setRate] = React.useState('');
    const [type, setType] = React.useState('');

    function reset() {
        setAmount('');
        setTerm('');
        setRate('');
        setTerm('');
    }

    return (
        <InputForm
            onSubmit={(event) =>
                updateResultShown({ event, setAmount, setTerm, setRate, setType, setResult })
            }
            noValidate={true}
        >
            <button onClick={reset}>Clear All</button>

            <InputFieldSet
                type='number'
                title='Mortgage Amount'
                label='£'
                value={amount}
                setValue={setAmount}
            />
            <InputFieldSet
                type='number'
                title='Mortgage Term'
                label='years'
                value={term}
                setValue={setTerm}
            />
            <InputFieldSet
                type='number'
                title='Interest Rate'
                label='%'
                value={rate}
                setValue={setRate}
            />

            <RadioInputFieldSet
                type={type}
                setType={setType}
            />

            <button type='submit'>Calculate Repayments</button>
        </InputForm>
    );
}

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
