export type ColorKey = 'red' | 'yellow' | 'blue' | 'green';

export interface Option {
  color: ColorKey;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  prompt: string;
  options: Option[];
}

export interface Program {
  id: number;
  code: string;
  title: string;
  description: string;
  bookSequence: string;
  questions: Question[];
}

export const BOOK_NAME = 'Pense Bem - O Rei Leão';

export const COLOR_BUTTONS: Record<
  ColorKey,
  {
    letter: 'A' | 'B' | 'C' | 'D';
    hex: string;
    gradient: [string, string];
  }
> = {
  red: {
    letter: 'A',
    hex: '#c0392b',
    gradient: ['#f85032', '#e73827'],
  },
  yellow: {
    letter: 'B',
    hex: '#f1c40f',
    gradient: ['#fdd819', '#f7b733'],
  },
  blue: {
    letter: 'C',
    hex: '#2980b9',
    gradient: ['#4facfe', '#00c6fb'],
  },
  green: {
    letter: 'D',
    hex: '#27ae60',
    gradient: ['#00b09b', '#96c93d'],
  },
};

const addIndicesToProgram = (program: Program): Program => ({
  ...program,
  questions: program.questions.map(question => ({
    ...question,
    prompt: question.prompt.startsWith(`${question.id}. `)
      ? question.prompt
      : `${question.id}. ${question.prompt}`,
  })),
});

const program1: Program = {
  id: 1,
  code: '121',
  title: 'Programa1',
  description:
    'neste programa iremos passar pelos seguintes modelos: África misteriosa, A paisagem da savana, Os animais de Serengeti, Habitantes exóticos, De quem é esta pele?',
  bookSequence: 'LIVRO • 1 • 2 • 1 • ENTER',
  questions: [
    {
      id: 1,
      prompt: 'A África é um vasto ___.',
      options: [
        { color: 'red', text: 'estado', isCorrect: false },
        { color: 'yellow', text: 'país', isCorrect: false },
        { color: 'blue', text: 'continente', isCorrect: true },
        { color: 'green', text: 'cidade', isCorrect: false },
      ],
    },
    {
      id: 2,
      prompt: 'Lá viveram os primeiros ___, há mais de 3 milhões de anos.',
      options: [
        { color: 'red', text: 'brasileiros', isCorrect: false },
        { color: 'yellow', text: 'homens', isCorrect: true },
        { color: 'blue', text: 'astronautas', isCorrect: false },
        { color: 'green', text: 'extraterrestres', isCorrect: false },
      ],
    },
    {
      id: 3,
      prompt:
        'Na África vivem muitos povos diferentes, cada um com sua ___ e seus costumes.',
      options: [
        { color: 'red', text: 'orelha', isCorrect: false },
        { color: 'yellow', text: 'língua', isCorrect: true },
        { color: 'blue', text: 'mão', isCorrect: false },
        { color: 'green', text: 'perna', isCorrect: false },
      ],
    },
    {
      id: 4,
      prompt:
        'A história de O Rei Leão se passa na Tanzânia, onde fica o ponto mais alto da África: o monte ___, com quase 6 mil metros.',
      options: [
        { color: 'red', text: 'Alpes', isCorrect: false },
        { color: 'yellow', text: 'Everest', isCorrect: false },
        { color: 'blue', text: 'Kilimanjaro', isCorrect: true },
        { color: 'green', text: 'Sinal', isCorrect: false },
      ],
    },
    {
      id: 5,
      prompt: 'O imponente perfil desse monte está sempre coberto de ___.',
      options: [
        { color: 'red', text: 'catchup', isCorrect: false },
        { color: 'yellow', text: 'chocolate', isCorrect: false },
        { color: 'blue', text: 'flores', isCorrect: false },
        { color: 'green', text: 'neve', isCorrect: true },
      ],
    },
    {
      id: 6,
      prompt:
        'Aos pés do Kilimanjaro estende-se uma enorme planície chamada ___.',
      options: [
        { color: 'red', text: 'Floresta Amazônica', isCorrect: false },
        { color: 'yellow', text: 'Chapada dos Guimarães', isCorrect: false },
        { color: 'blue', text: 'Serra do Mar', isCorrect: false },
        {
          color: 'green',
          text: 'Parque Nacional de Serengeti',
          isCorrect: true,
        },
      ],
    },
    {
      id: 7,
      prompt:
        'O Parque Nacional de Serengeti reúne uma das maiores concentrações de ___.',
      options: [
        { color: 'red', text: 'automóveis', isCorrect: false },
        { color: 'yellow', text: 'animais', isCorrect: true },
        { color: 'blue', text: 'shopping centers', isCorrect: false },
        { color: 'green', text: 'pessoas', isCorrect: false },
      ],
    },
    {
      id: 8,
      prompt:
        'Olhe bem a figura e assinale as palavras que dão qualidade.',
      options: [
        { color: 'red', text: 'BONITO', isCorrect: true },
        { color: 'yellow', text: 'DIA', isCorrect: false },
        { color: 'blue', text: 'DE', isCorrect: false },
        { color: 'green', text: 'VERÃO', isCorrect: false },
      ],
    },
    {
      id: 9,
      prompt:
        'Olhe bem a figura e assinale as palavras que dão qualidade.',
      options: [
        { color: 'red', text: 'AZUL', isCorrect: true },
        { color: 'yellow', text: 'É', isCorrect: false },
        { color: 'blue', text: 'O', isCorrect: false },
        { color: 'green', text: 'CÉU', isCorrect: false },
      ],
    },
    {
      id: 10,
      prompt:
        'Olhe bem a figura e assinale as palavras que dão qualidade.',
      options: [
        { color: 'red', text: 'O', isCorrect: false },
        { color: 'yellow', text: 'CAPIM', isCorrect: false },
        { color: 'blue', text: 'É', isCorrect: false },
        { color: 'green', text: 'ALTO', isCorrect: true },
      ],
    },
    {
      id: 11,
      prompt:
        'Olhe bem a figura e assinale as palavras que dão qualidade.',
      options: [
        { color: 'red', text: 'VEJO', isCorrect: false },
        { color: 'yellow', text: 'UM', isCorrect: false },
        { color: 'blue', text: 'PEQUENO', isCorrect: true },
        { color: 'green', text: 'LEÃO', isCorrect: false },
      ],
    },
    {
      id: 12,
      prompt:
        'Olhe bem a figura e assinale as palavras que dão qualidade.',
      options: [
        { color: 'red', text: 'OLHOS', isCorrect: false },
        { color: 'yellow', text: 'GRANDES', isCorrect: true },
        { color: 'blue', text: 'ELE', isCorrect: false },
        { color: 'green', text: 'TEM', isCorrect: false },
      ],
    },
    {
      id: 13,
      prompt:
        'Olhe bem a figura e assinale as palavras que dão qualidade.',
      options: [
        { color: 'red', text: 'LEÃOZINHO', isCorrect: false },
        { color: 'yellow', text: 'TEM', isCorrect: false },
        { color: 'blue', text: 'PÊLO', isCorrect: false },
        { color: 'green', text: 'MACIO', isCorrect: true },
      ],
    },
    {
      id: 14,
      prompt: 'Simba é um filhote de ___.',
      options: [
        { color: 'red', text: 'leão', isCorrect: true },
        { color: 'yellow', text: 'hipopótamo', isCorrect: false },
        { color: 'blue', text: 'tigre', isCorrect: false },
        { color: 'green', text: 'rinoceronte', isCorrect: false },
      ],
    },
    {
      id: 15,
      prompt:
        'Além dos leões, vivem na planície outros animais, como as ___ de pêlo listado.',
      options: [
        { color: 'red', text: 'zebras', isCorrect: true },
        { color: 'yellow', text: 'girafas', isCorrect: false },
        { color: 'blue', text: 'onças', isCorrect: false },
        { color: 'green', text: 'raposas', isCorrect: false },
      ],
    },
    {
      id: 16,
      prompt:
        'Há também as gazelas, que correm muito e dão ___ graciosas.',
      options: [
        { color: 'red', text: 'saltos', isCorrect: true },
        { color: 'yellow', text: 'mergulhos', isCorrect: false },
        { color: 'blue', text: 'cambalhotas', isCorrect: false },
        { color: 'green', text: 'gritos', isCorrect: false },
      ],
    },
    {
      id: 17,
      prompt:
        'Os animais que comem capim, frutos, raízes e sementes são ___.',
      options: [
        { color: 'red', text: 'vegetais', isCorrect: false },
        { color: 'yellow', text: 'frutíferos', isCorrect: false },
        { color: 'blue', text: 'herbívoros', isCorrect: true },
        { color: 'green', text: 'horticultores', isCorrect: false },
      ],
    },
    {
      id: 18,
      prompt:
        'O leão, o leopardo e a hiena gostam de comer carne. Eles são ___.',
      options: [
        { color: 'red', text: 'carnívoros', isCorrect: true },
        { color: 'yellow', text: 'palmípedes', isCorrect: false },
        { color: 'blue', text: 'mustelídeos', isCorrect: false },
        { color: 'green', text: 'insetívoros', isCorrect: false },
      ],
    },
    {
      id: 19,
      prompt:
        'Os elefantes são os ___ animais da planície de Serengeti.',
      options: [
        { color: 'red', text: 'alegres', isCorrect: false },
        { color: 'yellow', text: 'distantes', isCorrect: false },
        { color: 'blue', text: 'maiores', isCorrect: true },
        { color: 'green', text: 'menores', isCorrect: false },
      ],
    },
    {
      id: 20,
      prompt: 'Por ali passam também os javalis, que vivem nas ___.',
      options: [
        { color: 'red', text: 'ninhos', isCorrect: false },
        { color: 'yellow', text: 'casas', isCorrect: false },
        { color: 'blue', text: 'bandos', isCorrect: true },
        { color: 'green', text: 'árvores', isCorrect: false },
      ],
    },
    {
      id: 21,
      prompt:
        'Entre os pássaros do Serengeti destacam-se as ___ avestruzes.',
      options: [
        { color: 'red', text: 'peludas', isCorrect: false },
        { color: 'yellow', text: 'velozes', isCorrect: false },
        { color: 'blue', text: 'ferozes', isCorrect: true },
        { color: 'green', text: 'falantes', isCorrect: false },
      ],
    },
    {
      id: 22,
      prompt: 'O corpo do aardvark lembra o de um ___.',
      options: [
        { color: 'red', text: 'tartaruga', isCorrect: false },
        { color: 'yellow', text: 'zebra', isCorrect: false },
        { color: 'blue', text: 'girafa', isCorrect: false },
        { color: 'green', text: 'canguru', isCorrect: true },
      ],
    },
    {
      id: 23,
      prompt: 'As orelhas parecem com as do ___.',
      options: [
        { color: 'red', text: 'burro', isCorrect: true },
        { color: 'yellow', text: 'elefante', isCorrect: false },
        { color: 'blue', text: 'foca', isCorrect: false },
        { color: 'green', text: 'raposa', isCorrect: false },
      ],
    },
    {
      id: 24,
      prompt: 'O longo focinho é semelhante ao do ___.',
      options: [
        { color: 'red', text: 'tucano', isCorrect: false },
        { color: 'yellow', text: 'porco', isCorrect: true },
        { color: 'blue', text: 'hipopótamo', isCorrect: false },
        { color: 'green', text: 'besouro', isCorrect: false },
      ],
    },
    {
      id: 25,
      prompt: 'Ele tem uma língua comprida semelhante à do ___.',
      options: [
        { color: 'red', text: 'tamanduá', isCorrect: true },
        { color: 'yellow', text: 'tubarão', isCorrect: false },
        { color: 'blue', text: 'gato', isCorrect: false },
        { color: 'green', text: 'rato', isCorrect: false },
      ],
    },
    {
      id: 26,
      prompt: 'O aardvark se alimenta de ___.',
      options: [
        { color: 'red', text: 'borboletas e libélulas', isCorrect: false },
        { color: 'yellow', text: 'formigas e cupins', isCorrect: true },
        { color: 'blue', text: 'camarões e lulas', isCorrect: false },
        {
          color: 'green',
          text: 'empadinhas e pastéis',
          isCorrect: false,
        },
      ],
    },
    {
      id: 27,
      prompt:
        'De quem é esta pele? (A pele tem manchas grandes e irregulares marrons sobre fundo bege)',
      options: [
        { color: 'red', text: 'panda', isCorrect: false },
        { color: 'yellow', text: 'onça', isCorrect: false },
        { color: 'blue', text: 'cascavel', isCorrect: false },
        { color: 'green', text: 'girafa', isCorrect: true },
      ],
    },
    {
      id: 28,
      prompt:
        'De quem é esta pele? (A pele tem listras pretas e brancas)',
      options: [
        { color: 'red', text: 'zebra', isCorrect: true },
        { color: 'yellow', text: 'tigre', isCorrect: false },
        { color: 'blue', text: 'jacaré', isCorrect: false },
        { color: 'green', text: 'Coral', isCorrect: false },
      ],
    },
    {
      id: 29,
      prompt:
        'De quem é esta pele? (A pele tem manchas pretas e marrons sobre fundo amarelado)',
      options: [
        { color: 'red', text: 'coala', isCorrect: false },
        { color: 'yellow', text: 'sucuri', isCorrect: false },
        { color: 'blue', text: 'onça', isCorrect: true },
        { color: 'green', text: 'canguru', isCorrect: false },
      ],
    },
    {
      id: 30,
      prompt:
        'De quem é esta pele? (A pele tem listras pretas sobre fundo amarelado)',
      options: [
        { color: 'red', text: 'tigre', isCorrect: true },
        { color: 'yellow', text: 'zebra', isCorrect: false },
        { color: 'blue', text: 'elefante', isCorrect: false },
        { color: 'green', text: 'taturana', isCorrect: false },
      ],
    },
  ],
};

const program2: Program = {
  id: 2,
  code: '122',
  title: 'Programa2',
  description:
    'neste programa iremos passar pelos seguintes modelos: O nascimento de Simba, O velho babuíno, O ambicioso Scar, Animais recordistas',
  bookSequence: 'LIVRO • 1 • 2 • 2 • ENTER',
  questions: [
    {
      id: 31,
      prompt: 'O leão é um ser vivo que pertence ao reino ___.',
      options: [
        { color: 'red', text: 'vegetal', isCorrect: false },
        { color: 'yellow', text: 'monárquico', isCorrect: false },
        { color: 'blue', text: 'animal', isCorrect: true },
        { color: 'green', text: 'subreino', isCorrect: false },
      ],
    },
    {
      id: 32,
      prompt: 'Ele é um animal ___.',
      options: [
        { color: 'red', text: 'invertebrado', isCorrect: false },
        { color: 'yellow', text: 'molusco', isCorrect: false },
        { color: 'blue', text: 'vertebrado', isCorrect: true },
        { color: 'green', text: 'mamífero', isCorrect: false },
      ],
    },
    {
      id: 33,
      prompt: 'Pertence à classe dos ___.',
      options: [
        { color: 'red', text: 'alfabetizados', isCorrect: false },
        { color: 'yellow', text: 'mamíferos', isCorrect: true },
        { color: 'blue', text: 'desdentados', isCorrect: false },
        { color: 'green', text: 'insetos', isCorrect: false },
      ],
    },
    {
      id: 34,
      prompt:
        'Como o leão é um conhecido comedor de carne, ele foi agrupado na ordem dos ___.',
      options: [
        { color: 'red', text: 'noturnos', isCorrect: false },
        { color: 'yellow', text: 'laticínios', isCorrect: false },
        { color: 'blue', text: 'frutíferos', isCorrect: false },
        { color: 'green', text: 'carnívoros', isCorrect: true },
      ],
    },
    {
      id: 35,
      prompt: 'O leão faz parte da família dos ___.',
      options: [
        { color: 'red', text: 'farristas', isCorrect: false },
        { color: 'yellow', text: 'felizes', isCorrect: false },
        { color: 'blue', text: 'flintstones', isCorrect: false },
        { color: 'green', text: 'felídeos', isCorrect: true },
      ],
    },
    {
      id: 36,
      prompt:
        'Os cientistas de todo o mundo usam um nome científico para que não haja dúvida. Qual é o nome científico do leão?',
      options: [
        { color: 'red', text: 'Panthera negra', isCorrect: false },
        { color: 'yellow', text: 'Panthera cor-de-rosa', isCorrect: false },
        { color: 'blue', text: 'Homo panthera', isCorrect: false },
        { color: 'green', text: 'Panthera leo', isCorrect: true },
      ],
    },
    {
      id: 37,
      prompt:
        'Os macacos têm os sentidos bem desenvolvidos e são capazes de ___ muitas coisas.',
      options: [
        { color: 'red', text: 'dormir', isCorrect: false },
        { color: 'yellow', text: 'aprender', isCorrect: true },
        { color: 'blue', text: 'pular', isCorrect: false },
        { color: 'green', text: 'subir', isCorrect: false },
      ],
    },
    {
      id: 38,
      prompt: 'Os macacos são também chamados de ___.',
      options: [
        { color: 'red', text: 'facsímiles', isCorrect: false },
        { color: 'yellow', text: 'sírios', isCorrect: false },
        { color: 'blue', text: 'assírios', isCorrect: false },
        { color: 'green', text: 'símios', isCorrect: true },
      ],
    },
    {
      id: 39,
      prompt:
        'Há muitos tipos de macacos. Estes não possuem cauda, e são todos da mesma família. Assinale o nome de cada um deles.',
      options: [
        { color: 'red', text: 'gitão', isCorrect: false },
        { color: 'yellow', text: 'gibão', isCorrect: false },
        { color: 'blue', text: 'simão', isCorrect: false },
        { color: 'green', text: 'mico-preto', isCorrect: true },
      ],
    },
    {
      id: 40,
      prompt:
        'Há muitos tipos de macacos. Estes não possuem cauda, e são todos da mesma família. Assinale o nome de cada um deles.',
      options: [
        { color: 'red', text: 'mico-leão', isCorrect: false },
        { color: 'yellow', text: 'orangotango', isCorrect: false },
        { color: 'blue', text: 'chimpanzé', isCorrect: true },
        { color: 'green', text: 'sagüi', isCorrect: false },
      ],
    },
    {
      id: 41,
      prompt:
        'Há muitos tipos de macacos. Estes não possuem cauda, e são todos da mesma família. Assinale o nome de cada um deles.',
      options: [
        { color: 'red', text: 'gorila', isCorrect: true },
        { color: 'yellow', text: 'maguila', isCorrect: false },
        { color: 'blue', text: 'cara-de-pau', isCorrect: false },
        { color: 'green', text: 'macaco-prego', isCorrect: false },
      ],
    },
    {
      id: 42,
      prompt:
        'Há muitos tipos de macacos. Estes não possuem cauda, e são todos da mesma família. Assinale o nome de cada um deles.',
      options: [
        { color: 'red', text: 'chico-zé', isCorrect: false },
        { color: 'yellow', text: 'chimpanzé', isCorrect: true },
        { color: 'blue', text: 'mico', isCorrect: false },
        { color: 'green', text: 'pangolé', isCorrect: false },
      ],
    },
    {
      id: 43,
      prompt:
        'Graças à luz do sol, as plantas fabricam seu próprio alimento por meio da ___.',
      options: [
        { color: 'red', text: 'raio laser', isCorrect: false },
        { color: 'yellow', text: 'fotografia', isCorrect: false },
        { color: 'blue', text: 'fax', isCorrect: false },
        { color: 'green', text: 'fotossíntese', isCorrect: true },
      ],
    },
    {
      id: 44,
      prompt: 'As plantas servem de alimento a animais herbívoros como o ___.',
      options: [
        { color: 'red', text: 'coelho', isCorrect: true },
        { color: 'yellow', text: 'tigre', isCorrect: false },
        { color: 'blue', text: 'tubarão', isCorrect: false },
        { color: 'green', text: 'aranha', isCorrect: false },
      ],
    },
    {
      id: 45,
      prompt:
        'Os animais herbívoros, por sua vez, servem de alimento aos ___, como o leão.',
      options: [
        { color: 'red', text: 'répteis', isCorrect: false },
        { color: 'yellow', text: 'equínos', isCorrect: false },
        { color: 'blue', text: 'carnívoros', isCorrect: true },
        { color: 'green', text: 'crustáceos', isCorrect: false },
      ],
    },
    {
      id: 46,
      prompt:
        'Alguns são ao mesmo tempo herbívoros e carnívoros: é o caso do ___.',
      options: [
        { color: 'red', text: 'urso', isCorrect: true },
        { color: 'yellow', text: 'peixe', isCorrect: false },
        { color: 'blue', text: 'besouro', isCorrect: false },
        { color: 'green', text: 'borboleta', isCorrect: false },
      ],
    },
    {
      id: 47,
      prompt:
        'Quando um organismo morre, seu corpo é decomposto pelas ___.',
      options: [
        { color: 'red', text: 'galinhas e frangos', isCorrect: false },
        { color: 'yellow', text: 'bactérias e fungos', isCorrect: true },
        { color: 'blue', text: 'algas e rinocerontes', isCorrect: false },
        { color: 'green', text: 'planetas e estrelas', isCorrect: false },
      ],
    },
    {
      id: 48,
      prompt:
        'Eles decompõem um organismo em elementos simples como o ___.',
      options: [
        { color: 'red', text: 'grampeador', isCorrect: false },
        { color: 'yellow', text: 'envelope', isCorrect: false },
        { color: 'blue', text: 'carbono', isCorrect: true },
        { color: 'green', text: 'fogo', isCorrect: false },
      ],
    },
    {
      id: 49,
      prompt:
        'Os elementos simples retornam ao solo e são absorvidos pelas ___, reiniciando o ciclo.',
      options: [
        { color: 'red', text: 'plantas', isCorrect: true },
        { color: 'yellow', text: 'nuvens', isCorrect: false },
        { color: 'blue', text: 'férias', isCorrect: false },
        { color: 'green', text: 'montanhas', isCorrect: false },
      ],
    },
    {
      id: 50,
      prompt:
        'O mais veloz em terra, capaz de correr 110 km por hora.',
      options: [
        { color: 'red', text: 'guepardo', isCorrect: true },
        { color: 'yellow', text: 'tigre', isCorrect: false },
        { color: 'blue', text: 'lebre', isCorrect: false },
        { color: 'green', text: 'gazela', isCorrect: false },
      ],
    },
    {
      id: 51,
      prompt:
        'O mais veloz voando em descida para pegar a presa (360 km por hora).',
      options: [
        { color: 'red', text: 'águia', isCorrect: false },
        { color: 'yellow', text: 'falcão-peregrino', isCorrect: true },
        { color: 'blue', text: 'urubu', isCorrect: false },
        { color: 'green', text: 'periquito', isCorrect: false },
      ],
    },
    {
      id: 52,
      prompt:
        'O mais veloz voando em linha reta (300 km por hora).',
      options: [
        { color: 'red', text: 'andorinhão-asiático', isCorrect: true },
        { color: 'yellow', text: 'condor', isCorrect: false },
        { color: 'blue', text: 'papagaio', isCorrect: false },
        { color: 'green', text: 'beija-flor', isCorrect: false },
      ],
    },
    {
      id: 53,
      prompt:
        'O mamífero mais veloz na água (65 km por hora).',
      options: [
        { color: 'red', text: 'foca', isCorrect: false },
        { color: 'yellow', text: 'baleia', isCorrect: false },
        { color: 'blue', text: 'peixe-boi', isCorrect: false },
        { color: 'green', text: 'golfinho', isCorrect: true },
      ],
    },
    {
      id: 54,
      prompt: 'O peixe mais rápido (110 km por hora).',
      options: [
        { color: 'red', text: 'sardinha', isCorrect: false },
        {
          color: 'yellow',
          text: 'peixe-vela-do-pacífico',
          isCorrect: true,
        },
        { color: 'blue', text: 'bagre-da-baía', isCorrect: false },
        { color: 'green', text: 'peixe-espada', isCorrect: false },
      ],
    },
    {
      id: 55,
      prompt: 'O animal mais pesado do mundo (120 toneladas).',
      options: [
        { color: 'red', text: 'caracol', isCorrect: false },
        { color: 'yellow', text: 'baleia-azul', isCorrect: true },
        { color: 'blue', text: 'lobo-guará', isCorrect: false },
        { color: 'green', text: 'rinoceronte', isCorrect: false },
      ],
    },
    {
      id: 56,
      prompt: 'O que vive mais tempo (até 200 anos).',
      options: [
        { color: 'red', text: 'crocodilo', isCorrect: false },
        { color: 'yellow', text: 'tartaruga', isCorrect: true },
        { color: 'blue', text: 'elefante', isCorrect: false },
        { color: 'green', text: 'borboleta', isCorrect: false },
      ],
    },
    {
      id: 57,
      prompt: 'O animal mais alto do mundo.',
      options: [
        { color: 'red', text: 'rato-do-campo', isCorrect: false },
        { color: 'yellow', text: 'musaranho', isCorrect: false },
        { color: 'blue', text: 'girafa', isCorrect: true },
        { color: 'green', text: 'águia', isCorrect: false },
      ],
    },
    {
      id: 58,
      prompt:
        'Os dois maiores carnívoros terrestres são o tigre e o ___.',
      options: [
        { color: 'red', text: 'cavalo-marinho', isCorrect: false },
        { color: 'yellow', text: 'coiote', isCorrect: false },
        { color: 'blue', text: 'cachorro-vinagre', isCorrect: false },
        { color: 'green', text: 'urso-polar', isCorrect: true },
      ],
    },
    {
      id: 59,
      prompt:
        'Pode voar sem interrupção durante cinco anos. Come e dorme voando.',
      options: [
        { color: 'red', text: 'arara-amazônica', isCorrect: false },
        { color: 'yellow', text: 'águia-americana', isCorrect: false },
        { color: 'blue', text: 'andorinha-do-mar', isCorrect: true },
        { color: 'green', text: 'pato-voador', isCorrect: false },
      ],
    },
    {
      id: 60,
      prompt:
        'O maior animal terrestre. Pode pesar até 6 toneladas.',
      options: [
        { color: 'red', text: 'tamanduá', isCorrect: false },
        { color: 'yellow', text: 'rato-asiático', isCorrect: false },
        { color: 'blue', text: 'foca-do-ártico', isCorrect: false },
        { color: 'green', text: 'elefante-africano', isCorrect: true },
      ],
    },
  ],
};

const program3: Program = {
  id: 3,
  code: '123',
  title: 'Programa3',
  description:
    'neste programa iremos passar pelos seguintes modelos: O estouro dos animais, Os perigos do canyon, Novos amigos, Quebra-cabeça, Cruzadinha',
  bookSequence: 'LIVRO • 1 • 2 • 3 • ENTER',
  questions: [
    {
      id: 61,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'constelação', isCorrect: false },
        { color: 'yellow', text: 'pescaria', isCorrect: false },
        { color: 'blue', text: 'frota', isCorrect: false },
        { color: 'green', text: 'cardume', isCorrect: true },
      ],
    },
    {
      id: 62,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'esquadrão', isCorrect: false },
        { color: 'yellow', text: 'mancada', isCorrect: false },
        { color: 'blue', text: 'coletivo', isCorrect: false },
        { color: 'green', text: 'manada', isCorrect: true },
      ],
    },
    {
      id: 63,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'alcatéia', isCorrect: true },
        { color: 'yellow', text: 'alcaçuz', isCorrect: false },
        { color: 'blue', text: 'alcachofra', isCorrect: false },
        { color: 'green', text: 'almôndega', isCorrect: false },
      ],
    },
    {
      id: 64,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'platéia', isCorrect: false },
        { color: 'yellow', text: 'repertório', isCorrect: false },
        { color: 'blue', text: 'rebanho', isCorrect: true },
        { color: 'green', text: 'multidão', isCorrect: false },
      ],
    },
    {
      id: 65,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'bando', isCorrect: true },
        { color: 'yellow', text: 'micose', isCorrect: false },
        { color: 'blue', text: 'simbiose', isCorrect: false },
        { color: 'green', text: 'macaquice', isCorrect: false },
      ],
    },
    {
      id: 66,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'matilha', isCorrect: true },
        { color: 'yellow', text: 'cancioneiro', isCorrect: false },
        { color: 'blue', text: 'mantilha', isCorrect: false },
        { color: 'green', text: 'cafezal', isCorrect: false },
      ],
    },
    {
      id: 67,
      prompt:
        'Associe cada animal com a palavra que indica um grupo desse tipo de animal.',
      options: [
        { color: 'red', text: 'antologia', isCorrect: false },
        { color: 'yellow', text: 'cáfila', isCorrect: true },
        { color: 'blue', text: 'elenco', isCorrect: false },
        { color: 'green', text: 'cafeína', isCorrect: false },
      ],
    },
    {
      id: 68,
      prompt: 'Outro nome para desfiladeiro é ___.',
      options: [
        { color: 'red', text: 'arquipélago', isCorrect: false },
        { color: 'yellow', text: 'desfile', isCorrect: false },
        { color: 'blue', text: 'canyon', isCorrect: true },
        { color: 'green', text: 'ilha', isCorrect: false },
      ],
    },
    {
      id: 69,
      prompt: 'Um canyon é uma ___ profunda entre montanhas.',
      options: [
        { color: 'red', text: 'garganta', isCorrect: true },
        { color: 'yellow', text: 'barriga', isCorrect: false },
        { color: 'blue', text: 'orelha', isCorrect: false },
        { color: 'green', text: 'boca', isCorrect: false },
      ],
    },
    {
      id: 70,
      prompt:
        'O canyon leva milhões de anos para ser formado; em geral, ele é escavado por um ___.',
      options: [
        { color: 'red', text: 'rio', isCorrect: true },
        { color: 'yellow', text: 'tatu', isCorrect: false },
        { color: 'blue', text: 'trator', isCorrect: false },
        { color: 'green', text: 'castor', isCorrect: false },
      ],
    },
    {
      id: 71,
      prompt: 'No canyon não há árvores, a paisagem é ___.',
      options: [
        { color: 'red', text: 'tímida', isCorrect: false },
        { color: 'yellow', text: 'árida', isCorrect: true },
        { color: 'blue', text: 'súbita', isCorrect: false },
        { color: 'green', text: 'súplica', isCorrect: false },
      ],
    },
    {
      id: 72,
      prompt: 'O famoso Grande Canyon fica nos ___.',
      options: [
        { color: 'red', text: 'Estados Unidos', isCorrect: true },
        { color: 'yellow', text: 'Alpes', isCorrect: false },
        { color: 'blue', text: 'Andes', isCorrect: false },
        { color: 'green', text: 'Paraná', isCorrect: false },
      ],
    },
    {
      id: 73,
      prompt: 'Indique o animal que NÃO pode viver num canyon.',
      options: [
        { color: 'red', text: 'coiote', isCorrect: false },
        { color: 'yellow', text: 'cascavel', isCorrect: false },
        { color: 'blue', text: 'escorpião', isCorrect: false },
        { color: 'green', text: 'hipopótamo', isCorrect: true },
      ],
    },
    {
      id: 74,
      prompt: 'O javali é também chamado de ___.',
      options: [
        { color: 'red', text: 'colibri', isCorrect: false },
        { color: 'yellow', text: 'porco-do-mato', isCorrect: true },
        { color: 'blue', text: 'javanês', isCorrect: false },
        { color: 'green', text: 'porcolí', isCorrect: false },
      ],
    },
    {
      id: 75,
      prompt: 'Ele tem duas presas e um focinho ___.',
      options: [
        { color: 'red', text: 'doce', isCorrect: false },
        { color: 'yellow', text: 'comprido', isCorrect: true },
        { color: 'blue', text: 'sujo', isCorrect: false },
        { color: 'green', text: 'preto', isCorrect: false },
      ],
    },
    {
      id: 76,
      prompt: 'O pêlo do javali é muito ___.',
      options: [
        { color: 'red', text: 'louro', isCorrect: false },
        { color: 'yellow', text: 'macio', isCorrect: false },
        { color: 'blue', text: 'grosso', isCorrect: true },
        { color: 'green', text: 'crespo', isCorrect: false },
      ],
    },
    {
      id: 77,
      prompt: 'Pumbaa leva Simba para viver na ___.',
      options: [
        { color: 'red', text: 'praia', isCorrect: false },
        { color: 'yellow', text: 'cidade', isCorrect: false },
        { color: 'blue', text: 'floresta', isCorrect: true },
        { color: 'green', text: 'geleira', isCorrect: false },
      ],
    },
    {
      id: 78,
      prompt: 'Pumba adora comer ___.',
      options: [
        { color: 'red', text: 'pizza', isCorrect: false },
        { color: 'yellow', text: 'besouros', isCorrect: true },
        { color: 'blue', text: 'hambúrguer', isCorrect: false },
        { color: 'green', text: 'chocolate', isCorrect: false },
      ],
    },
    {
      id: 79,
      prompt: 'Os besouros são ___.',
      options: [
        { color: 'red', text: 'insetos', isCorrect: true },
        { color: 'yellow', text: 'serpentes', isCorrect: false },
        { color: 'blue', text: 'répteis', isCorrect: false },
        { color: 'green', text: 'fósseis', isCorrect: false },
      ],
    },
    {
      id: 80,
      prompt: 'Eles têm asas ___.',
      options: [
        { color: 'red', text: 'podres', isCorrect: false },
        { color: 'yellow', text: 'brancas', isCorrect: true },
        { color: 'blue', text: 'tortas', isCorrect: false },
        { color: 'green', text: 'cascudas', isCorrect: false },
      ],
    },
    {
      id: 81,
      prompt: 'Complete o quebra-cabeça com as peças correspondentes.',
      options: [
        { color: 'red', text: 'D', isCorrect: true },
        { color: 'yellow', text: 'B', isCorrect: false },
        { color: 'blue', text: 'F', isCorrect: false },
        { color: 'green', text: 'A', isCorrect: false },
      ],
    },
    {
      id: 82,
      prompt: 'Complete o quebra-cabeça com as peças correspondentes.',
      options: [
        { color: 'red', text: 'E', isCorrect: true },
        { color: 'yellow', text: 'A', isCorrect: false },
        { color: 'blue', text: 'D', isCorrect: false },
        { color: 'green', text: 'B', isCorrect: false },
      ],
    },
    {
      id: 83,
      prompt: 'Complete o quebra-cabeça com as peças correspondentes.',
      options: [
        { color: 'red', text: 'A', isCorrect: true },
        { color: 'yellow', text: 'B', isCorrect: false },
        { color: 'blue', text: 'F', isCorrect: false },
        { color: 'green', text: 'C', isCorrect: false },
      ],
    },
    {
      id: 84,
      prompt: 'Complete o quebra-cabeça com as peças correspondentes.',
      options: [
        { color: 'red', text: 'B', isCorrect: true },
        { color: 'yellow', text: 'F', isCorrect: false },
        { color: 'blue', text: 'D', isCorrect: false },
        { color: 'green', text: 'E', isCorrect: false },
      ],
    },
    {
      id: 85,
      prompt: 'Complete o quebra-cabeça com as peças correspondentes.',
      options: [
        { color: 'red', text: 'C', isCorrect: true },
        { color: 'yellow', text: 'D', isCorrect: false },
        { color: 'blue', text: 'F', isCorrect: false },
        { color: 'green', text: 'A', isCorrect: false },
      ],
    },
    {
      id: 86,
      prompt: 'Complete o quebra-cabeça com as peças correspondentes.',
      options: [
        { color: 'red', text: 'D', isCorrect: true },
        { color: 'yellow', text: 'E', isCorrect: false },
        { color: 'blue', text: 'C', isCorrect: false },
        { color: 'green', text: 'A', isCorrect: false },
      ],
    },
    {
      id: 87,
      prompt: 'Ambicioso e traidor, ele planeja ser rei.',
      options: [
        { color: 'red', text: 'Balu', isCorrect: false },
        { color: 'yellow', text: 'Star', isCorrect: false },
        { color: 'blue', text: 'Scar', isCorrect: true },
        { color: 'green', text: 'Mogli', isCorrect: false },
      ],
    },
    {
      id: 88,
      prompt: 'Corajoso e forte, ele é o pai de Simba.',
      options: [
        { color: 'red', text: 'Mombasa', isCorrect: false },
        { color: 'yellow', text: 'Mustafá', isCorrect: false },
        { color: 'blue', text: 'Mufasa', isCorrect: true },
        { color: 'green', text: 'Muhamed', isCorrect: false },
      ],
    },
    {
      id: 89,
      prompt: 'Sábio babuíno, primeiro-ministro do Rei Leão.',
      options: [
        { color: 'red', text: 'Kontiki', isCorrect: false },
        { color: 'yellow', text: 'Tufik', isCorrect: false },
        { color: 'blue', text: 'Rafiki', isCorrect: true },
        { color: 'green', text: 'Chedik', isCorrect: false },
      ],
    },
    {
      id: 90,
      prompt: 'Uma bela leoa, a melhor amiga de Simba.',
      options: [
        { color: 'red', text: 'Naja', isCorrect: false },
        { color: 'yellow', text: 'Nala', isCorrect: true },
        { color: 'blue', text: 'Cindy', isCorrect: false },
        { color: 'green', text: 'Bambi', isCorrect: false },
      ],
    },
  ],
};

const program4: Program = {
  id: 4,
  code: '124',
  title: 'Programa4',
  description:
    'neste programa iremos passar pelos seguintes modelos: Na floresta, Simba bebê, O jovem Simba, Vozes dos animais',
  bookSequence: 'LIVRO • 1 • 2 • 4 • ENTER',
  questions: [
    {
      id: 91,
      prompt:
        'Com suas árvores altas, cipós e folhagens, a floresta tropical é ___.',
      options: [
        { color: 'red', text: 'úmida e quente', isCorrect: true },
        { color: 'yellow', text: 'seca e gelada', isCorrect: false },
        { color: 'blue', text: 'cheia de gente', isCorrect: false },
        { color: 'green', text: 'cheia de carros', isCorrect: false },
      ],
    },
    {
      id: 92,
      prompt: 'As florestas tropicais ficam ___ do equador.',
      options: [
        { color: 'red', text: 'fora', isCorrect: false },
        { color: 'yellow', text: 'longe', isCorrect: false },
        { color: 'blue', text: 'dentro', isCorrect: true },
        { color: 'green', text: 'perto', isCorrect: false },
      ],
    },
    {
      id: 93,
      prompt: 'As árvores mais altas chegam a alcançar ___.',
      options: [
        { color: 'red', text: '12 centímetros', isCorrect: false },
        { color: 'yellow', text: '40 metros', isCorrect: true },
        { color: 'blue', text: '10 quilos', isCorrect: false },
        { color: 'green', text: '2 quilômetros', isCorrect: false },
      ],
    },
    {
      id: 94,
      prompt: 'A maior floresta tropical do mundo é a Floresta ___.',
      options: [
        { color: 'red', text: 'Amazônica', isCorrect: true },
        { color: 'yellow', text: 'Negra', isCorrect: false },
        { color: 'blue', text: 'Atlântica', isCorrect: false },
        { color: 'green', text: 'Encantada', isCorrect: false },
      ],
    },
    {
      id: 95,
      prompt: 'Assinale o animal que vive na floresta tropical.',
      options: [
        { color: 'red', text: 'zebra', isCorrect: false },
        { color: 'yellow', text: 'foca', isCorrect: false },
        { color: 'blue', text: 'rena0', isCorrect: false },
        { color: 'green', text: 'macaco', isCorrect: true },
      ],
    },
    {
      id: 96,
      prompt: 'Assinale o animal que vive na floresta tropical.',
      options: [
        { color: 'red', text: 'urso-polar', isCorrect: false },
        { color: 'yellow', text: 'onça', isCorrect: true },
        { color: 'blue', text: 'panda', isCorrect: false },
        { color: 'green', text: 'cavalo-marinho', isCorrect: false },
      ],
    },
    {
      id: 97,
      prompt: 'Assinale o animal que vive na floresta tropical.',
      options: [
        { color: 'red', text: 'alce', isCorrect: false },
        { color: 'yellow', text: 'jibóia', isCorrect: true },
        { color: 'blue', text: 'gnomo', isCorrect: false },
        { color: 'green', text: 'ostra', isCorrect: false },
      ],
    },
    {
      id: 98,
      prompt: 'Em geral a leoa tem uma ninhada de ___ filhotes.',
      options: [
        { color: 'red', text: '10', isCorrect: false },
        { color: 'yellow', text: '6 ou 7', isCorrect: false },
        { color: 'blue', text: '4 ou 5', isCorrect: true },
        { color: 'green', text: '2 ou 3', isCorrect: false },
      ],
    },
    {
      id: 99,
      prompt: 'Os filhotes mamam na leoa durante ___ meses.',
      options: [
        { color: 'red', text: '2', isCorrect: false },
        { color: 'yellow', text: '1', isCorrect: false },
        { color: 'blue', text: '6', isCorrect: true },
        { color: 'green', text: '20', isCorrect: false },
      ],
    },
    {
      id: 100,
      prompt:
        'Mas com 3 meses o filhote já começa a comer também a ___ de animais que seu pai caça.',
      options: [
        { color: 'red', text: 'carne', isCorrect: true },
        { color: 'yellow', text: 'farinha', isCorrect: false },
        { color: 'blue', text: 'terra', isCorrect: false },
        { color: 'green', text: 'bife', isCorrect: false },
      ],
    },
    {
      id: 101,
      prompt: 'A mamãe leoa agrada os filhotes com ___.',
      options: [
        { color: 'red', text: 'lambidas', isCorrect: true },
        { color: 'yellow', text: 'beijos', isCorrect: false },
        { color: 'blue', text: 'presentes', isCorrect: false },
        { color: 'green', text: 'abraços', isCorrect: false },
      ],
    },
    {
      id: 102,
      prompt: 'O filhote de leão fica ___ aos 2 anos de idade.',
      options: [
        { color: 'red', text: 'burro', isCorrect: false },
        { color: 'yellow', text: 'maluco', isCorrect: false },
        { color: 'blue', text: 'velho', isCorrect: false },
        { color: 'green', text: 'independente', isCorrect: true },
      ],
    },
    {
      id: 103,
      prompt:
        'Os leõezinhos nascem com pintas, mas, quando crescem, as manchas ___.',
      options: [
        { color: 'red', text: 'desaparecem', isCorrect: true },
        { color: 'yellow', text: 'aumentam', isCorrect: false },
        { color: 'blue', text: 'derretem', isCorrect: false },
        { color: 'green', text: 'escurecem', isCorrect: false },
      ],
    },
    {
      id: 104,
      prompt: 'O leão ___ é maior do que a fêmea.',
      options: [
        { color: 'red', text: 'bravo', isCorrect: false },
        { color: 'yellow', text: 'marinho', isCorrect: false },
        { color: 'blue', text: 'mascote', isCorrect: false },
        { color: 'green', text: 'macho', isCorrect: true },
      ],
    },
    {
      id: 105,
      prompt:
        'Só o macho tem ___, que cresce no pescoço e nos ombros.',
      options: [
        { color: 'red', text: 'nariz', isCorrect: false },
        { color: 'yellow', text: 'juba', isCorrect: true },
        { color: 'blue', text: 'unhas', isCorrect: false },
        { color: 'green', text: 'rabo', isCorrect: false },
      ],
    },
    {
      id: 106,
      prompt:
        'A cor do pêlo do leão varia do amarelo até o ___.',
      options: [
        { color: 'red', text: 'verde', isCorrect: false },
        { color: 'yellow', text: 'marrom', isCorrect: true },
        { color: 'blue', text: 'roxo', isCorrect: false },
        { color: 'green', text: 'preto', isCorrect: false },
      ],
    },
    {
      id: 107,
      prompt:
        'O leão é bem preguiçoso, ele chega a ficar ___ horas por dia descansando!',
      options: [
        { color: 'red', text: '30', isCorrect: false },
        { color: 'yellow', text: '2', isCorrect: false },
        { color: 'blue', text: '20', isCorrect: true },
        { color: 'green', text: '10', isCorrect: false },
      ],
    },
    {
      id: 108,
      prompt: 'Ele deita na sombra e fica ___ de sono.',
      options: [
        { color: 'red', text: 'correndo', isCorrect: false },
        { color: 'yellow', text: 'sorrindo', isCorrect: false },
        { color: 'blue', text: 'bocejando', isCorrect: true },
        { color: 'green', text: 'pulando', isCorrect: false },
      ],
    },
    {
      id: 109,
      prompt: 'Os leões caçam outros bichos para ___.',
      options: [
        { color: 'red', text: 'jogar', isCorrect: false },
        { color: 'yellow', text: 'brincar', isCorrect: false },
        { color: 'blue', text: 'dormir', isCorrect: false },
        { color: 'green', text: 'comer', isCorrect: true },
      ],
    },
    {
      id: 110,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – LEÃO',
      options: [
        { color: 'red', text: 'GUINCНО (F)', isCorrect: false },
        { color: 'yellow', text: 'BALIDO (A)', isCorrect: false },
        { color: 'blue', text: 'ZURRO (K)', isCorrect: false },
        { color: 'green', text: 'RUGIDО (C)', isCorrect: true },
      ],
    },
    {
      id: 111,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – CÃO',
      options: [
        { color: 'red', text: 'RUGIDО (C)', isCorrect: false },
        { color: 'yellow', text: 'PIO (I)', isCorrect: false },
        { color: 'blue', text: 'LATIDO (E)', isCorrect: true },
        { color: 'green', text: 'BRAMIDO (J)', isCorrect: false },
      ],
    },
    {
      id: 112,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – OVELHA',
      options: [
        { color: 'red', text: 'GRUNHIDO (D)', isCorrect: false },
        { color: 'yellow', text: 'RELINCHO (H)', isCorrect: false },
        { color: 'blue', text: 'BALIDO (A)', isCorrect: true },
        { color: 'green', text: 'MIADO (B)', isCorrect: false },
      ],
    },
    {
      id: 113,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – BURRO',
      options: [
        { color: 'red', text: 'MIADO (B)', isCorrect: false },
        { color: 'yellow', text: 'BRAMIDO (J)', isCorrect: false },
        { color: 'blue', text: 'BALIDO (A)', isCorrect: false },
        { color: 'green', text: 'ZURRO (K)', isCorrect: true },
      ],
    },
    {
      id: 114,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – GATO',
      options: [
        { color: 'red', text: 'GRUNHIDO (D)', isCorrect: false },
        { color: 'yellow', text: 'RUGIDО (C)', isCorrect: false },
        { color: 'blue', text: 'ZURRO (K)', isCorrect: false },
        { color: 'green', text: 'MIADO (B)', isCorrect: true },
      ],
    },
    {
      id: 115,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – CORUJA',
      options: [
        { color: 'red', text: 'PIO (I)', isCorrect: true },
        { color: 'yellow', text: 'UIVO (G)', isCorrect: false },
        { color: 'blue', text: 'MIADO (B)', isCorrect: false },
        { color: 'green', text: 'LATIDO (E)', isCorrect: false },
      ],
    },
    {
      id: 116,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – CAVALO',
      options: [
        { color: 'red', text: 'RELINCHO (H)', isCorrect: true },
        { color: 'yellow', text: 'GRUNHIDO (D)', isCorrect: false },
        { color: 'blue', text: 'BRAMIDO (J)', isCorrect: false },
        { color: 'green', text: 'BALIDO (A)', isCorrect: false },
      ],
    },
    {
      id: 117,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – ELEFANTE',
      options: [
        { color: 'red', text: 'ZURRO (K)', isCorrect: false },
        { color: 'yellow', text: 'PIO (I)', isCorrect: false },
        { color: 'blue', text: 'BRAMIDO (J)', isCorrect: true },
        { color: 'green', text: 'MIADO (B)', isCorrect: false },
      ],
    },
    {
      id: 118,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – MACACO',
      options: [
        { color: 'red', text: 'RUGIDО (C)', isCorrect: false },
        { color: 'yellow', text: 'GRUNHIDO (D)', isCorrect: false },
        { color: 'blue', text: 'LATIDO (E)', isCorrect: false },
        { color: 'green', text: 'GUINCНО (F)', isCorrect: true },
      ],
    },
    {
      id: 119,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – HIENA',
      options: [
        { color: 'red', text: 'BALIDO (A)', isCorrect: false },
        { color: 'yellow', text: 'UIVO (G)', isCorrect: true },
        { color: 'blue', text: 'BRAMIDO (J)', isCorrect: false },
        { color: 'green', text: 'MIADO (B)', isCorrect: false },
      ],
    },
    {
      id: 120,
      prompt:
        'Você conhece a palavra certa para a voz de cada animal? Então faça as associações (veja a tabela) – JAVALI',
      options: [
        { color: 'red', text: 'MIADO (B)', isCorrect: false },
        { color: 'yellow', text: 'GRUNHIDO (D)', isCorrect: true },
        { color: 'blue', text: 'RELINCHO (H)', isCorrect: false },
        { color: 'green', text: 'BRAMIDO (J)', isCorrect: false },
      ],
    },
  ],
};

const program5: Program = {
  id: 5,
  code: '125',
  title: 'Programa5',
  description:
    'neste programa iremos passar pelos seguintes modelos: Como se chama?, Cores e formas, O ciclo da vida, A vida recomeça, O Rei Leão: o filme',
  bookSequence: 'LIVRO • 1 • 2 • 5 • ENTER',
  questions: [
    {
      id: 121,
      prompt:
        'Indique a palavra correta para cada uma das partes numeradas de Pumbaa.',
      options: [
        { color: 'red', text: 'sela', isCorrect: false },
        { color: 'yellow', text: 'trina', isCorrect: false },
        { color: 'blue', text: 'tufo', isCorrect: false },
        { color: 'green', text: 'crina', isCorrect: true },
      ],
    },
    {
      id: 122,
      prompt:
        'Indique a palavra correta para cada uma das partes numeradas de Pumbaa.',
      options: [
        { color: 'red', text: 'giba', isCorrect: false },
        { color: 'yellow', text: 'jaula', isCorrect: false },
        { color: 'blue', text: 'jujuba', isCorrect: false },
        { color: 'green', text: 'orelha', isCorrect: true },
      ],
    },
    {
      id: 123,
      prompt:
        'Indique a palavra correta para cada uma das partes numeradas de Pumbaa.',
      options: [
        { color: 'red', text: 'antena', isCorrect: false },
        { color: 'yellow', text: 'olhos', isCorrect: false },
        { color: 'blue', text: 'bico', isCorrect: true },
        { color: 'green', text: 'patas', isCorrect: false },
      ],
    },
    {
      id: 124,
      prompt:
        'Indique a palavra correta para cada uma das partes numeradas de Pumbaa.',
      options: [
        { color: 'red', text: 'proa', isCorrect: false },
        { color: 'yellow', text: 'dentes', isCorrect: true },
        { color: 'blue', text: 'popa', isCorrect: false },
        { color: 'green', text: 'gávea', isCorrect: false },
      ],
    },
    {
      id: 125,
      prompt:
        'Indique a palavra correta para cada uma das partes numeradas de Pumbaa.',
      options: [
        { color: 'red', text: 'cauda', isCorrect: false },
        { color: 'yellow', text: 'ancinho', isCorrect: false },
        { color: 'blue', text: 'fuinha', isCorrect: false },
        { color: 'green', text: 'focinho', isCorrect: true },
      ],
    },
    {
      id: 126,
      prompt:
        'Indique a palavra correta para cada uma das partes numeradas de Pumbaa.',
      options: [
        { color: 'red', text: 'presas', isCorrect: true },
        { color: 'yellow', text: 'troncos', isCorrect: false },
        { color: 'blue', text: 'trincos', isCorrect: false },
        { color: 'green', text: 'tralhas', isCorrect: false },
      ],
    },
    {
      id: 127,
      prompt: 'O pêlo da zebra é ___.',
      options: [
        { color: 'red', text: 'xadrez', isCorrect: false },
        { color: 'yellow', text: 'listrado', isCorrect: true },
        { color: 'blue', text: 'liso', isCorrect: false },
        { color: 'green', text: 'pintado', isCorrect: false },
      ],
    },
    {
      id: 128,
      prompt: 'As cores da zebra são as mesmas de qual time de futebol?',
      options: [
        { color: 'red', text: 'Grêmio', isCorrect: false },
        { color: 'yellow', text: 'Palmeiras', isCorrect: false },
        { color: 'blue', text: 'Flamengo', isCorrect: false },
        { color: 'green', text: 'Corinthians', isCorrect: true },
      ],
    },
    {
      id: 129,
      prompt: 'O pêlo da girafa tem ___.',
      options: [
        { color: 'red', text: 'manchas', isCorrect: true },
        { color: 'yellow', text: 'bolas', isCorrect: false },
        { color: 'blue', text: 'listras', isCorrect: false },
        { color: 'green', text: 'quadrados', isCorrect: false },
      ],
    },
    {
      id: 130,
      prompt: 'As cores da girafa são ___.',
      options: [
        { color: 'red', text: 'preto e amarelo', isCorrect: false },
        { color: 'yellow', text: 'bege e marrom', isCorrect: true },
        { color: 'blue', text: 'marrom e azul', isCorrect: false },
        { color: 'green', text: 'vermelho e amarelo', isCorrect: false },
      ],
    },
    {
      id: 131,
      prompt: 'A pele do elefante-africano é ___.',
      options: [
        { color: 'red', text: 'preta e sedosa', isCorrect: false },
        { color: 'yellow', text: 'marrom e macia', isCorrect: false },
        { color: 'blue', text: 'cinzenta e enrugada', isCorrect: true },
        { color: 'green', text: 'vermelha e escamosa', isCorrect: false },
      ],
    },
    {
      id: 132,
      prompt:
        'A juba do leão é mais ___ que o pêlo do corpo.',
      options: [
        { color: 'red', text: 'curta', isCorrect: false },
        { color: 'yellow', text: 'clara', isCorrect: false },
        { color: 'blue', text: 'escura', isCorrect: true },
        { color: 'green', text: 'verde', isCorrect: false },
      ],
    },
    {
      id: 133,
      prompt:
        'A cauda do leão tem um ___ de pêlos escuros na ponta.',
      options: [
        { color: 'red', text: 'tufo', isCorrect: true },
        { color: 'yellow', text: 'tubo', isCorrect: false },
        { color: 'blue', text: 'osso', isCorrect: false },
        { color: 'green', text: 'chifre', isCorrect: false },
      ],
    },
    {
      id: 134,
      prompt: 'Descubra o oposto ou contrário da palavra – DIA.',
      options: [
        { color: 'red', text: 'tarde', isCorrect: false },
        { color: 'yellow', text: 'noite', isCorrect: true },
        { color: 'blue', text: 'hora', isCorrect: false },
        { color: 'green', text: 'semana', isCorrect: false },
      ],
    },
    {
      id: 135,
      prompt: 'Descubra o oposto ou contrário da palavra – VERÃO.',
      options: [
        { color: 'red', text: 'doce', isCorrect: false },
        { color: 'yellow', text: 'mês', isCorrect: false },
        { color: 'blue', text: 'inverno', isCorrect: true },
        { color: 'green', text: 'chuva', isCorrect: false },
      ],
    },
    {
      id: 136,
      prompt: 'Descubra o oposto ou contrário da palavra – VIDA.',
      options: [
        { color: 'red', text: 'nascimento', isCorrect: false },
        { color: 'yellow', text: 'infância', isCorrect: false },
        { color: 'blue', text: 'velho', isCorrect: false },
        { color: 'green', text: 'morte', isCorrect: true },
      ],
    },
    {
      id: 137,
      prompt: 'Descubra o oposto ou contrário da palavra – SOL.',
      options: [
        { color: 'red', text: 'estrela', isCorrect: true },
        { color: 'yellow', text: 'mar', isCorrect: false },
        { color: 'blue', text: 'chuva', isCorrect: false },
        { color: 'green', text: 'montanha', isCorrect: false },
      ],
    },
    {
      id: 138,
      prompt: 'Descubra o oposto ou contrário da palavra – CLARO.',
      options: [
        { color: 'red', text: 'medroso', isCorrect: false },
        { color: 'yellow', text: 'feliz', isCorrect: false },
        { color: 'blue', text: 'triste', isCorrect: false },
        { color: 'green', text: 'escuro', isCorrect: true },
      ],
    },
    {
      id: 139,
      prompt: 'Descubra o oposto ou contrário da palavra – AMIGO.',
      options: [
        { color: 'red', text: 'pai', isCorrect: false },
        { color: 'yellow', text: 'tio', isCorrect: false },
        { color: 'blue', text: 'inimigo', isCorrect: true },
        { color: 'green', text: 'irmão', isCorrect: false },
      ],
    },
    {
      id: 140,
      prompt: 'Nala e Simba se amam e formam um ___.',
      options: [
        { color: 'red', text: 'ninho', isCorrect: false },
        { color: 'yellow', text: 'casal', isCorrect: true },
        { color: 'blue', text: 'conjunto', isCorrect: false },
        { color: 'green', text: 'dueto', isCorrect: false },
      ],
    },
    {
      id: 141,
      prompt: 'O filhote do casal de leões se desenvolve na ___ da leoa.',
      options: [
        { color: 'red', text: 'perna', isCorrect: false },
        { color: 'yellow', text: 'barriga', isCorrect: true },
        { color: 'blue', text: 'cabeça', isCorrect: false },
        { color: 'green', text: 'orelha', isCorrect: false },
      ],
    },
    {
      id: 142,
      prompt: 'O primeiro alimento de Simba é o ___ da mãe.',
      options: [
        { color: 'red', text: 'capim', isCorrect: false },
        { color: 'yellow', text: 'leite', isCorrect: true },
        { color: 'blue', text: 'ovo', isCorrect: false },
        { color: 'green', text: 'mamadeira', isCorrect: false },
      ],
    },
    {
      id: 143,
      prompt:
        'Existem mamíferos que se desenvolvem numa bolsa do lado de fora do corpo da mãe. São os ___, como o canguru.',
      options: [
        { color: 'red', text: 'marsupiais', isCorrect: true },
        { color: 'yellow', text: 'vegetais', isCorrect: false },
        { color: 'blue', text: 'capitais', isCorrect: false },
        { color: 'green', text: 'marechais', isCorrect: false },
      ],
    },
    {
      id: 144,
      prompt:
        'Você sabia que também existem mamíferos voadores? Um deles é o ___.',
      options: [
        { color: 'red', text: 'calango', isCorrect: false },
        { color: 'yellow', text: 'besouro', isCorrect: false },
        { color: 'blue', text: 'morcego', isCorrect: true },
        { color: 'green', text: 'beija-flor', isCorrect: false },
      ],
    },
    {
      id: 145,
      prompt: 'Os animais e as plantas são capazes de se ___.',
      options: [
        { color: 'red', text: 'reproduzir', isCorrect: true },
        { color: 'yellow', text: 'dançar', isCorrect: false },
        { color: 'blue', text: 'pensar', isCorrect: false },
        { color: 'green', text: 'coçar', isCorrect: false },
      ],
    },
    {
      id: 146,
      prompt: 'A reprodução garante a ___ da espécie.',
      options: [
        { color: 'red', text: 'calamidade', isCorrect: false },
        { color: 'yellow', text: 'capacidade', isCorrect: false },
        { color: 'blue', text: 'fertilidade', isCorrect: false },
        { color: 'green', text: 'continuidade', isCorrect: true },
      ],
    },
    {
      id: 147,
      prompt: 'O filme foi produzido nos ___ de Walt Disney.',
      options: [
        { color: 'red', text: 'fábricas', isCorrect: false },
        { color: 'yellow', text: 'hospitais', isCorrect: false },
        { color: 'blue', text: 'estudos', isCorrect: false },
        { color: 'green', text: 'estúdios', isCorrect: true },
      ],
    },
    {
      id: 148,
      prompt: 'A trilha sonora foi composta por ___.',
      options: [
        { color: 'red', text: 'Gabriel, o Pensador', isCorrect: false },
        { color: 'yellow', text: 'Steven Spielberg', isCorrect: false },
        { color: 'blue', text: 'Paralamas do Sucesso', isCorrect: false },
        { color: 'green', text: 'Elton John', isCorrect: true },
      ],
    },
    {
      id: 149,
      prompt: 'O compositor usou ritmos ___ em muitas canções do filme.',
      options: [
        { color: 'red', text: 'brasileiros', isCorrect: false },
        { color: 'yellow', text: 'japoneses', isCorrect: false },
        { color: 'blue', text: 'africanos', isCorrect: true },
        { color: 'green', text: 'jamaicanos', isCorrect: false },
      ],
    },
    {
      id: 150,
      prompt:
        'O Rei Leão é um provável candidato ao Oscar na categoria ___.',
      options: [
        { color: 'red', text: 'suspense', isCorrect: false },
        { color: 'yellow', text: 'ficção científica', isCorrect: false },
        { color: 'blue', text: 'terror', isCorrect: false },
        { color: 'green', text: 'desenho animado', isCorrect: true },
      ],
    },
  ],
};

const BASE_PROGRAMS: Program[] = [
  program1,
  program2,
  program3,
  program4,
  program5,
].map(addIndicesToProgram);

const shuffleArray = <T,>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const allQuestions: Question[] = BASE_PROGRAMS.flatMap(program => program.questions);
let questionQueue: Question[] = [];

const ensureQueue = () => {
  if (questionQueue.length < 30) {
    const refill = shuffleArray(allQuestions);
    questionQueue = [...questionQueue, ...refill];
  }
};

const drawQuestions = (amount: number): Question[] => {
  ensureQueue();
  const selection = questionQueue.slice(0, amount);
  questionQueue = questionQueue.slice(amount);
  return selection.map(question => ({
    ...question,
    options: question.options.map(option => ({ ...option })),
  }));
};

const program6Meta: Program = {
  id: 6,
  code: '126',
  title: 'Programa6',
  description:
    'neste programa iremos passar pelos seguintes modelos: revisão surpresa com perguntas embaralhadas dos programas anteriores. Prepare-se!',
  bookSequence: 'LIVRO • 1 • 2 • 6 • ENTER',
  questions: [],
};

const cloneProgram = (program: Program): Program => ({
  ...program,
  questions: program.questions.map(question => ({
    ...question,
    options: question.options.map(option => ({ ...option })),
  })),
});

export const PROGRAMS: Program[] = [...BASE_PROGRAMS, program6Meta];

export const getProgramById = (id: number): Program | null => {
  if (id === 6) {
    return {
      ...program6Meta,
      questions: drawQuestions(30),
    };
  }

  const match = BASE_PROGRAMS.find(program => program.id === id);
  if (!match) {
    return null;
  }

  return cloneProgram(match);
};
