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
            <Reset onClick={reset}>Clear All</Reset>

            <InputFieldSet
                type='number'
                title='Mortgage Amount'
                label='£'
                value={amount}
                setValue={setAmount}
                labelReverse={false}
            />
            <InputFieldSet
                type='number'
                title='Mortgage Term'
                label='years'
                value={term}
                setValue={setTerm}
                labelReverse={true}
            />
            <InputFieldSet
                type='number'
                title='Interest Rate'
                label='%'
                value={rate}
                setValue={setRate}
                labelReverse={true}
            />

            <RadioInputFieldSet
                type={type}
                setType={setType}
            />

            <Submit type='submit'>
                <img
                    src='./src/assets/icon-calculator.svg'
                    alt='calc_icon'
                />
                Calculate Repayments
            </Submit>
        </InputForm>
    );
}

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* outline: 2px dashed red; */
`;

const Reset = styled.button`
    border: none;
    text-decoration: underline;
    align-self: flex-start;
`;

const Submit = styled.button`
    padding: 1rem;
    font-weight: 700;
    display: flex;
    gap: 1rem;
    justify-content: center;
    border-radius: 5rem;
    border: none;
    align-items: center;
    background-color: hsl(61, 70%, 52%);
`;
