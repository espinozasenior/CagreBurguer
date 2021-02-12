
export default function generateRandomId() : number {
    const date = new Date();
    const getFullLocaleStringDate : any = date.toLocaleString();
    const transformToOnlyNumbers : number = getFullLocaleStringDate.replace(/(\/|,|:|\s|(AM|PM)|-)/gi,'');
    return transformToOnlyNumbers;
}
