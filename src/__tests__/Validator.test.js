import {Validator} from "../Validator.js";

describe('Validator', () => {
    const validator = new Validator();

    describe('проверка начала и конца userName ', () => {
        test.each([
            ['Abc', true],
            ['Abc123', true],
            ['Abc_123', true],
            ['Abc-123', true],
            ['A1b2c3', true],
            ['Zx-1_2-3', true],
            ['A123', true],
        ])('username: %s → %s', (input, expected) => {
            expect(validator.validateUsername(input)).toBe(expected);
        });
    });

    describe('недопустимые символы', () => {
        test.each([
            ['abc!', false],
            ['abc@', false],
            ['abc#', false],
            ['abc$', false],
            ['abc%', false],
            ['abc abc', false], // пробел
            ['abc.123', false],
            ['abc,123', false],
            ['абвгд', false], // кириллица
        ])('username: %s → %s', (input, expected) => {
            expect(validator.validateUsername(input)).toBe(expected);
        });
    });

    describe('нельзя начинать с цифры, _ или -', () => {

        test.each([

            ['1abc', false],

            ['_abc', false],

            ['-abc', false],

        ])('username: %s → %s', (input, expected) => {

            expect(validator.validateUsername(input)).toBe(expected);

        });

    });

    describe('нельзя заканчивать на _ или -', () => {
        test.each([
            ['abc_', false],
            ['abc-', false],
        ])('username: %s → %s', (input, expected) => {
            expect(validator.validateUsername(input)).toBe(expected);
        });
    });
    describe('не более 3 цифр подряд', () => {
        test.each([
            ['abc1234', false],
            ['a1111b', false],
            ['1234abc', false],
            ['ab9999', false],
        ])('username: %s → %s', (input, expected) => {
            expect(validator.validateUsername(input)).toBe(expected);
        });
    });

    describe('граничные случаи', () => {
        test.each([
            ['', false],          // пустая строка
            ['A', true],          // один символ
            ['1', false],         // один символ — цифра
            ['_', false],
            ['-', false],
            ['A_', false],
            ['A-', false],
        ])('username: %s → %s', (input, expected) => {
            expect(validator.validateUsername(input)).toBe(expected);
        });
    });
});
