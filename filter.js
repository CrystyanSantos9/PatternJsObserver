var arr = [
    {
    name:'Paulo',
    idade:21
    },
    {
        name:'Henrique',
        idade:22
    },
    {
        name:'Rodolfo',
        idade:22
    },
]

const semPaulo = arr.filter(person=>person.name !=='Paulo')

console.log(semPaulo)