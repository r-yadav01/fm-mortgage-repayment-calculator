import React from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { Result } from './Result';
import { GlobalStyles } from './GlobalStyles';

function App() {
    const [result, setResult] = React.useState({ monthly: null, total: null });

    return (
        <Wrapper>
            <Calculator>
                <InputPart>
                    <Header>
                        <h1>Mortgage Calculator</h1>
                    </Header>
                    <Form setResult={setResult} />
                </InputPart>
                <Result result={result} />
            </Calculator>
            <GlobalStyles />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: hsl(202, 86%, 94%);
    height: 100%;

    @media (min-width: 550px) {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
`;

const InputPart = styled.div`
    padding: 1.5rem 1rem 1rem;
    @media (min-width: 550px) {
        max-width: 50%;
        padding: 2rem;
    }
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    color: hsl(202, 55%, 16%);
`;

const Calculator = styled.div`
    max-width: 430px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: space-between;

    @media (min-width: 550px) {
        max-width: 900px;
        flex-direction: row;
        border-radius: 0.75rem;
        padding: 0rem;
        overflow: clip;
    }
`;

export default App;
