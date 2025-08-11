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
const NOME_ARMADURA = "Shawmor";
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

// CAPÍTULO 3: A Batalha Decisiva
console.log("⚔️ CAPÍTULO 3: A Batalha Decisiva");
let poderCacadores = 30;

// Sistema de combate inteligente baseado na situação
if (vidaAtual <= 100) {
    console.log("🆘 Com pouca vida, " + nomePersonagem + " usa uma tática desesperada!");
    console.log("Ataque final com toda a força restante!");
    poderCacadores -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Mago") {
    console.log("✨ " + nomePersonagem + " canaliza todo seu poder mágico!");
    console.log("Magia devastadora!");
    poderCacadores -= (forca + 20);
    manaAtual -= 30;
} else if (agilidade >= 15) {
    console.log("🏃‍♂️ Com grande agilidade, executa um ataque certeiro!");
    poderCacadores -= forca;
} else {
    console.log("🛡️ Luta defensiva e calculada!");
    poderCacadores -= (forca / 2);
    vidaAtual += 10;
}

    console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nomePersonagem + " ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 1
console.log("Após os eventos do " + localAtual + ", nosso herói " + nomePersonagem);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

// EPÍLOGO - Resultado final
if (poderCacadores <= 0) {
    console.log("🎉 VITÓRIA ÉPICA! " + nomePersonagem + " triunfa!");
    experiencia += 100;
    combatesVencidos++;
    console.log("A lenda de " + nomePersonagem + " cresce...");
} else {
    console.log("⚔️ A batalha foi árdua, mas " + nomePersonagem + " sobrevive para lutar outro dia!");
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");
console.log("");
console.log("");

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===

// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
// Inventário mágico - primeira coleção arcana

let inventario = ["Poção de Vida", "Shadow Scepter", "Armadura Shawmor"];
let aliados = ["Espírito Guardião Freya", "Samurai Hiro", "Ninja Slade"];
let inimigosEncontrados = ["Troll Caçador", "Goblin Berserker", "Orc de Gelo"];
let salasCastelo = ["Biblioteca Arcana", "Armadilha de Cristal", "Torre do Tempo"];
let tesouroColetado = ["Banjo Mágico"];

console.log("🏰 === " + nomePersonagem + " ADENTRA O CASTELO DOS ARRAYS ===");
console.log("Após as vitórias dos níveis anteriores, nosso herói chegou ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");

// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús Arcanos do Castelo");

// 3.5.1. Declaração e inicialização
let pocoesEncontradas = ["Cura Maior", "Força Titânica", "Invisibilidade"];
let armadilhasAtiradas = ["Bola de Fogo"]; // Array vazio - será preenchido na aventura

// 3.5.2. Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

// Modificando elemento específico
inventario[0] = "Poção de Vida Suprema"; // Upgrade da poção!
console.log("✨ " + nomePersonagem + " aprimorou uma poção!");

// 3.5.3. Métodos de array fundamentais
inventario.push("Anel de Proteção"); // Adiciona no final
console.log("💍 Novo item adicionado! Inventário: " + inventario);

let itemRemovido = inventario.pop(); // Remove do final
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);

// === CAPÍTULO 2: O RITUAL DA EXPLORAÇÃO ===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as Masmorras Sistemáticas");

// Explorando cada sala do castelo usando for tradicional
console.log("🗺️ Começando exploração das " + salasCastelo.length + " salas místicas...");

for (let i = 0; i < salasCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log("📚 " + nomePersonagem + " encontra Grimório da Bruxa Branca!");
xpLevel2 += 50;
} else if (i === 1) {
console.log("💎 Cristais brilhantes concedem poder mágico!");
tesouroColetado.push("Cristal de Poder");
} else {
console.log("⏰ O tempo distorce ao redor de " + nomePersonagem + "!");
vidaAtual -= 10; // Pequeno dano temporal
}
}

console.log("📊 Exploração completa! XP: " + xpLevel2 + " | Vida: " + vidaAtual);

// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos");

// Recrutando aliados com for tradicional
console.log("🏹 " + nomePersonagem + " convoca seus aliados para a batalha final:");

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("⚡ Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");

// Cada posição no array determina habilidade especial
if (i === 0) { // Primeiro aliado - Líder mágico
console.log("🔮 Como líder mágico, " + aliado + " multiplica o poder da equipe!");
ouro += 50;
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como defensor principal, " + aliado + " fortalece a resistência!");
vidaMaxima += 30;
} else { // Demais aliados - Especialistas
console.log("🏹 Como especialista, " + aliado + " aprimora táticas de combate!");
xpLevel2 += 40;
}
}

console.log("🎖️ Equipe completa! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);

// === CAPÍTULO 4: A BATALHA FINAL DOS ARRAYS ===
console.log("");
console.log("🐉 CAPÍTULO 4: Confronto com as Criaturas do Castelo");

// Sistema de batalha usando arrays e for tradicional
let inimigosBatalha = ["Guardião de Cristal", "Senhor das Sombras", "Dragão dos Arrays"];
let danoRecebido = [];

console.log("💀 " + nomePersonagem + " enfrenta " + inimigosBatalha.length + " inimigos épicos!");

// Batalha usando for tradicional para controle preciso
for (let i = 0; i < inimigosBatalha.length; i++) {
let inimigo = inimigosBatalha[i];
let dano = Math.floor(Math.random() * 30) + 10; // Dano entre 10 e 39

console.log("⚔️ Rodada " + (i + 1) + " - Enfrentando: " + inimigo);
console.log("💥 " + nomePersonagem + " causa " + dano + " de dano!");

danoRecebido.push(dano); // Armazena dano para cálculos posteriores

// Lógica especial para cada rodada baseada no índice
if (i === 0) {
console.log("💎 Primeira vitória! Cristais fragmentados concedem bônus!");
tesouroColetado.push("Fragmento de Cristal");
} else if (i === 1) {
console.log("🌑 Segunda batalha! As sombras drenam energia, mas " + nomePersonagem + " resiste!");
vidaAtual -= 15;
} else {
console.log("🔥 Batalha final! O dragão recua! Vitória épica alcançada!");
xpLevel2 += 100;
tesouroColetado.push("Escama Dragônica");
}
}

// Calculando estatísticas da batalha usando for tradicional
let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
danoTotal += danoRecebido[i];
console.log("📊 Rodada " + (i + 1) + " - Dano: " + danoRecebido[i]);
}

console.log("⚡ Dano total causado: " + danoTotal);
console.log("🏆 Tesouros coletados: " + tesouroColetado.length + " itens épicos!");

// === EPÍLOGO: O MESTRE DOS ARRAYS ===
console.log("");
console.log("👑 === EPÍLOGO: " + nomePersonagem + " - CONQUISTADOR DO CASTELO ===");

// Estatísticas finais da jornada
console.log("📈 Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + xpLevel2);
console.log("• Vida restante: " + vidaAtual + "/" + vidaMaxima);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);

// === ADICIONE SUAS 10+ LINHAS ÉPICAS DE CONTINUAÇÃO AQUI ===
console.log("");
console.log("🌟 A LENDA CONTINUA...");
console.log("Após conquistar o Castelo dos Arrays, " + nomePersonagem + " emergiu transformado.");
console.log("O domínio sobre as coleções arcanas fluía em suas veias como magia pura.");
console.log("Cada loop executado havia forjado sua mente em algoritmos de ferro e determinação.");
console.log("Os arrays sussurravam segredos ancestrais, revelando padrões ocultos da realidade.");
console.log("Aliados admiravam sua capacidade de organizar caos em estruturas harmoniosas.");
console.log("O inventário repleto de artefatos místicos brilhava com poder recém-descoberto.");
console.log("Mas no horizonte, novas aventuras aguardavam o Mestre dos Códigos Arcanos.");
console.log("Rumores falavam de torres onde funções aguardavam para serem dominadas.");
console.log("E objetos legendários que guardariam os segredos da programação orientada.");
console.log("A jornada estava longe do fim - era apenas o início de uma saga maior.");
console.log("Pois " + nomePersonagem + " havia provado ser digno do título supremo:");
console.log("⚡ ARQUI-MAGO DOS ALGORITMOS ETERNOS ⚡");

console.log("");
console.log("🎯 FIM DO NÍVEL 3 | AGUARDE FUTURAS AVENTURAS NA ACADEMIA DOS CÓDIGOS! 🎯");