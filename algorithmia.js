// NÍVEL 1
// 1. Criação das Variáveis Principais

let nome = "Elariel Trovoa";
let raca = "Elfa";
let classe = "Druida";
let idade = 440;
let nivel = 170;
let vida = 400;
let ouro = 700;
let xp = 4800;
console.log(`Nome: ${nome}`);
console.log(`Raça: ${raca}`);
console.log(`Classe: ${classe}`);
console.log(`Nível: ${nivel}`);
console.log(`Vida: ${vida}`);
console.log(`Ouro: ${ouro}`);
console.log(`XP: ${xp}`);
console.log("");


// 2. Definição de Constantes Mágicas

const NOME_ARMA = "Shadow Scepter";
let DANO_BASE = 70;
const NOME_ARMADURA = "Shadarmow";
const DEFESA_BASE = 40;
console.log(`Arma: ${NOME_ARMA}, dano: ${DANO_BASE}`);
console.log(`Armadura: ${NOME_ARMADURA}, defesa: ${DEFESA_BASE}`);
console.log("");

// 3. Aplicação de Operadores de Atribuição

xp += 150;
ouro -= 30;
vida += 40;
DANO_BASE *= 2;

// 4. Cálculo de Atributos Finais

let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);
console.log(`Ataque total: ${ataqueTotal}, Defesa total: ${defesaTotal}`);
console.log("");


// 5. Avaliação de Prontidão com Operadores Lógicos

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)
console.log(`Pode enfrentar o guardião? ${podeEnfrentarGuardiao}`);
console.log("");


// 6. Geração da Lore do Personagem
console.log("");
console.log("📖 SUA HISTÓRIA:");
console.log("");

console.log(`${nome} é uma ${raca} com ${idade} anos, nascida na floresta escura de Viridara.`);
console.log(`Seus pais, magos que protegiam o lar élfico, morreram em uma batalha contra o Rei dos Trolls Caçadores.`)
console.log(`Sozinha, Elariel foi acolhida por Druidas das sombras, guardiões secretos que mantiam a floresta longe de espíritos malígnos, equlibrando seu ocultismo e mistérios. Sendo assim se tornando parte deles.`);
console.log(`Elariel possui um ${NOME_ARMA}, um cajado de sombras que tem poderes retirados do Crepúsculo.`);
console.log(`Sua armadura ${NOME_ARMADURA} é protegida pelo feitiço dos guardiões de Viridara,`);
console.log(`Seus olhos prateados brilham, e suas tatuagens feitas de sombra cobrem seu corpo todo.`)
console.log(`Por baixo da armadura, um manto de folhas negras e musgo,`);
console.log(`Anda descalça para sentir conexão com a floresta, e é sempre acompanhada pelo espírito guardião Freya`);
console.log(`${nome} é uma elfa calma e agilidosa, pensando sempre com muito cuidado,`);
console.log(`Já salvou o mundo diversas vezes com suas habilidades mágicas, enfrentando coisas que outros jamais enfretariam.`);
console.log("");



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
let missaoAtual = "Vingar a morte de seus pais";
console.log("");
console.log("");

// CAPÍTULO 1: Condicionais Simples na narrativa
console.log("🌅 CAPÍTULO 1: O Aviso dos Anciões");

// Verificação baseada no nível do personagem
if (combatesVencidos >= 5 && xpLevel2 >= 50) {
    console.log('*🧿 Mensagem de Lord Virid:* "Você é perfeito para a missão. Vá em frente!"');
    
} else {
    console.log('*🧿 Mensagem de Lord Virid:* "Você ainda não está qualificado para essa missão. Pode ser perigoso!"');
    
}

console.log(`NARRADOR: "Bom, mesmo assim ${nomePersonagem} decide ir em frente."`);

// Verificação de recursos especiais
if (ouro >= 100) {
    console.log("💰 Tantas moedas no bolso, está atraindo olhares cobiçosos...");
}

// Verificação de classe específica
if (classe === "Druida") {
    console.log("🔮 A energia mágica da natureza flui através de suas veias...");
}
console.log("");
console.log("");

// CAPÍTULO 2: Escolha Estratégica
console.log("🛡️ CAPÍTULO 2: A Encruzilhada do Destino");

// Escolha baseada em recursos
if (ouro >= 50) {
    console.log("💎" + nomePersonagem + " Tem dinehiro demais e deverá comprar equipamentos melhores!");
    forca += 5;
    defesa += 3;
    ouro -= 50;
    console.log("Sua força e defesa aumentaram! Ouro restante: " + ouro);
} else {
    console.log("💸 "+ nomePersonagem + " Não tem ouro o suficiente e deverá confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! Agilidade +2");
    agilidade += 2;
}

// Sistema de recompensas narrativo
if (xpLevel2 >= 100) {
    console.log("🎲 A sabedoria acumulada se manifesta! " + nomePersonagem + " sente-se mais poderoso!");
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima; // Vida restaurada
} else {
    console.log("📊 " + nomePersonagem + " ainda busca mais conhecimento e experiência...");
    console.log("Sabedoria atual: " + xpLevel2 + "/100");
}
console.log("");
console.log("");
