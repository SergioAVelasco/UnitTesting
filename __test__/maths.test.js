import { sumar , restar , multiplicar , dividir } from './../maths' 

describe('Prueba de operaciones', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    },99999);
    test('Prueba de resta', () => {
        expect(restar(1,1)).toBe(0);
    },99999);
    test('Prueba de multiplicación', () => {
        expect(multiplicar(1,2)).toBe(2);
    },99999);
    test('Prueba de división', () => {
        expect(dividir(1,1)).toBe(1);
    },99999);
});