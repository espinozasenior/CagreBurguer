import { normalizePriceToString } from "../normalizePrice";

const values : ReadonlyArray<[number,string]> = [
    [ 200, "S/ 200" ],
    [ 400235, "S/ 400,235" ],
    [ 0.52395309, "S/ 0.524" ],
]

describe('Normalize price', () => {

    it.each(values)("Muestra el formato correcto en soles",(input : number,expected : string) => {
        expect(normalizePriceToString(input)).toBe(expected);
    });

    it('Contiene el símbolo de soles',() => {
        const normalizePrice = normalizePriceToString(20350);
        expect(normalizePrice).toContain('S/');
    });

})
