import React from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { Result } from './Result';
import { GlobalStyles } from './GlobalStyles';

function App() {
    const [mockData, setMockData] = React.useState({
        amount: 300000,
        term: 25,
        rate: 5.25,
        type: 'Repayment',
    });

    return (
        <>
            <Calculator>
                <Header>
                    <h1>Mortgage Calculator</h1>
                    <button>Clear All</button>
                </Header>
                <Form
                    {...mockData}
                    setMockData={setMockData}
                />
                <Result {...mockData} />
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
