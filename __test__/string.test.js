describe('Estamos comprobando cadenas de texto', () => {

    const text = 'Un bonito texto'

    test('Debe contenet el siguiente texto', () => {
        expect(text).toMatch(/bonito/)
    })

    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/es/)
    })

    test('comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(15)
    })
})