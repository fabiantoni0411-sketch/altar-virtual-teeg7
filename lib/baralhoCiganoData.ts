// Dados do Baralho Cigano — nomes, arquivos de imagem e significados de cada carta.
// Se quiser reescrever algum significado, é só editar o texto aqui.

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

export const fechamentoPorTema: Record<Tema, string> = {
  "Amor": "No campo do amor, esse recado pede que você olhe com sinceridade para o que sente e para o que recebe de volta — sem se enganar, mas também sem fechar o coração antes da hora.",
  "Espiritualidade": "No campo espiritual, essa mensagem é um convite para fortalecer sua fé, manter a proteção em dia e escutar com mais atenção os sinais que já vêm chegando.",
  "Família": "No campo da família, o recado fala de laços que precisam de cuidado, conversas que estão pendentes e da importância de manter a casa em harmonia.",
  "Saúde": "No campo da saúde, essa mensagem reforça a importância de cuidar do corpo com a mesma atenção que se dedica às questões externas — descansar também é parte do caminho.",
  "Justiça": "No campo da justiça, a leitura indica que a verdade tende a se impor, mas pede paciência com os prazos e cautela redobrada com documentos e palavras.",
  "Área Profissional": "No campo profissional, o recado mostra que esforço e paciência vão se conectar em breve com uma virada — não é hora de desistir, mas de ajustar a rota.",
  "Financeiro": "No campo financeiro, a leitura pede organização e cautela antes de qualquer gasto ou decisão maior — é um momento de cuidar do que já foi conquistado e evitar riscos desnecessários, mas com boas perspectivas de prosperidade para quem age com paciência.",
};

// Monta o texto final da leitura a partir das 3 cartas sorteadas e dos temas escolhidos
export interface LeituraResultado {
  mostrarIntroducao: boolean;
  introducao: string;
  blocosPorTema: { tema: Tema; texto: string }[];
}

export function montarLeitura(escolhidas: CartaCigana[], temasEscolhidos: Tema[], resumoGeral: boolean): LeituraResultado {
  const [a, b, c] = escolhidas;
  let introducao = `Abrindo com ${a.nome}, ${a.significado}. `;
  introducao += `Em seguida, ${b.nome} entra na leitura e ${b.significado}. `;
  introducao += `E a tiragem se fecha com ${c.nome}, que ${c.significado}. `;
  introducao += `Lidas em sequência, essas três cartas mostram um fio condutor: o que vem de ${a.nome.toLowerCase()} encontra eco em ${b.nome.toLowerCase()} e ganha um desfecho através de ${c.nome.toLowerCase()}, formando um recado só, não três avisos soltos.`;

  if (resumoGeral) {
    // Resumo Geral: mostra a introdução das cartas + TODAS as áreas, separadas
    return {
      mostrarIntroducao: true,
      introducao,
      blocosPorTema: temas.map((tema) => ({ tema, texto: fechamentoPorTema[tema] })),
    };
  }

  // Tema(s) específico(s): sem a introdução geral, só a(s) área(s) escolhida(s)
  return {
    mostrarIntroducao: false,
    introducao,
    blocosPorTema: temasEscolhidos.map((tema) => ({ tema, texto: fechamentoPorTema[tema] })),
  };
}
