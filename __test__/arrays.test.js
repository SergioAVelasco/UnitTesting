import { arrayFruits, arrayColors} from './../arrays'

describe('Comprobaremos que existe un elemento' , () => {

    test('Contienen una banana?' , () => {
        expect(arrayFruits()).toContain('Banana')
    })

    test('No contienen un Platano' , () => {
        expect(arrayFruits()).not.toContain('Platano')
    })
    
    test('Comprobar el tamaño de un array', () => {
        expect(arrayFruits()).toHaveLength(6)
    })

    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('Azul')
    })
    
})