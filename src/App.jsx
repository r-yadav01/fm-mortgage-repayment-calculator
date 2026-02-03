import React from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { Result } from './Result';
import { GlobalStyles } from './GlobalStyles';

function App() {
    const [result, setResult] = React.useState({ monthly: null, total: null });

    return (
        <>
            <Calculator>
                <Header>
                    <h1>Mortgage Calculator</h1>
                    {/* <button onClick={() => setMockData(emptyData)}>Clear All</button> */}
                </Header>
                <Form setResult={setResult} />
                <Result result={result} />
            </Calculator>
            <GlobalStyles />
        </>
    );
}

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
`;

const Calculator = styled.div`
    max-width: 430px;
    margin-inline: auto;
    padding: 1.5rem 1.25rem;
    outline: 2px dashed black;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export default App;
