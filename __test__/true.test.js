import { isNull , isTrue , isFalse , isUndefined } from './../true'

describe('Probar resultado nulos' , () => {
    test('null' , () => {
        expect(isNull( )).toBeNull();
    })
})

describe('Probar resultado verdaderos' , () => {
    test('null' , () => {
        expect(isTrue( )).toBeTruthy();
    })
})

describe('Probar resultado falsos' , () => {
    test('null' , () => {
        expect(isFalse( )).toBeFalsy();
    })
})
describe('Probar resultados indefinidos', () => {
    test('undefined', () => {
        expect(isUndefined( )).toBeUndefined();
    })
})
describe('Probar resultados no verdaderos', () => {
    test('Falso o verdaderos',() => {
        expect(isFalse()).not.toBeTruthy();
    })
})