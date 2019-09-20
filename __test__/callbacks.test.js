import {callbackHell} from './../callbacks'

describe('Probando funciones asincronas',() => {
    test('callback', (done) => {
        function otherCallback(data){
            expect(data).toBe('Hola Javascripters')
            done()
        }
        callbackHell(otherCallback)
    })
})