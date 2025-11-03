# Pense Bem – O Rei Leão (React Native)

Aplicativo híbrido construído com Expo + React Native para simular o brinquedo **Pense Bem** (TecToy) usando o livro do filme *O Rei Leão*. O app segue o enunciado do PDF fornecido: cinco programas com 30 perguntas cada, teclado colorido (A/B/C/D) e sistema de pontuação baseado em até três tentativas por pergunta.

## Funcionalidades

- Seleção dos 5 programas (`LIVRO • 1 • 2 • X • ENTER`) com resumo e instruções.
- Motor de perguntas com 30 itens por programa e gabarito colorido fiel ao livro.
- Tentativas limitadas em 3 — 3/2/1 ponto(s) conforme o acerto ocorre na 1ª, 2ª ou 3ª tentativa.
- Painel visual inspirado no Pense Bem original (display digital, tentativas, barra de progresso e pontuação).
- Botões grandes nas cores oficiais (Vermelho=A, Amarelo=B, Azul=C, Verde=D) com textos embaralhados automaticamente.
- Tela de resultado com aproveitamento e ações para reiniciar o programa ou voltar ao menu.

> Obs.: As questões 98–103 do Programa 4 não aparecem no trecho do PDF enviado. Para manter o total de 30 perguntas, foram adicionadas perguntas sobre ecossistema tropical no mesmo formato e com gabarito próprio documentado em `src/data/programs.ts`.

## Pré-requisitos

- Node.js 18+
- npm (instalado com o Node)
- Expo CLI (opcional; `npx` já executa os comandos necessários)

## Como executar

```bash
# 1. Entre na pasta do projeto
cd pensebem-app

# 2. Instalar dependências
npm install

# 3. Iniciar o Metro bundler / Expo
npm run start -- --tunnel
```

> **⚠️ IMPORTANTE**: Você precisa estar **dentro da pasta `pensebem-app`** para executar os comandos npm!

No terminal do Expo escolha uma das opções:

- **a** – abrir em um emulador Android
- **i** – abrir no simulador iOS (necessita macOS)
- **w** – abrir no navegador (versão web)
- **Expo Go** – escaneie o QR Code com o aplicativo Expo Go em um dispositivo físico.

## Estrutura principal

```
pensebem-app/
├── app/
│   ├── index.tsx                # Tela inicial com explicação e seleção dos programas
│   └── program/[programId].tsx  # Tela do jogo com perguntas, botões e resultado
├── components/
│   └── ColorButton.tsx          # Botões coloridos A/B/C/D estilizados
├── src/
│   ├── data/programs.ts         # Banco com perguntas, respostas e sequências do livro
│   └── utils/game.ts            # Pontuação por tentativa e montagem de alternativas
└── README.md
```

## Fluxo do jogo

1. O usuário escolhe um programa e vê o painel do Pense Bem.
2. Cada pergunta mostra o enunciado e quatro botões coloridos.
3. Ao tocar em um botão:
   - Acerto na 1ª tentativa → +3 pontos.
   - Acerto na 2ª tentativa → +2 pontos.
   - Acerto na 3ª tentativa → +1 ponto.
   - Três erros → 0 ponto e a pergunta avança automaticamente.
4. Ao final das 30 perguntas o app mostra a pontuação total e o percentual.

## Referências

- PDF “React Native (Introdução ao React Native)” (trechos fornecidos pelo professor, UniLaSalle).
- Sites de inspiração enviados pelo usuário (implementações web do Pense Bem) — utilizados apenas como referência visual.

## Próximos passos sugeridos

- Adicionar feedback sonoro/visual extra (Haptics, animações).
- Persistir o histórico de pontuações em AsyncStorage.
- Permitir inserir novos livros/programas via arquivo JSON.

---

Feito com ♥ usando Expo + React Native para a disciplina de Aplicativos Híbridos.
