export function Form({ amount, term, rate, type }) {
    return (
        <form action='#'>
            <InputFieldSet
                type='number'
                title='Mortgage Amount'
                label='£'
                inputValue={amount}
            />
            <InputFieldSet
                type='number'
                title='Mortgage Term'
                label='years'
                inputValue={term}
            />
            <InputFieldSet
                type='number'
                title='Interest Rate'
                label='%'
                inputValue={rate}
            />

            <fieldset>
                <legend>Mortgage Type</legend>

                <LabeledRadioInput
                    label='Repayment'
                    groupName='mortgage_type'
                    inputValue={type}
                />

                <LabeledRadioInput
                    label='Interest Only'
                    groupName='mortgage_type'
                    inputValue={type}
                />
            </fieldset>

            <button type='submit'>Calculate Repayments</button>
        </form>
    );
}

function LabeledRadioInput({ label, groupName, inputValue }) {
    return (
        <div>
            <input
                type='radio'
                id={label}
                value={label}
                checked={label === inputValue}
                name={groupName}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

function InputFieldSet({ title, label, type, inputValue }) {
    return (
        <fieldset>
            <legend>{title}</legend>
            <div>
                <label htmlFor={title}>{label}</label>
                <input
                    type={type}
                    id={title}
                    name={label}
                    value={inputValue}
                />
            </div>
        </fieldset>
    );
}
