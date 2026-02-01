import React from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { Result } from './Result';
import { GlobalStyles } from './GlobalStyles';

function App() {
    return (
        <>
            <Calculator>
                <Header />

                <Form />

                <Result />
            </Calculator>
            <GlobalStyles />
        </>
    );
}

function Header() {
    return (
        <header>
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>
        </header>
    );
}

const Calculator = styled.div`
    max-width: 430px;
    margin-inline: auto;
    padding: 1.5rem 1.25rem;
    outline: 2px dashed black;
`;
export default App;
