// Dados do Baralho Cigano — nomes, arquivos de imagem e significados de cada carta.
// Cada carta tem um "significado" geral e um ângulo de interpretação específico
// para cada um dos 7 temas. A leitura final junta as 3 cartas num texto único.

export interface CartaCigana {
  id: number;
  nome: string;
  arquivo: string; // caminho da imagem dentro de /public (raiz)
  significado: string;
}

export const cartas: CartaCigana[] = [
  { id: 1, nome: "O Cavaleiro", arquivo: "/01-cavaleiro.jpg", significado: "traz novidades chegando, um movimento que já está a caminho e que vai tirar você da inércia" },
  { id: 2, nome: "O Trevo", arquivo: "/02-trevo.jpg", significado: "fala de uma sorte pequena, mas real, que aparece nos detalhes do dia a dia e merece ser aproveitada" },
  { id: 3, nome: "O Navio", arquivo: "/03-navio.jpg", significado: "aponta para uma jornada, uma mudança de cenário ou algo que vem de longe até você" },
  { id: 4, nome: "A Casa", arquivo: "/04-casa.jpg", significado: "representa a base, a família e aquilo que já está construído e sustenta você" },
  { id: 5, nome: "A Árvore", arquivo: "/05-arvore.jpg", significado: "fala de raiz, saúde e crescimento lento, mas firme, que não se força, se cultiva" },
  { id: 6, nome: "As Nuvens", arquivo: "/06-nuvens.jpg", significado: "mostra uma confusão passageira, uma dúvida que ainda paira, mas que tende a se dissipar" },
  { id: 7, nome: "A Cobra", arquivo: "/07-cobra.jpg", significado: "alerta para desvios de rota, pessoas ou situações que exigem cautela e discernimento" },
  { id: 8, nome: "O Caixão", arquivo: "/08-caixao.jpg", significado: "não fala de morte literal, mas de encerramento necessário, algo que precisa ser deixado para trás" },
  { id: 9, nome: "O Buquê", arquivo: "/09-buque.jpg", significado: "traz um convite, um gesto de carinho, um presente ou uma alegria inesperada" },
  { id: 10, nome: "A Foice", arquivo: "/10-foice.jpg", significado: "indica uma decisão rápida, um corte necessário, algo que precisa ser cortado sem mais delongas" },
  { id: 11, nome: "O Chicote", arquivo: "/11-chicote.jpg", significado: "fala de repetição, de um padrão ou discussão que insiste em voltar até ser resolvido de verdade" },
  { id: 12, nome: "Os Pássaros", arquivo: "/12-passaros.jpg", significado: "mostra conversas, trocas, talvez um pouco de agitação ou fofoca ao seu redor" },
  { id: 13, nome: "A Criança", arquivo: "/13-crianca.jpg", significado: "representa começo, inocência e algo novo que ainda está em formação" },
  { id: 14, nome: "A Raposa", arquivo: "/14-raposa.jpg", significado: "pede atenção, pois alguém ou alguma situação pode não ser exatamente o que parece" },
  { id: 15, nome: "O Urso", arquivo: "/15-urso.jpg", significado: "fala de força, proteção e também de alguém com grande influência sobre você" },
  { id: 16, nome: "As Estrelas", arquivo: "/16-estrelas.jpg", significado: "traz esperança, clareza e uma luz que orienta os próximos passos" },
  { id: 17, nome: "A Cegonha", arquivo: "/17-cegonha.jpg", significado: "anuncia mudança, transformação, uma virada que já está em curso" },
  { id: 18, nome: "O Cão", arquivo: "/18-cao.jpg", significado: "representa lealdade, uma amizade verdadeira ou um apoio em quem você pode confiar" },
  { id: 19, nome: "A Torre", arquivo: "/19-torre.jpg", significado: "fala de solidez, de instituições, de algo oficial ou de um momento de isolamento necessário" },
  { id: 20, nome: "O Jardim", arquivo: "/20-jardim.jpg", significado: "mostra vida social, encontros e a sensação de estar em meio a muita gente" },
  { id: 21, nome: "A Montanha", arquivo: "/21-montanha.jpg", significado: "aponta um obstáculo real, algo que exige esforço para ser contornado" },
  { id: 22, nome: "Os Caminhos", arquivo: "/22-caminhos.jpg", significado: "representa escolhas, mais de um caminho possível se abrindo à sua frente" },
  { id: 23, nome: "Os Ratos", arquivo: "/23-ratos.jpg", significado: "fala de desgaste, pequenas perdas ou algo que vem corroendo aos poucos" },
  { id: 24, nome: "O Coração", arquivo: "/24-coracao.jpg", significado: "é o amor em sua forma mais direta, sentimento verdadeiro que pede espaço" },
  { id: 25, nome: "O Anel", arquivo: "/25-anel.jpg", significado: "fala de compromisso, contrato ou uma união que se firma" },
  { id: 26, nome: "O Livro", arquivo: "/26-livro.jpg", significado: "guarda um segredo ou um conhecimento ainda não revelado, algo a ser estudado com calma" },
  { id: 27, nome: "A Carta", arquivo: "/27-carta.jpg", significado: "traz uma notícia, uma mensagem ou informação que está a caminho" },
  { id: 28, nome: "O Homem", arquivo: "/28-homem.jpg", significado: "representa uma figura masculina importante nessa história, ou o próprio consulente" },
  { id: 29, nome: "A Mulher", arquivo: "/29-mulher.jpg", significado: "representa uma figura feminina importante nessa história, ou a própria consulente" },
  { id: 30, nome: "Os Lírios", arquivo: "/30-lirios.jpg", significado: "fala de paz, maturidade e harmonia familiar" },
  { id: 31, nome: "O Sol", arquivo: "/31-sol.jpg", significado: "é a carta da vitória, da vitalidade e da confirmação de que tudo vai dar certo" },
  { id: 32, nome: "A Lua", arquivo: "/32-lua.jpg", significado: "fala de emoção, intuição e reconhecimento, algo que toca o campo sentimental e espiritual" },
  { id: 33, nome: "A Chave", arquivo: "/33-chave.jpg", significado: "representa a solução, a virada decisiva que destrava o que estava parado" },
  { id: 34, nome: "Os Peixes", arquivo: "/34-peixes.jpg", significado: "fala de abundância, dinheiro e prosperidade material" },
  { id: 35, nome: "A Âncora", arquivo: "/35-ancora.jpg", significado: "traz estabilidade, segurança e algo firme para se apoiar" },
  { id: 36, nome: "A Cruz", arquivo: "/36-cruz.jpg", significado: "fala de um fardo, uma provação ou também de fé e resignação diante do que não se pode mudar" },
];

export const temas = ["Amor", "Espiritualidade", "Família", "Saúde", "Justiça", "Área Profissional", "Financeiro"] as const;
export type Tema = typeof temas[number];

// Ângulo de interpretação de cada carta (id) dentro de cada tema.
export const angulosPorCarta: Record<number, Record<Tema, string>> = {
  1: { "Amor": "uma novidade amorosa ou notícia importante sobre quem você ama está chegando", "Espiritualidade": "um chamado urgente para agir na sua fé, sem procrastinar", "Família": "uma notícia ou visita inesperada está a caminho de casa", "Saúde": "um resultado ou notícia médica deve chegar em breve", "Justiça": "um andamento rápido em um processo ou decisão pendente", "Área Profissional": "uma proposta ou oportunidade surge de forma repentina", "Financeiro": "uma entrada de dinheiro inesperada pode estar a caminho" },
  2: { "Amor": "pequenos gestos do dia a dia fortalecem o relacionamento", "Espiritualidade": "pequenas bênçãos diárias merecem sua gratidão e atenção", "Família": "um momento simples em casa traz alívio bem-vindo", "Saúde": "uma pequena melhora já é sinal de que o corpo responde bem", "Justiça": "um detalhe favorável pode pesar a seu favor", "Área Profissional": "uma chance discreta pode render bons frutos se aproveitada", "Financeiro": "um pequeno ganho extra pode aparecer nos próximos dias" },
  3: { "Amor": "alguém de longe, ou uma mudança no relacionamento, se aproxima", "Espiritualidade": "uma jornada espiritual, real ou simbólica, está começando", "Família": "uma mudança de cidade ou casa pode estar em pauta", "Saúde": "um tratamento ou especialista de fora pode trazer solução", "Justiça": "um processo pode envolver outro lugar ou trâmite externo", "Área Profissional": "uma proposta de fora, viagem a trabalho ou mudança de emprego", "Financeiro": "um investimento ou negócio distante pode gerar retorno" },
  4: { "Amor": "o relacionamento se firma quando construído sobre bases sólidas", "Espiritualidade": "sua fé se fortalece dentro do lar e da rotina", "Família": "a união em casa é o alicerce que sustenta tudo", "Saúde": "cuidar do ambiente onde você vive influencia direto o bem-estar", "Justiça": "uma questão relacionada a imóvel ou domicílio pode se resolver", "Área Profissional": "estabilidade no trabalho vem de uma base bem construída", "Financeiro": "patrimônio e economia doméstica pedem atenção redobrada agora" },
  5: { "Amor": "o vínculo cresce aos poucos, com raízes cada vez mais firmes", "Espiritualidade": "sua conexão espiritual se aprofunda com constância, não pressa", "Família": "os laços familiares se fortalecem com o tempo e paciência", "Saúde": "o corpo pede cuidado contínuo, não soluções rápidas", "Justiça": "o desfecho será lento, mas construído sobre base sólida", "Área Profissional": "o crescimento profissional vem de esforço constante, não de atalhos", "Financeiro": "a prosperidade se constrói aos poucos, com paciência e constância" },
  6: { "Amor": "uma dúvida no relacionamento tende a se dissipar em breve", "Espiritualidade": "um momento de confusão espiritual vai clarear com calma", "Família": "um mal-entendido em casa deve se resolver logo", "Saúde": "um incômodo passageiro não deve se tornar motivo de alarme", "Justiça": "uma situação nebulosa tende a ficar mais clara em breve", "Área Profissional": "uma indecisão no trabalho vai se resolver com o tempo", "Financeiro": "uma dúvida financeira vai se esclarecer nos próximos dias" },
  7: { "Amor": "cuidado com desvios ou terceiros que possam abalar a confiança", "Espiritualidade": "fique atento a influências que desviam do seu caminho de fé", "Família": "cautela com fofocas ou intrigas dentro do ambiente familiar", "Saúde": "preste atenção a sintomas que possam estar sendo ignorados", "Justiça": "desconfie de armadilhas ou informações que não batem com a verdade", "Área Profissional": "cuidado com concorrência desleal ou promessas vazias no trabalho", "Financeiro": "desconfie de negócios ou promessas financeiras boas demais para ser verdade" },
  8: { "Amor": "um ciclo no relacionamento está se encerrando para dar lugar a algo novo", "Espiritualidade": "é hora de encerrar práticas ou crenças que já não servem mais", "Família": "um assunto antigo em família finalmente chega ao fim", "Saúde": "um problema de saúde antigo está perto de ser superado", "Justiça": "um processo demorado está próximo do seu desfecho final", "Área Profissional": "uma fase profissional se encerra, abrindo espaço para recomeço", "Financeiro": "uma dívida ou pendência financeira está perto de ser encerrada" },
  9: { "Amor": "um gesto de carinho ou convite especial está a caminho", "Espiritualidade": "uma bênção inesperada chega como presente para sua fé", "Família": "uma comemoração ou boa notícia deve alegrar a família em breve", "Saúde": "uma sensação de bem-estar e alívio se aproxima", "Justiça": "uma resposta favorável pode chegar como boa surpresa", "Área Profissional": "um reconhecimento ou convite profissional está a caminho", "Financeiro": "um ganho inesperado ou presente financeiro pode surgir" },
  10: { "Amor": "uma decisão importante sobre o relacionamento não pode mais ser adiada", "Espiritualidade": "é hora de cortar hábitos que afastam você da sua fé", "Família": "uma conversa direta e definitiva se faz necessária em casa", "Saúde": "uma mudança brusca de hábito pode ser necessária agora", "Justiça": "uma decisão rápida e definitiva está prestes a acontecer", "Área Profissional": "um corte ou mudança brusca no trabalho está próximo", "Financeiro": "um gasto precisa ser cortado imediatamente para evitar prejuízo maior" },
  11: { "Amor": "uma discussão recorrente no relacionamento precisa ser resolvida de vez", "Espiritualidade": "um padrão espiritual repetitivo pede ruptura consciente", "Família": "uma briga recorrente em casa merece ser encarada com seriedade", "Saúde": "um sintoma que insiste em voltar merece atenção mais séria", "Justiça": "um conflito repetitivo tende a se arrastar se não for resolvido", "Área Profissional": "um atrito recorrente no trabalho pede solução definitiva", "Financeiro": "um gasto recorrente está pesando mais do que parece" },
  12: { "Amor": "conversas e trocas de mensagens vão esclarecer sentimentos", "Espiritualidade": "preste atenção às mensagens sutis que chegam até você", "Família": "muita conversa em casa pode gerar agitação, mas também clareza", "Saúde": "pequenos incômodos passageiros tendem a se resolver logo", "Justiça": "muitas informações estão circulando; separe o que é fato do boato", "Área Profissional": "conversas de corredor podem trazer informações úteis ao trabalho", "Financeiro": "fique atento a rumores antes de tomar decisões financeiras" },
  13: { "Amor": "um começo doce e sincero está surgindo no relacionamento", "Espiritualidade": "um novo aprendizado espiritual está apenas começando", "Família": "uma novidade familiar, talvez uma criança ou início de fase, se aproxima", "Saúde": "um novo cuidado ou tratamento está no início do caminho", "Justiça": "um processo ainda está no começo, sem desfecho imediato", "Área Profissional": "um projeto novo e promissor está apenas começando", "Financeiro": "uma nova fonte de renda pode estar no início" },
  14: { "Amor": "nem tudo é o que parece; observe com atenção antes de confiar", "Espiritualidade": "desconfie de conselhos espirituais que não soam sinceros", "Família": "alguém pode não estar sendo totalmente sincero em casa", "Saúde": "um diagnóstico ou sintoma pode precisar de uma segunda opinião", "Justiça": "fique atento a detalhes escondidos em documentos ou acordos", "Área Profissional": "cuidado com promessas de trabalho que parecem boas demais", "Financeiro": "desconfie de propostas financeiras pouco claras antes de aceitar" },
  15: { "Amor": "alguém forte e protetor exerce influência sobre esse relacionamento", "Espiritualidade": "uma proteção espiritual forte está ao seu redor agora", "Família": "uma figura forte da família exerce influência importante nesse momento", "Saúde": "sua força interior é maior do que você imagina agora", "Justiça": "uma pessoa influente pode interferir no rumo dessa questão", "Área Profissional": "uma figura de autoridade no trabalho pode abrir ou fechar portas", "Financeiro": "uma reserva ou apoio financeiro forte traz mais segurança" },
  16: { "Amor": "um sentimento de esperança ilumina o caminho do relacionamento", "Espiritualidade": "clareza espiritual chega para orientar seus próximos passos", "Família": "um momento de esperança renova o clima dentro de casa", "Saúde": "uma luz de melhora aparece no horizonte da sua saúde", "Justiça": "um sinal de esperança aponta para um desfecho favorável", "Área Profissional": "uma direção clara surge para orientar sua carreira", "Financeiro": "um caminho mais claro se abre para sua estabilidade financeira" },
  17: { "Amor": "uma mudança significativa está prestes a transformar o relacionamento", "Espiritualidade": "uma transformação espiritual profunda já está em curso", "Família": "uma mudança importante está a caminho da vida familiar", "Saúde": "uma virada positiva na saúde está se aproximando", "Justiça": "uma mudança no andamento do processo está próxima", "Área Profissional": "uma virada de carreira está prestes a acontecer", "Financeiro": "uma mudança na situação financeira está a caminho" },
  18: { "Amor": "um vínculo leal e verdadeiro sustenta esse relacionamento", "Espiritualidade": "conte com o apoio de guias e protetores nesse momento", "Família": "um membro leal da família é seu maior apoio agora", "Saúde": "contar com apoio de quem confia ajuda na recuperação", "Justiça": "uma pessoa de confiança pode ajudar a resolver essa questão", "Área Profissional": "uma parceria leal no trabalho traz segurança e apoio", "Financeiro": "um apoio de confiança pode ajudar numa decisão financeira" },
  19: { "Amor": "um momento de distanciamento pode ser necessário para clarear sentimentos", "Espiritualidade": "um período de recolhimento fortalece sua conexão espiritual", "Família": "uma questão formal ou burocrática pode envolver a família agora", "Saúde": "pode ser necessário um tempo de isolamento para o corpo se recuperar", "Justiça": "uma instituição ou órgão oficial tem papel central nessa questão", "Área Profissional": "uma estrutura sólida, ou empresa grande, ganha destaque na sua carreira", "Financeiro": "uma instituição financeira ou banco tem papel importante agora" },
  20: { "Amor": "encontros sociais podem trazer novas possibilidades para o coração", "Espiritualidade": "participar de um grupo ou comunidade fortalece sua fé", "Família": "reuniões e encontros trazem alegria para o convívio familiar", "Saúde": "estar entre pessoas queridas ajuda no seu bem-estar emocional", "Justiça": "uma questão pública ou coletiva está envolvida nesse assunto", "Área Profissional": "networking e contatos vão abrir portas importantes agora", "Financeiro": "uma oportunidade em grupo ou sociedade pode trazer ganhos" },
  21: { "Amor": "um obstáculo real precisa ser enfrentado para o relacionamento avançar", "Espiritualidade": "um desafio espiritual pede persistência e fé para ser superado", "Família": "uma dificuldade familiar exige paciência e esforço para ser superada", "Saúde": "um desafio de saúde pede persistência no tratamento", "Justiça": "um obstáculo burocrático pode atrasar o desfecho esperado", "Área Profissional": "um desafio no trabalho exige esforço extra para ser superado", "Financeiro": "uma dificuldade financeira pede organização para ser contornada" },
  22: { "Amor": "uma escolha importante sobre o relacionamento está à sua frente", "Espiritualidade": "mais de um caminho de fé se abre; escolha com o coração", "Família": "uma decisão familiar importante precisa ser tomada em breve", "Saúde": "escolher o tratamento certo agora fará diferença no resultado", "Justiça": "mais de um caminho legal se abre; escolha com cautela", "Área Profissional": "uma escolha de carreira importante está diante de você", "Financeiro": "uma decisão financeira importante pede reflexão antes de agir" },
  23: { "Amor": "pequenos desgastes no relacionamento merecem atenção antes que cresçam", "Espiritualidade": "pequenas negligências espirituais vêm corroendo sua paz aos poucos", "Família": "pequenos atritos domésticos, se ignorados, podem se acumular", "Saúde": "pequenos descuidos com a saúde vêm cobrando um preço", "Justiça": "pequenos detalhes desfavoráveis podem se acumular contra você", "Área Profissional": "pequenos descuidos no trabalho podem gerar desgaste maior", "Financeiro": "pequenos gastos não percebidos estão corroendo suas finanças" },
  24: { "Amor": "o sentimento verdadeiro está presente e pede espaço para se mostrar", "Espiritualidade": "o amor incondicional é a base da sua fé agora", "Família": "o afeto sincero é o que sustenta os laços de casa", "Saúde": "cuidar do coração, literal e emocionalmente, é prioridade agora", "Justiça": "uma questão de cunho pessoal ou afetivo está envolvida aqui", "Área Profissional": "fazer o que realmente gosta traz mais resultado no trabalho", "Financeiro": "gastar com o que realmente importa traz mais satisfação agora" },
  25: { "Amor": "um compromisso sério está se firmando no relacionamento", "Espiritualidade": "um voto ou promessa espiritual está sendo selado", "Família": "um acordo ou promessa entre familiares ganha força agora", "Saúde": "um compromisso com sua própria saúde precisa ser firmado", "Justiça": "um contrato ou acordo formal está prestes a se concretizar", "Área Profissional": "uma parceria ou contrato profissional está se firmando", "Financeiro": "um compromisso financeiro, como um contrato, está em pauta" },
  26: { "Amor": "um sentimento ainda não revelado pede espaço para se mostrar", "Espiritualidade": "um conhecimento espiritual importante ainda está por vir", "Família": "um segredo familiar pode vir à tona em breve", "Saúde": "um exame ou informação médica ainda não revelada é importante", "Justiça": "um detalhe ainda oculto pode mudar o rumo do processo", "Área Profissional": "um conhecimento novo vai abrir portas na carreira", "Financeiro": "uma informação financeira ainda não revelada merece atenção" },
  27: { "Amor": "uma mensagem importante sobre o relacionamento está a caminho", "Espiritualidade": "um sinal ou mensagem espiritual está próximo de chegar", "Família": "uma notícia familiar importante deve chegar em breve", "Saúde": "um resultado ou informação médica está a caminho", "Justiça": "uma notificação ou comunicado oficial deve chegar em breve", "Área Profissional": "uma proposta ou retorno profissional está a caminho", "Financeiro": "uma notícia financeira importante deve chegar em breve" },
  28: { "Amor": "uma figura masculina tem papel central nesse momento do coração", "Espiritualidade": "uma figura masculina de referência guia sua fé agora", "Família": "uma figura masculina da família ganha destaque nesse momento", "Saúde": "atenção especial à saúde de uma figura masculina próxima", "Justiça": "uma figura masculina tem papel relevante nessa questão", "Área Profissional": "uma figura masculina de autoridade influencia sua carreira agora", "Financeiro": "uma figura masculina está envolvida nessa questão financeira" },
  29: { "Amor": "uma figura feminina tem papel central nesse momento do coração", "Espiritualidade": "uma figura feminina de referência guia sua fé agora", "Família": "uma figura feminina da família ganha destaque nesse momento", "Saúde": "atenção especial à saúde de uma figura feminina próxima", "Justiça": "uma figura feminina tem papel relevante nessa questão", "Área Profissional": "uma figura feminina de autoridade influencia sua carreira agora", "Financeiro": "uma figura feminina está envolvida nessa questão financeira" },
  30: { "Amor": "uma fase de paz e maturidade favorece o relacionamento", "Espiritualidade": "uma fase de paz espiritual profunda está se instalando", "Família": "a harmonia familiar se fortalece com maturidade e diálogo", "Saúde": "um estado de calma favorece diretamente sua recuperação", "Justiça": "um desfecho pacífico e maduro tende a prevalecer", "Área Profissional": "um ambiente de trabalho mais harmonioso está se formando", "Financeiro": "uma fase de estabilidade e equilíbrio financeiro se aproxima" },
  31: { "Amor": "um momento de vitória e alegria ilumina o relacionamento", "Espiritualidade": "sua fé está em um momento forte e vitorioso", "Família": "alegria e vitalidade tomam conta do ambiente familiar", "Saúde": "vitalidade e disposição retornam com força total", "Justiça": "um desfecho vitorioso e favorável se aproxima", "Área Profissional": "reconhecimento e sucesso profissional estão a caminho", "Financeiro": "uma fase de prosperidade e ganho financeiro se confirma" },
  32: { "Amor": "sua intuição está certa sobre os sentimentos envolvidos aqui", "Espiritualidade": "sua intuição espiritual está mais aguçada do que nunca", "Família": "emoções antigas dentro de casa pedem reconhecimento e cuidado", "Saúde": "preste atenção ao lado emocional que afeta seu corpo", "Justiça": "a intuição pode ajudar a enxergar o que os fatos não mostram", "Área Profissional": "confie na sua percepção sobre pessoas e situações no trabalho", "Financeiro": "sua intuição pode ajudar a perceber um risco financeiro a evitar" },
  33: { "Amor": "a solução para o impasse no relacionamento está mais perto do que parece", "Espiritualidade": "uma virada espiritual decisiva está prestes a acontecer", "Família": "a solução para uma questão familiar está próxima de aparecer", "Saúde": "a solução ou tratamento certo está próximo de ser encontrado", "Justiça": "a virada decisiva desse processo está próxima", "Área Profissional": "a solução para um impasse profissional está próxima", "Financeiro": "a solução para destravar sua situação financeira está próxima" },
  34: { "Amor": "o relacionamento vive um momento de fartura emocional e generosidade", "Espiritualidade": "uma sensação de abundância espiritual está presente agora", "Família": "um momento de fartura e bem-estar chega para a família", "Saúde": "sinais de vitalidade e recuperação plena estão presentes", "Justiça": "um resultado favorável e generoso tende a se confirmar", "Área Profissional": "uma fase de fartura profissional e reconhecimento se aproxima", "Financeiro": "uma fase de prosperidade e ganhos financeiros está confirmada" },
  35: { "Amor": "o relacionamento ganha mais estabilidade e segurança neste momento", "Espiritualidade": "sua fé se firma como uma base estável e segura", "Família": "a estrutura familiar se mostra mais firme e segura agora", "Saúde": "uma base estável de cuidados traz mais segurança à recuperação", "Justiça": "uma decisão estável e definitiva tende a se firmar", "Área Profissional": "estabilidade no trabalho traz mais segurança para os próximos passos", "Financeiro": "uma base financeira mais firme e segura se estabelece agora" },
  36: { "Amor": "um momento de provação no relacionamento pede fé e paciência", "Espiritualidade": "a fé é o que sustenta você nessa fase mais difícil", "Família": "um fardo familiar pede resignação e força para ser superado", "Saúde": "um momento difícil de saúde pede fé e cuidado redobrado", "Justiça": "uma provação nesse processo pede paciência e resignação", "Área Profissional": "um momento difícil no trabalho pede perseverança e fé", "Financeiro": "um momento financeiro difícil pede paciência e fé para ser superado" },
};

// ---------------------------------------------------------------------------
// LEITURA UNIFICADA DAS 3 CARTAS
// As três cartas viram UM texto só: sem citar "a carta tal representa...".
// O tom de cada carta (favorável, neutra ou de atenção) define como as ideias
// se conectam, e o conjunto das três define o fechamento de cada tema.
// ---------------------------------------------------------------------------

const cartasFavoraveis = new Set([1, 2, 4, 5, 9, 13, 15, 16, 18, 20, 24, 25, 30, 31, 33, 34, 35]);
const cartasDeAtencao = new Set([6, 7, 8, 10, 11, 14, 21, 23, 36]);

function polaridade(id: number): number {
  if (cartasFavoraveis.has(id)) return 1;
  if (cartasDeAtencao.has(id)) return -1;
  return 0;
}

const campoDoTema: Record<Tema, string> = {
  "Amor": "o amor",
  "Espiritualidade": "a espiritualidade",
  "Família": "a família",
  "Saúde": "a saúde",
  "Justiça": "a justiça",
  "Área Profissional": "a vida profissional",
  "Financeiro": "a vida financeira",
};

function maiuscula(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function escolher(opcoes: string[], semente: number): string {
  return opcoes[Math.abs(semente) % opcoes.length];
}

// Conector da 2ª ideia (depende do tom da 1ª e da 2ª cartas)
function conectorSegunda(pA: number, pB: number, semente: number): string {
  if (pB < 0) {
    return escolher(["Mas há um ponto a considerar: ", "Só que existe uma sombra no caminho: ", "Porém, vale cuidado: "], semente);
  }
  if (pB > 0 && pA > 0) {
    return escolher(["Além disso, ", "E não para por aí: ", "Somando-se a isso, "], semente);
  }
  if (pB > 0) {
    return escolher(["Por outro lado, ", "Em contrapartida, ", "Ao mesmo tempo, "], semente);
  }
  return escolher(["Somando a isso, ", "Ao mesmo tempo, ", "Em paralelo, "], semente);
}

// Conector da 3ª ideia (desfecho da tiragem)
function conectorTerceira(pC: number, semente: number): string {
  if (pC < 0) {
    return escolher(["E, para fechar, vale atenção: ", "No desfecho, porém, há um cuidado: ", "Por fim, fique de olho: "], semente);
  }
  if (pC > 0) {
    return escolher(["E, no desfecho, ", "Por fim, ", "E o fechamento é favorável: "], semente);
  }
  return escolher(["Por fim, ", "E, fechando o quadro, ", "Para completar, "], semente);
}

type Tom = "favoravel" | "inclinaFavoravel" | "equilibrado" | "inclinaAtencao" | "atencao";

function tomDoConjunto(escolhidas: CartaCigana[]): Tom {
  const soma = escolhidas.reduce((acc, c) => acc + polaridade(c.id), 0);
  if (soma >= 2) return "favoravel";
  if (soma === 1) return "inclinaFavoravel";
  if (soma === 0) return "equilibrado";
  if (soma === -1) return "inclinaAtencao";
  return "atencao";
}

function fechamentoDoTema(tema: Tema, tom: Tom): string {
  const campo = campoDoTema[tema];
  switch (tom) {
    case "favoravel":
      return `Para ${campo}, o recado final é de confiança: vale aproveitar o que se abre agora.`;
    case "inclinaFavoravel":
      return `Para ${campo}, o saldo é positivo, desde que você mantenha os olhos abertos aos detalhes.`;
    case "equilibrado":
      return `Para ${campo}, o resultado depende das suas escolhas: há luz e atenção caminhando juntas.`;
    case "inclinaAtencao":
      return `Para ${campo}, o momento pede calma e cuidado, mas o caminho continua aberto.`;
    default:
      return `Para ${campo}, a leitura pede cautela e paciência; atravessado esse momento, o cenário tende a se acalmar.`;
  }
}

function introducaoDoTom(tom: Tom): string {
  switch (tom) {
    case "favoravel":
      return "O conjunto é de abertura: há apoio, movimento e boas notícias se formando, e o que parecia parado começa a andar.";
    case "inclinaFavoravel":
      return "O conjunto aponta para um caminho favorável, com um ou outro ponto que pede cuidado para que tudo flua melhor.";
    case "equilibrado":
      return "O conjunto mostra um momento de equilíbrio: há luz e há pontos de atenção, e são as suas escolhas de agora que definem o rumo.";
    case "inclinaAtencao":
      return "O conjunto pede atenção e paciência: há desafios no caminho, mas nada que a calma e o discernimento não consigam contornar.";
    default:
      return "O conjunto fala de um momento de prova: o ritmo pede cautela, mas essas cartas avisam para que você se prepare, e não para que você tema.";
  }
}

// Texto único de um tema, costurando as 3 cartas na ordem em que saíram
function textoDoTema(tema: Tema, escolhidas: CartaCigana[]): string {
  const [a, b, c] = escolhidas;
  const semente = a.id * 7 + b.id * 3 + c.id + temas.indexOf(tema);

  const ideiaA = angulosPorCarta[a.id][tema];
  const ideiaB = angulosPorCarta[b.id][tema];
  const ideiaC = angulosPorCarta[c.id][tema];

  const primeira = `${maiuscula(ideiaA)}.`;
  const segunda = `${conectorSegunda(polaridade(a.id), polaridade(b.id), semente)}${ideiaB}.`;
  const terceira = `${conectorTerceira(polaridade(c.id), semente + 1)}${ideiaC}.`;
  const fechamento = fechamentoDoTema(tema, tomDoConjunto(escolhidas));

  return `${primeira} ${segunda} ${terceira} ${fechamento}`;
}

// Resultado final da leitura
export interface LeituraResultado {
  mostrarIntroducao: boolean;
  introducao: string;
  blocosPorTema: { tema: Tema; texto: string }[];
}

export function montarLeitura(escolhidas: CartaCigana[], temasEscolhidos: Tema[], resumoGeral: boolean): LeituraResultado {
  const [a, b, c] = escolhidas;
  const tom = tomDoConjunto(escolhidas);
  const introducao = `${a.nome}, ${b.nome} e ${c.nome} formam uma leitura única: as três cartas se completam e contam uma só história. ${introducaoDoTom(tom)}`;

  if (resumoGeral) {
    // Resumo Geral: introdução + todas as áreas
    return {
      mostrarIntroducao: true,
      introducao,
      blocosPorTema: temas.map((tema) => ({ tema, texto: textoDoTema(tema, escolhidas) })),
    };
  }

  // Tema(s) específico(s): só a(s) área(s) escolhida(s)
  return {
    mostrarIntroducao: false,
    introducao,
    blocosPorTema: temasEscolhidos.map((tema) => ({ tema, texto: textoDoTema(tema, escolhidas) })),
  };
}
