import styled from 'styled-components';

export function Result({ result }) {
    console.log(result);
    const { monthly, total } = result;

    const realThing = (
        <Footer centeralign={false}>
            <FooterHeading>Your results</FooterHeading>
            <FooterInfo centerAlign={false}>
                Your results are shown below based on the information you provided. To adjust the
                results, edit the form and click "calculate repayments" again.
            </FooterInfo>

            <Display
                monthly={monthly}
                total={total}
            />
        </Footer>
    );

    let showNothing = false;

    if (monthly === null && total === null) {
        showNothing = true;
    }

    return <>{showNothing ? backup : realThing}</>;
}

function Display({ monthly, total }) {
    return (
        <ResultColumn>
            <ResultRow>
                <p>Your monthly repayments</p> <MonthlyDue>{monthly}</MonthlyDue>
            </ResultRow>
            <SeparatorLine />
            <ResultRow>
                <p>Total you'll repay over the term</p> <TotalDue>{total}</TotalDue>
            </ResultRow>
        </ResultColumn>
    );
}

const SeparatorLine = styled.hr`
    margin-block: 1rem;
    border-color: hsl(200, 24%, 40%);
`;

const MonthlyDue = styled.strong`
    font-size: 1.75rem;
    font-weight: 700;
    color: hsl(61, 70%, 52%);

    &::before {
        content: '£';
        padding-right: 0.25rem;
    }
`;

const TotalDue = styled.strong`
    font-size: 1.25rem;
    font-weight: 700;
    color: hsl(202, 86%, 94%);

    &::before {
        content: '£';
        padding-right: 0.25rem;
    }
`;
const ResultColumn = styled.article`
    background-color: hsl(202, 55%, 10%);
    border-top: 2px solid hsl(61, 70%, 52%);
    border-radius: 6px;
    padding: 1rem 0.75rem;
`;

const ResultRow = styled.div`
    color: hsl(203, 41%, 72%);
`;

const Footer = styled.footer`
    background-color: hsl(202, 55%, 16%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    align-items: ${(p) => (p.centeralign ? 'center' : 'stretch')};

    @media (min-width: 550px) {
        flex: 1;
        margin: 0rem;
        border-radius: 0rem 0rem 0rem 3rem;
    }
`;

const FooterHeading = styled.h2`
    color: hsl(202, 86%, 94%);
`;

const FooterInfo = styled.p`
    color: hsl(203, 41%, 72%);

    text-align: ${(p) => (p.centeralign ? 'center' : 'inline-start')};
    padding: 1rem 0rem;
`;

const backup = (
    <Footer centeralign={true}>
        <div>
            <img
                src='./src/assets/illustration-empty.svg'
                alt='illustration'
            />
        </div>
        <FooterHeading>Results shown here</FooterHeading>
        <FooterInfo centeralign={true}>
            Complete the form and click "calculate repayments" to see what your monthly repayments
            would be.
        </FooterInfo>
    </Footer>
);
