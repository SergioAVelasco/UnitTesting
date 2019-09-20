describe('Comparadores comunes' , () => {
   const user = {
       name: 'Sergio', 
       lastName: 'Velasco'
   } 
   const user2 = {
       name: 'Armando', 
       lastName: 'Guzmán'
   }
   
   test('No son totalmente iguales', () => {
        expect(user).not.toEqual(user2)  
   })
});