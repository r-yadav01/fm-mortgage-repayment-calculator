export function calculate({ amount = 0, term = 0, rate = 0, type = 'Repayment' }) {
    const P = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const monthlyRate = annualRate / 12;
    const totalMonths = parseFloat(term) * 12;

    let monthlyPayment = 0;
    let totalRepayment = 0;

    if (type === 'Repayment') {
        // Standard Amortization Formula
        monthlyPayment =
            (P * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
        totalRepayment = monthlyPayment * totalMonths;
    } else {
        // Interest Only Formula
        monthlyPayment = P * monthlyRate;
        totalRepayment = monthlyPayment * totalMonths + P;
    }

    return {
        monthly: monthlyPayment.toFixed(2),
        total: totalRepayment.toFixed(2),
    };
}

export function updateResultShown({ event, setResult }) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newAmount = Number(formData.get('£'));
    const newTerm = Number(formData.get('years'));
    const newRate = Number(formData.get('%'));
    const newType = formData.get('mortgage_type');

    console.log({ newAmount, newTerm, newRate, newType });

    const newResult = calculate({ amount: newAmount, term: newTerm, rate: newRate, type: newType });
    setResult(newResult);
}
