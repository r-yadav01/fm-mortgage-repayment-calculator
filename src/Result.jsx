export function Result({ info }) {
    const { monthly, total } = info;
    return (
        <footer>
            <h2>Your results</h2>
            <p>
                Your results are shown below based on the information you provided. To adjust the
                results, edit the form and click "calculate repayments" again.
            </p>

            <Display
                monthly={monthly}
                total={total}
            />
        </footer>
    );
}

function Display({ monthly, total }) {
    return (
        <article>
            <div>
                <p>Your monthly repayments</p> <strong>{monthly}</strong>
            </div>
            <hr />
            <div>
                <p>Total you'll repay over the term</p> <strong>{total}</strong>
            </div>
        </article>
    );
}

const backup = (
    <>
        <div>
            <img
                src='./src/assets/illustration-empty.svg'
                alt='illustration'
            />
        </div>
        <h2>Results shown here</h2>
        <p>
            Complete the form and click "calculate repayments" to see what your monthly repayments
            would be.
        </p>
    </>
);
