import { calcularDesconto } from './desconto.js';

const preco = 100;
const desconto = 20;

const resultado = calcularDesconto(preco, desconto);

document.body.innerHTML = `
    <h1>Calculadora de Desconto</h1>
    <p>Preço original: R$ ${preco}</p>
    <p>Desconto: ${desconto}%</p>
    <p>Preço final: R$ ${resultado}</p>
`;