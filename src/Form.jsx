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
        setAmount('');
        setTerm('');
        setRate('');
        setType('');
        setResult({ monthly: null, total: null });
    }

    return (
        <InputForm
            onSubmit={(event) => updateResultShown({ event, setResult })}
            noValidate={true}
        >
            <Reset onClick={reset}>Clear</Reset>

            <InputFieldSet
                type='number'
                title='Mortgage Amount'
                label='£'
                value={amount}
                setValue={setAmount}
                labelReverse={false}
            />
            <TermNRate>
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
            </TermNRate>

            <RadioInputFieldSet
                type={type}
                setType={setType}
            />

            <Submit type='submit'>
                <img
                    src='./icon-calculator.svg'
                    alt='calc_icon'
                />
                Calculate Repayments
            </Submit>
        </InputForm>
    );
}

const TermNRate = styled.div`
    @media (min-width: 550px) {
        display: flex;
        gap: 1rem;
    }
`;

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

const Reset = styled.button`
    border: none;
    text-decoration: underline;
    align-self: flex-start;
    border: 1px solid;

    &:active {
        background-color: hsl(61, 70%, 72%);
        outline: 2px solid hsl(61, 70%, 52%);
        color: hsl(200, 24%, 20%);
        text-decoration: none;
    }

    @media (min-width: 550px) {
        align-self: flex-end;
        margin-top: -1.5rem;
    }

    @media (hover: hover) {
        &:hover {
            outline: 2px solid hsl(61, 70%, 52%);
        }
    }
`;

const Submit = styled.button`
    padding: 0.75rem 1rem;
    font-weight: 700;
    display: flex;
    gap: 1rem;
    justify-content: center;
    border-radius: 5rem;
    border: none;
    align-items: center;
    background-color: hsl(61, 70%, 52%);

    &:active {
        background-color: hsl(61, 70%, 72%);
        outline: 2px solid hsl(61, 70%, 52%);
        color: hsl(200, 24%, 20%);
    }

    @media (min-width: 550px) {
        padding: 0.5rem 1.5rem 0.6rem;
        align-self: flex-start;
    }

    @media (hover: hover) {
        &:hover {
            background-color: hsl(61, 70%, 72%);
        }
    }
`;
