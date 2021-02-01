export default function numberFormat(value){
    let result;
    if (parseInt(value)) {
        result = new Intl.NumberFormat().format(value);
    } else {
        result = 0;
    }
    return result;
}