export const formattingPhones = (tel) => {
    const reg = /\D/g;

    const noSpace = tel.replace(reg, '');

    const firstDigit = noSpace[0];

    if (firstDigit === '8' && noSpace.length === 11) {
        return '+7' + noSpace.slice(1);
    }else {
        return '+' + noSpace;
    }
}
