
export function normalizePriceToString(price : number) : string {
    return `S/ ${new Intl.NumberFormat("es-IN").format(price)}`;
}
