import {numbers} from './../numbers'

describe('Estamos haciendo pruebas con numeros',() => {
    test('Mayor que',() => {
        expect(numbers(2,2)).toBeGreaterThan(3)
    })

    test('Mayor que o igual', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4)
    })

    test('Menor que', () => {
        expect(numbers(2,2)).toBeLessThan(5)
    })

    test('Menor, o igual que', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(10)
    })

    test('Numeros flotantes', () => {
        expect(numbers(0.2,0.1)).toBeCloseTo(0.3)
    })
})