export function Form() {
  return (
    <form action='#'>
      <InputFieldSet
        type='number'
        title='Mortgage Amount'
        label='£'
      />
      <InputFieldSet
        type='number'
        title='Mortgage Term'
        label='years'
      />
      <InputFieldSet
        type='number'
        title='Interest Rate'
        label='%'
      />

      <fieldset>
        <legend>Mortgage Type</legend>

        <LabeledRadioInput
          label='Repayment'
          groupName='mortgage_type'
        />

        <LabeledRadioInput
          label='Interest Only'
          groupName='mortgage_type'
        />
      </fieldset>

      <button type='submit'>Calculate Repayments</button>
    </form>
  );
}

function LabeledRadioInput({ label, groupName }) {
  return (
    <div>
      <input
        type='radio'
        id={label}
        value={label}
        name={groupName}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

function InputFieldSet({ title, label, type }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <label htmlFor={title}>{label}</label>
        <input
          type={type}
          id={title}
          name={label}
        />
      </div>
    </fieldset>
  );
}
