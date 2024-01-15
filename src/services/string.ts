export const string = {
    handleZero: (equation: {value: string}, number: number | '.') => {
        if (equation.value === '0' && number !== '.') {
            equation.value = ''
        }
    },
    validateNumbers: (equation: {value: string}): boolean => {
        const numbers: string[] = equation.value.split(/[-+*/]/);
        const isDecimal = new RegExp(/^\d+\.\d+$/);
        return numbers.every((number: string) => isDecimal.test(number));
    }
}