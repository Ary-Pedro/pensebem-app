export type ColorKey = 'red' | 'yellow' | 'blue' | 'green';

export interface Question {
  id: number;
  prompt: string;
  answer: string;
  correctColor: ColorKey;
}

export interface Program {
  id: number;
  code: string;
  title: string;
  description: string;
  bookSequence: string;
  questions: Question[];
}

type ColorWord = 'Azul' | 'Amarelo' | 'Verde' | 'Vermelho';

interface RawQuestion {
  prompt: string;
  answer: string;
  color: ColorWord;
}

const COLOR_LOOKUP: Record<ColorWord, ColorKey> = {
  Azul: 'blue',
  Amarelo: 'yellow',
  Verde: 'green',
  Vermelho: 'red',
};

const createQuestions = (items: RawQuestion[], startId: number): Question[] =>
  items.map((item, index) => ({
    id: startId + index,
    prompt: item.prompt,
    answer: item.answer,
    correctColor: COLOR_LOOKUP[item.color],
  }));

const program1Questions = createQuestions(
  [
    {
      prompt: 'A África é um vasto ____.',
      answer: 'continente',
      color: 'Azul',
    },
    {
      prompt: 'Lá viveram os primeiros ____, há mais de 3 milhões de anos.',
      answer: 'homens',
      color: 'Amarelo',
    },
    {
      prompt:
        'Na África vivem muitos povos diferentes, cada um com sua ____ e seus costumes.',
      answer: 'língua',
      color: 'Amarelo',
    },
    {
      prompt:
        'A história de O Rei Leão se passa na Tanzânia, onde fica o ponto mais alto da África, o monte ____.',
      answer: 'Kilimanjaro',
      color: 'Azul',
    },
    {
      prompt: 'O imponente perfil desse monte está sempre coberto de ____. ',
      answer: 'neve',
      color: 'Verde',
    },
    {
      prompt:
        'Aos pés do Kilimanjaro estende-se uma enorme planície chamada ____. ',
      answer: 'Parque Nacional de Serengeti',
      color: 'Verde',
    },
    {
      prompt:
        'O Parque Nacional de Serengeti reúne uma das maiores concentrações de ____ de todo o mundo.',
      answer: 'animais',
      color: 'Amarelo',
    },
    {
      prompt: 'Bonito dia de ____. ',
      answer: 'verão',
      color: 'Verde',
    },
    {
      prompt: 'Azul é o ____. ',
      answer: 'céu',
      color: 'Verde',
    },
    {
      prompt: 'O capim é ____. ',
      answer: 'alto',
      color: 'Verde',
    },
    {
      prompt: 'Vejo um pequeno ____. ',
      answer: 'leão',
      color: 'Verde',
    },
    {
      prompt: 'Olhos grandes ele ____. ',
      answer: 'tem',
      color: 'Verde',
    },
    {
      prompt: 'Leãozinho tem pêlo ____. ',
      answer: 'macio',
      color: 'Verde',
    },
    {
      prompt: 'Simba é um filhote de ____. ',
      answer: 'leão',
      color: 'Vermelho',
    },
    {
      prompt:
        'Além dos leões, vivem na planície outros animais, como as ____ de pêlo listrado.',
      answer: 'zebras',
      color: 'Vermelho',
    },
    {
      prompt:
        'Há também as gazelas, que correm muito e dão ____ graciosos.',
      answer: 'saltos',
      color: 'Vermelho',
    },
    {
      prompt:
        'Os animais que comem capim, frutos, raízes e sementes são ____. ',
      answer: 'herbívoros',
      color: 'Azul',
    },
    {
      prompt:
        'O leão, o leopardo e a hiena gostam de comer carne. Eles são ____. ',
      answer: 'carnívoros',
      color: 'Vermelho',
    },
    {
      prompt:
        'Os elefantes são os ____ animais da planície de Serengeti. ',
      answer: 'maiores',
      color: 'Azul',
    },
    {
      prompt: 'Por ali passam também os javalis, que vivem em ____. ',
      answer: 'bandos',
      color: 'Azul',
    },
    {
      prompt:
        'Entre os pássaros de Serengeti destacam-se as ____ avestruzes.',
      answer: 'velozes',
      color: 'Amarelo',
    },
    {
      prompt: 'O corpo do aardvark lembra o de um ____. ',
      answer: 'canguru',
      color: 'Verde',
    },
    {
      prompt: 'As orelhas parecem com as do ____. ',
      answer: 'elefante',
      color: 'Amarelo',
    },
    {
      prompt: 'O longo focinho é semelhante ao do ____. ',
      answer: 'porco',
      color: 'Amarelo',
    },
    {
      prompt: 'Ele tem uma língua comprida semelhante à do ____. ',
      answer: 'tamanduá',
      color: 'Vermelho',
    },
    {
      prompt: 'O aardvark se alimenta de ____. ',
      answer: 'formigas e cupins',
      color: 'Amarelo',
    },
    {
      prompt: 'Reconheça a pele: manchas douradas denunciam a ____. ',
      answer: 'girafa',
      color: 'Verde',
    },
    {
      prompt: 'Reconheça a pele: listras pretas e brancas são da ____. ',
      answer: 'zebra',
      color: 'Vermelho',
    },
    {
      prompt:
        'Reconheça a pele: manchas arredondadas com miolo lembram a ____. ',
      answer: 'onça',
      color: 'Azul',
    },
    {
      prompt: 'Reconheça a pele: listras largas alaranjadas são do ____. ',
      answer: 'tigre',
      color: 'Vermelho',
    },
  ],
  1,
);

const program2Questions = createQuestions(
  [
    {
      prompt: 'O leão é um ser vivo que pertence ao reino ____. ',
      answer: 'animal',
      color: 'Azul',
    },
    {
      prompt: 'Ele é um animal ____. ',
      answer: 'vertebrado',
      color: 'Azul',
    },
    {
      prompt: 'Pertence à classe dos ____. ',
      answer: 'mamíferos',
      color: 'Amarelo',
    },
    {
      prompt:
        'Como o leão é um conhecido comedor de carne, ele foi agrupado na ordem dos ____. ',
      answer: 'carnívoros',
      color: 'Verde',
    },
    {
      prompt: 'O leão faz parte da família dos ____. ',
      answer: 'felídeos',
      color: 'Verde',
    },
    {
      prompt:
        'Os cientistas do mundo usam o nome em latim para não dar confusão. Qual destes é o nome científico do leão?',
      answer: 'Panthera leo',
      color: 'Verde',
    },
    {
      prompt:
        'Os macacos têm os sentidos bem desenvolvidos e são capazes de ____ muitas coisas.',
      answer: 'aprender',
      color: 'Amarelo',
    },
    {
      prompt: 'Os macacos são também chamados de ____. ',
      answer: 'símios',
      color: 'Verde',
    },
    {
      prompt: 'Identifique o primata brasileiro da figura: ____. ',
      answer: 'mico-preto',
      color: 'Verde',
    },
    {
      prompt: 'O grande primata ruivo visto no livro é o ____. ',
      answer: 'orangotango',
      color: 'Amarelo',
    },
    {
      prompt: 'Qual primata esperto abre cocos com pedras? ____. ',
      answer: 'macaco-prego',
      color: 'Verde',
    },
    {
      prompt: 'O parente mais próximo do homem é o ____. ',
      answer: 'chimpanzé',
      color: 'Amarelo',
    },
    {
      prompt:
        'Graças à luz do sol, as plantas fabricam seu próprio alimento por meio da ____. ',
      answer: 'fotossíntese',
      color: 'Verde',
    },
    {
      prompt: 'As plantas servem de alimento a animais herbívoros como o ____. ',
      answer: 'coelho',
      color: 'Vermelho',
    },
    {
      prompt:
        'Os animais herbívoros, por sua vez, servem de alimento aos ____, como o leão. ',
      answer: 'carnívoros',
      color: 'Azul',
    },
    {
      prompt:
        'Alguns animais são ao mesmo tempo herbívoros e carnívoros: é o caso do ____. ',
      answer: 'urso',
      color: 'Vermelho',
    },
    {
      prompt: 'Quando um organismo morre, seu corpo é decomposto pelas ____. ',
      answer: 'bactérias e fungos',
      color: 'Amarelo',
    },
    {
      prompt:
        'Os decompositores transformam o corpo em elementos simples como o ____. ',
      answer: 'carbono',
      color: 'Azul',
    },
    {
      prompt:
        'Os elementos simples retornam ao solo e são absorvidos pelas ____, reiniciando o ciclo.',
      answer: 'plantas',
      color: 'Vermelho',
    },
    {
      prompt: 'O mais veloz em terra, capaz de correr 110 km/h, é o ____. ',
      answer: 'guepardo',
      color: 'Vermelho',
    },
    {
      prompt:
        'O mais veloz voando em mergulho para pegar a presa (360 km/h) é o ____. ',
      answer: 'falcão-peregrino',
      color: 'Amarelo',
    },
    {
      prompt: 'O pássaro mais rápido em linha reta (300 km/h) é o ____. ',
      answer: 'andorinhão-asiático',
      color: 'Vermelho',
    },
    {
      prompt: 'O mamífero mais veloz na água (65 km/h) é o ____. ',
      answer: 'golfinho',
      color: 'Verde',
    },
    {
      prompt: 'O peixe mais rápido (110 km/h) é o ____. ',
      answer: 'peixe-vela-do-pacífico',
      color: 'Amarelo',
    },
    {
      prompt: 'O animal mais pesado do mundo (120 toneladas) é a ____. ',
      answer: 'baleia-azul',
      color: 'Amarelo',
    },
    {
      prompt: 'O que vive mais tempo (até 200 anos) é a ____. ',
      answer: 'tartaruga',
      color: 'Amarelo',
    },
    {
      prompt: 'O animal mais alto do mundo é a ____. ',
      answer: 'girafa',
      color: 'Azul',
    },
    {
      prompt: 'Os dois maiores carnívoros terrestres são o tigre e o ____. ',
      answer: 'urso-polar',
      color: 'Verde',
    },
    {
      prompt:
        'Pode voar cinco anos sem pousar, comendo e dormindo no ar. É a ____. ',
      answer: 'andorinha-do-mar',
      color: 'Azul',
    },
    {
      prompt:
        'O maior animal terrestre, que pode pesar até 6 toneladas, é o ____. ',
      answer: 'elefante-africano',
      color: 'Verde',
    },
  ],
  31,
);

const program3Questions = createQuestions(
  [
    {
      prompt: 'Grupo de peixes recebe o nome de ____. ',
      answer: 'cardume',
      color: 'Verde',
    },
    {
      prompt: 'Grupo de elefantes recebe o nome de ____. ',
      answer: 'manada',
      color: 'Verde',
    },
    {
      prompt: 'Grupo de lobos recebe o nome de ____. ',
      answer: 'alcatéia',
      color: 'Vermelho',
    },
    {
      prompt: 'Grupo de ovelhas recebe o nome de ____. ',
      answer: 'rebanho',
      color: 'Azul',
    },
    {
      prompt: 'Grupo de macacos recebe o nome de ____. ',
      answer: 'bando',
      color: 'Vermelho',
    },
    {
      prompt: 'Grupo de cães e lobos treinados recebe o nome de ____. ',
      answer: 'matilha',
      color: 'Vermelho',
    },
    {
      prompt: 'Grupo de camelos viajando no deserto é uma ____. ',
      answer: 'cáfila',
      color: 'Amarelo',
    },
    {
      prompt: 'Outro nome para desfiladeiro é ____. ',
      answer: 'canyon',
      color: 'Azul',
    },
    {
      prompt: 'Um canyon é uma ____ profunda entre montanhas. ',
      answer: 'garganta',
      color: 'Vermelho',
    },
    {
      prompt:
        'O canyon leva milhões de anos para ser formado; em geral, ele é escavado por um ____. ',
      answer: 'rio',
      color: 'Vermelho',
    },
    {
      prompt: 'No canyon não há árvores, a paisagem é ____. ',
      answer: 'árida',
      color: 'Amarelo',
    },
    {
      prompt: 'O famoso Grande Canyon fica nos ____. ',
      answer: 'Estados Unidos',
      color: 'Vermelho',
    },
    {
      prompt: 'Indique o animal que NÃO pode viver num canyon. ',
      answer: 'hipopótamo',
      color: 'Verde',
    },
    {
      prompt: 'O javali é também chamado de ____. ',
      answer: 'porco-do-mato',
      color: 'Amarelo',
    },
    {
      prompt: 'Ele tem duas presas e um focinho ____. ',
      answer: 'comprido',
      color: 'Amarelo',
    },
    {
      prompt: 'O pêlo do javali é muito ____. ',
      answer: 'grosso',
      color: 'Azul',
    },
    {
      prompt: 'Pumbaa leva Simba para viver na ____. ',
      answer: 'floresta',
      color: 'Azul',
    },
    {
      prompt: 'Pumbaa adora comer ____. ',
      answer: 'besouros',
      color: 'Amarelo',
    },
    {
      prompt: 'Os besouros são ____. ',
      answer: 'insetos',
      color: 'Vermelho',
    },
    {
      prompt: 'Eles têm asas ____. ',
      answer: 'cascudas',
      color: 'Verde',
    },
    {
      prompt: 'Peça 81 do quebra-cabeça corresponde à letra ____. ',
      answer: 'D',
      color: 'Vermelho',
    },
    {
      prompt: 'Peça 82 do quebra-cabeça corresponde à letra ____. ',
      answer: 'E',
      color: 'Vermelho',
    },
    {
      prompt: 'Peça 83 do quebra-cabeça corresponde à letra ____. ',
      answer: 'A',
      color: 'Vermelho',
    },
    {
      prompt: 'Peça 84 do quebra-cabeça corresponde à letra ____. ',
      answer: 'B',
      color: 'Vermelho',
    },
    {
      prompt: 'Peça 85 do quebra-cabeça corresponde à letra ____. ',
      answer: 'C',
      color: 'Vermelho',
    },
    {
      prompt: 'Peça 86 do quebra-cabeça corresponde à letra ____. ',
      answer: 'D',
      color: 'Vermelho',
    },
    {
      prompt:
        'Horizontal: ambicioso e traidor, ele planeja ser rei. Estamos falando de ____. ',
      answer: 'Scar',
      color: 'Azul',
    },
    {
      prompt:
        'Horizontal: corajoso e forte, ele é o pai de Simba. Estamos falando de ____. ',
      answer: 'Mufasa',
      color: 'Azul',
    },
    {
      prompt:
        'Vertical: sábio babuíno, primeiro-ministro do Rei Leão. Estamos falando de ____. ',
      answer: 'Rafiki',
      color: 'Azul',
    },
    {
      prompt:
        'Vertical: uma bela leãozinha, a melhor amiga de Simba. Estamos falando de ____. ',
      answer: 'Nala',
      color: 'Amarelo',
    },
  ],
  61,
);

const program4Questions = createQuestions(
  [
    {
      prompt:
        'Com suas árvores altas, cipós e folhagem, a floresta tropical é ____. ',
      answer: 'úmida e quente',
      color: 'Vermelho',
    },
    {
      prompt: 'As florestas tropicais ficam ____ do equador. ',
      answer: 'perto',
      color: 'Azul',
    },
    {
      prompt: 'As árvores mais altas chegam a alcançar ____. ',
      answer: '40 metros',
      color: 'Amarelo',
    },
    {
      prompt: 'A maior floresta tropical do mundo é a Floresta ____. ',
      answer: 'Amazônica',
      color: 'Vermelho',
    },
    {
      prompt:
        'Escolha o animal que vive naturalmente nas florestas tropicais: (figura de primata).',
      answer: 'macaco',
      color: 'Verde',
    },
    {
      prompt: 'Quem reina silenciosa nas árvores: (imagem pintada). ',
      answer: 'onça',
      color: 'Amarelo',
    },
    {
      prompt: 'Entre as serpentes tropicais está a ____. ',
      answer: 'jibóia',
      color: 'Amarelo',
    },
    {
      prompt: 'A camada mais alta da floresta recebe o nome de ____. ',
      answer: 'dossel',
      color: 'Verde',
    },
    {
      prompt: 'O clima úmido favorece o aparecimento constante de ____. ',
      answer: 'chuvas',
      color: 'Azul',
    },
    {
      prompt: 'As folhas largas ajudam as plantas a captar mais ____. ',
      answer: 'luz solar',
      color: 'Amarelo',
    },
    {
      prompt:
        'O solo da floresta tropical é pobre em nutrientes porque a matéria orgânica se decompõe ____. ',
      answer: 'rápido',
      color: 'Amarelo',
    },
    {
      prompt: 'As bromélias acumulam água e servem de abrigo para ____. ',
      answer: 'insetos',
      color: 'Vermelho',
    },
    {
      prompt:
        'Os rios que nascem na Amazônia deságuam principalmente no oceano ____. ',
      answer: 'Atlântico',
      color: 'Verde',
    },
    {
      prompt: 'O leão ____ é maior do que a fêmea. ',
      answer: 'macho',
      color: 'Verde',
    },
    {
      prompt: 'Só o macho tem ____ que cresce no pescoço e nos ombros. ',
      answer: 'juba',
      color: 'Amarelo',
    },
    {
      prompt: 'A cor do pêlo do leão varia do amarelo até o ____. ',
      answer: 'marrom',
      color: 'Amarelo',
    },
    {
      prompt:
        'O leão é bem preguiçoso, ele chega a ficar ____ horas por dia descansando. ',
      answer: '20',
      color: 'Azul',
    },
    {
      prompt: 'Ele deita na sombra e fica ____ de sono. ',
      answer: 'bocejando',
      color: 'Azul',
    },
    {
      prompt: 'Os leões caçam outros bichos para ____. ',
      answer: 'comer',
      color: 'Verde',
    },
    {
      prompt: 'Leão => som correto: ____. ',
      answer: 'rugido',
      color: 'Verde',
    },
    {
      prompt: 'Cão => som correto: ____. ',
      answer: 'latido',
      color: 'Azul',
    },
    {
      prompt: 'Ovelha => som correto: ____. ',
      answer: 'balido',
      color: 'Azul',
    },
    {
      prompt: 'Burro => som correto: ____. ',
      answer: 'zurro',
      color: 'Verde',
    },
    {
      prompt: 'Gato => som correto: ____. ',
      answer: 'miado',
      color: 'Verde',
    },
    {
      prompt: 'Coruja => som correto: ____. ',
      answer: 'pio',
      color: 'Vermelho',
    },
    {
      prompt: 'Cavalo => som correto: ____. ',
      answer: 'relincho',
      color: 'Vermelho',
    },
    {
      prompt: 'Elefante => som correto: ____. ',
      answer: 'bramido',
      color: 'Amarelo',
    },
    {
      prompt: 'Macaco => som correto: ____. ',
      answer: 'guincho',
      color: 'Verde',
    },
    {
      prompt: 'Hiena => som correto: ____. ',
      answer: 'uivo',
      color: 'Amarelo',
    },
    {
      prompt: 'Javali => som correto: ____. ',
      answer: 'grunhido',
      color: 'Amarelo',
    },
  ],
  91,
);

const program5Questions = createQuestions(
  [
    {
      prompt: 'Identifique a ponta de cabelo no alto da cabeça do Pumbaa. ',
      answer: 'tufo',
      color: 'Azul',
    },
    {
      prompt: 'Parte da orelha do Pumbaa. ',
      answer: 'orelha',
      color: 'Verde',
    },
    {
      prompt: 'Pata do Pumbaa. ',
      answer: 'patas',
      color: 'Verde',
    },
    {
      prompt: 'Dente ou presa do Pumbaa. ',
      answer: 'dentes',
      color: 'Amarelo',
    },
    {
      prompt: 'Focinho do Pumbaa. ',
      answer: 'focinho',
      color: 'Verde',
    },
    {
      prompt: 'Cauda do Pumbaa. ',
      answer: 'trilhas',
      color: 'Verde',
    },
    {
      prompt: 'O pêlo da zebra é ____. ',
      answer: 'listrado',
      color: 'Amarelo',
    },
    {
      prompt:
        'As cores da zebra são as mesmas de qual time tradicional do futebol brasileiro?',
      answer: 'Corinthians',
      color: 'Verde',
    },
    {
      prompt: 'O pêlo da girafa tem ____. ',
      answer: 'manchas',
      color: 'Vermelho',
    },
    {
      prompt: 'As cores principais da girafa são ____. ',
      answer: 'bege e marrom',
      color: 'Amarelo',
    },
    {
      prompt: 'A pele do elefante-africano é ____. ',
      answer: 'cinzenta e enrugada',
      color: 'Azul',
    },
    {
      prompt: 'A juba do leão é mais ____ que o pêlo do corpo. ',
      answer: 'escura',
      color: 'Azul',
    },
    {
      prompt: 'A cauda do leão tem um ____ de pêlos escuros na ponta. ',
      answer: 'tufo',
      color: 'Vermelho',
    },
    {
      prompt: 'Dia (o oposto ou contrário) => ____. ',
      answer: 'noite',
      color: 'Amarelo',
    },
    {
      prompt: 'Verão (o oposto ou contrário) => ____. ',
      answer: 'inverno',
      color: 'Azul',
    },
    {
      prompt: 'Vida (o oposto ou contrário) => ____. ',
      answer: 'morte',
      color: 'Verde',
    },
    {
      prompt: 'Sol (o oposto ou contrário) => ____. ',
      answer: 'chuva',
      color: 'Azul',
    },
    {
      prompt: 'Claro (o oposto ou contrário) => ____. ',
      answer: 'escuro',
      color: 'Verde',
    },
    {
      prompt: 'Amigo (o oposto ou contrário) => ____. ',
      answer: 'inimigo',
      color: 'Azul',
    },
    {
      prompt: 'Nala e Simba se amam e formam um ____. ',
      answer: 'casal',
      color: 'Amarelo',
    },
    {
      prompt: 'O filhote do casal de leões se desenvolve na ____ da leoa. ',
      answer: 'barriga',
      color: 'Amarelo',
    },
    {
      prompt: 'O primeiro alimento de Simba é o ____ da mãe. ',
      answer: 'leite',
      color: 'Amarelo',
    },
    {
      prompt:
        'Existem mamíferos que se desenvolvem numa bolsa externa no corpo da mãe. São os ____. ',
      answer: 'marsupiais',
      color: 'Vermelho',
    },
    {
      prompt: 'Também existem mamíferos voadores, como o ____. ',
      answer: 'morcego',
      color: 'Azul',
    },
    {
      prompt: 'Os animais e as plantas são capazes de se ____. ',
      answer: 'reproduzir',
      color: 'Vermelho',
    },
    {
      prompt: 'A reprodução garante a ____ da espécie. ',
      answer: 'continuidade',
      color: 'Verde',
    },
    {
      prompt: 'O filme foi produzido nos ____ de Walt Disney. ',
      answer: 'estúdios',
      color: 'Azul',
    },
    {
      prompt: 'A trilha sonora foi composta por ____. ',
      answer: 'Elton John',
      color: 'Verde',
    },
    {
      prompt: 'O compositor usou ritmos ____ em muitas canções do filme. ',
      answer: 'africanos',
      color: 'Azul',
    },
    {
      prompt: 'O Rei Leão é um provável candidato ao Oscar na categoria ____. ',
      answer: 'desenho animado',
      color: 'Verde',
    },
  ],
  121,
);

export const PROGRAMS: Program[] = [
  {
    id: 1,
    code: '121',
    title: 'Programa 1 - Vida no Serengeti',
    description:
      'Explora o cotidiano da savana africana e apresenta os personagens do livro do Rei Leão.',
    bookSequence: 'LIVRO • 1 • 2 • 1 • ENTER',
    questions: program1Questions,
  },
  {
    id: 2,
    code: '122',
    title: 'Programa 2 - Cadeia Alimentar',
    description:
      'Revê classificações científicas, cadeias alimentares e curiosidades sobre os animais mais rápidos do planeta.',
    bookSequence: 'LIVRO • 1 • 2 • 2 • ENTER',
    questions: program2Questions,
  },
  {
    id: 3,
    code: '123',
    title: 'Programa 3 - Aventuras e Grupos',
    description:
      'Relaciona coletivos de animais, noções de relevo e personagens icônicos do filme.',
    bookSequence: 'LIVRO • 1 • 2 • 3 • ENTER',
    questions: program3Questions,
  },
  {
    id: 4,
    code: '124',
    title: 'Programa 4 - Floresta Tropical e Sons',
    description:
      'Passeia pela floresta Amazônica, hábitos dos leões e a correspondência entre animais e seus sons.',
    bookSequence: 'LIVRO • 1 • 2 • 4 • ENTER',
    questions: program4Questions,
  },
  {
    id: 5,
    code: '125',
    title: 'Programa 5 - Anatomia e Curiosidades',
    description:
      'Detalha partes dos personagens, opostos, reprodução e bastidores da animação O Rei Leão.',
    bookSequence: 'LIVRO • 1 • 2 • 5 • ENTER',
    questions: program5Questions,
  },
];

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
