// function upperName(name){
//     return name.toUpperCase();
// }

// const lowerName = () => { 
    
// }

// console.log(upperName('mike'));

//========================================

// const upperName = function (name) {
//     return name.toUpperCase();
// }

// console.log(upperName('mike'));

//======================================== ARROW FUNCTION

// const upperName = (name) => {
//     return name.toUpperCase();
// }

// console.log(upperName('mike'));

//======================================== ARROW FUNCTION ENCURTADA

// const upperName = (name) => name.toUpperCase();


// console.log(upperName('mike'));

//======================================== VETOR X Y

// function handleMouse(event) {
//     // console.log(event);
//     console.log(event.clientX);
// }

// document.addEventListener('click', handleMouse);

//======================================== VETOR X Y COM DESESTRUTURAÇÃO

// function handleMouse(event) {
//     // const x = event.clientX;
//     // const y = event.clientY;
    
//     const {clientX, clientY} = event;

//     console.log(clientX, clientY);
// }

// document.addEventListener('click', handleMouse);

//======================================== VETOR X Y COM DESESTRUTURAÇÃO DIRETO NO PARÂMETRO

// function handleMouse({clientX, clientY}) {
    
//     console.log(clientX, clientY);
// }

// document.addEventListener('click', handleMouse);

//======================================== DESESTRUTURANDO ARRAY

// function handleMouse({ clientX, clientY}) {
//     console.log(clientX, clientY);
// }

// const frutas = ['banana', 'uva'];
// const [fruta1, fruta2] = frutas;

// const useQuadrado = [
//     4, 
//     function(lado) { 
//         return 4 * lado;
//     },
// ];

// const [lados, perimetro] = useQuadrado; //Desestruturação, pois lados recebe o primeiro valor do array anterior (4) e perimetro recebe o segundo valor do array anterior).
// console.log(lados);
// console.log(perimetro(10));

// document.addEventListener('click', handleMouse);

//======================================== Rest Spread - Invertendo array

// function showList(empresa, clientes){
//     clientes.forEach((cliente) => {
//         console.log(cliente, empresa);
//     });
// }

// showList('Google', ['Andre', 'Rafael'])

//======================================== Rest Spread - Invertendo array (com spread : ...)

// function showList(empresa, ...clientes){ // o spread ... pega tudo , nesse caso, do segundo campo casa do array
//     clientes.forEach((cliente) => {
//         console.log(cliente, empresa);
//     });
// }

// showList('Google', 'Andre', 'Rafael', 'Item 2')

//======================================== Número maior com max, vai aparecer NAN, pois estava esperando número e enviei um array.

// const numeros = [10, 5, 20];
// const maior = Math.max(numeros);
// console.log(maior);

//======================================== Número maior com max, vai aparecer o número maior. O spread ... envia um item de cada vez, como se não fosse array.

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

//Imprime 13, 15, 10, 5, 20, 25, 30, 5030
// const numeros2 = [13, 15, ...numeros, 25, 30, 5030]; 
// console.log(numeros2);

//Imprime 13, 15, Array(3), 25, 30, 5030
const numeros2 = [13, 15, numeros, 25, 30, 5030];
console.log(numeros2);

//criando obj > modificando obj
const carro = {
    cor: 'Azul',
    portas: 4
}

carro.ano = 2020;

console.log(carro);

//criando obj > adiocionado novo atributo no obj (porém sem modificar o obj original)
const carro = {
    cor: 'Azul',
    portas: 4
};

carroAno = {...carro, ano: 2008};

console.log(carroAno);
console.log(carro);