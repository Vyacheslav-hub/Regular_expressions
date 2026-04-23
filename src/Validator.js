export class Validator {
    validateUsername(userName) {
        // 1. Только допустимые символы
        const regAllowed = /^[A-Za-z0-9_-]+$/;

        // 2. Не более 3 цифр подряд (то есть 4 запрещено)
        const regFourDigits = /\d{4}/;

        // 3. Проверка границ (первый и последний символ)
        const regEdge = /^[A-Za-z]/.test(userName) &&
            /[A-Za-z0-9]$/.test(userName);

        return (
            regAllowed.test(userName) &&
            !regFourDigits.test(userName) &&
            regEdge
        );
    }
}
