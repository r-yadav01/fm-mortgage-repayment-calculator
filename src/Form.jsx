import styled from 'styled-components';
import React from 'react';
import { updateResultShown } from './utils';
import { RadioInputFieldSet, InputFieldSet } from './InputTypes';

export function Form({ setResult }) {
    const [amount, setAmount] = React.useState('');
    const [term, setTerm] = React.useState('');
    const [rate, setRate] = React.useState('');
    const [type, setType] = React.useState('');

    function reset() {
        setAmount(0);
        setTerm(0);
        setRate(0);
        setType(0);
        setResult({ monthly: null, total: null });
    }

    return (
        <InputForm
            onSubmit={(event) => updateResultShown({ event, setResult })}
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
