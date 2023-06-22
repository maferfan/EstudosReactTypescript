"use strict";
// // let nome: string = "matheus";
// let idade: number = 90;
// let programador: boolean = true;
// //type array
// let nomes: string[] = ['matheus', 'lucas', 'luiza']
// let idades: number[] = [1, 2, 3]
// //type any
// let names: any = ['matheus', 'lucas', 90]
// names.push(2)
// //Funções type  que recebe um parametro com string e retorna uma string
// function firstLetterUpperCase(name: string): string {
//     let firstLetter = name.charAt(0).toUpperCase()
//     return firstLetter + name.substring(1)
// }
// let nome = firstLetterUpperCase('matheus')
// function soma(a: number, b: number) {
//     return a + b
// }
// const c = soma(1, 1)
// //typeof for each
// let names2 = ['matheus', 'lucas', 'luiza', 90]
// names2.forEach((name) => {
//     if (typeof name === 'string') {
//         console.log(name.toUpperCase())
//     } else {
//         console.log(null)
//     }
// })
// // objetos = "?:" propriedade opcional
// function resumo(usuario: { nome: string, idade?: number }) {
//     if (usuario.idade !== undefined) {
//         return `Olá ${usuario.nome}, tudo bem? voce tem ${usuario.idade} anos.`
//     } else {
//         return `Olá ${usuario.nome}, tudo bem?`
//     }
// }
// const u = {
//     nome: "matheus",
//     // idade: 25
// }
// resumo(u);
// //Union types
// const mostrarIdade = (idade2: number | string) => {
//     if(typeof idade2 === "string" ){
//         console.log(idade2.toUpperCase())
//     }else{
//         console.log(idade2)
//     }
// }
// mostrarIdade(90)
// mostrarIdade("90")
// //criar type, quando queremos trabalhar com objeto ou organizar o código
// // type User = {
// //     nome: string
// // } type = inalterável
// interface User {
//     nome: string
// } // interface = alterável
// function mostrarIdade2(usuario: User) {
//     return `Olá ${usuario.nome}!`
// }
// const e = {
//     nome:"matheus"
// }
// //criar type para funções
// type MathFunction = (n1: number, n2: number) => number;
// const somar: MathFunction = (n1, n2) => {
//     return n1 + n2
// }
// const subtrair: MathFunction = (n1, n2) => {
//     return n1 - n2
// }
// watchMode
const nome = 'matheus';
function algo(n1) {
    return n1;
}
algo(12);
