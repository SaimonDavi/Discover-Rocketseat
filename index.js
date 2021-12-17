let nome = 'Saimon'
let nomes = ['Pedro', 'Paulo', 'João']

for(let char of nome) {
    console.log(char)
}

for(let nomeArray of nomes) {
    for(let char of nomeArray){
        console.log(char)
    }
}

let person = {
    name: 'John',
    age: 20,
    weight: 68.7
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}