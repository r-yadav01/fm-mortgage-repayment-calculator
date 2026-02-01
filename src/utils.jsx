export function calculate({ amount, term, rate, type }) {
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
