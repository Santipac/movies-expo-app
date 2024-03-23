
export class Formatter {
    public static currency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            currency: 'USD',
            style: 'currency'
        }).format(value)
    }
}