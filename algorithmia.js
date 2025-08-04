// NÍVEL 1
// 1. Criação das Variáveis Principais

let nome = "Elariel Trovoa";
let raca = "Elfa";
let classe = "Druida";
let idade = 440;
let nivel = 170;
let vida = 400;
let ouro = 70000;
let xp = 4800;
console.log(`Nível: ${nivel}`);
console.log(`Vida: ${vida}`);
console.log(`Ouro: ${ouro}`);
console.log(`XP: ${xp}`);

// 2. Definição de Constantes Mágicas

const NOME_ARMA = "Shadow Scepter";
let DANO_BASE = 70;
const NOME_ARMADURA = "Shadarmow";
const DEFESA_BASE = 40;
console.log(`Arma: ${NOME_ARMA}, dano: ${DANO_BASE}`);
console.log(`Armadura: ${NOME_ARMADURA}, defesa: ${DEFESA_BASE}`);

// 3. Aplicação de Operadores de Atribuição

xp += 150;
ouro -= 30;
vida += 40;
DANO_BASE *= 2;

// 4. Cálculo de Atributos Finais

let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);
console.log(`Ataque total: ${ataqueTotal}, Defesa total: ${defesaTotal}`);


// 5. Avaliação de Prontidão com Operadores Lógicos

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)
console.log(`Pode enfrentar o guardião? ${podeEnfrentarGuardiao}`);


// 6. Geração da Lore do Personagem

console.log(`${nome} é uma ${raca} das sombras com ${idade} anos, nascida na floresta escura de Viridara.`);
console.log(`Seus pais, magos que protegiam `);


// NÍVEL 2
// 1. Resgate do Nível 1

let nomePersonagem = "Elariel Trovoa";
let vidaAtual = 400;
let vidaMaxima = 400;
let manaAtual = 170;
let manaMaxima = 170;
let xpLevel2 = 60;

let inteligencia = 70;
let forca = 20;
let defesa = 15;
let agilidade = 40;
let combatesVencidos = 0;

let localAtual = "Viridara";
let missaoAtual = "Recuperar o banjo de sua mãe";

// Capítulo 1 - Primeira Decisão:

if (combatesVencidos >= 5 && xpLevel2 >= 50) {
    console.log('*🪬 Mensagem de Lord Virid:* "Você é perfeito para a missão. Vá em frente!"');
    
} else {
    console.log('*🪬 Mensagem de Lord Virid:* "Você ainda não está qualificado para essa missão. Pode ser perigoso!"');
    
}

console.log(`NARRADOR: "Bom, mesmo assim ${nomePersonagem} decide ir em frente."`);
