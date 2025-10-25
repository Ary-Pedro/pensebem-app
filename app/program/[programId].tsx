import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import { ColorButton } from '../../components/ColorButton';
import {
  COLOR_BUTTONS,
  ColorKey,
  PROGRAMS,
  regenerateProgram6,
} from '../../src/data/programs';
import {
  TOTAL_ATTEMPTS,
  buildOptions,
  pointsForAttempt,
} from '../../src/utils/game';

const EMPTY_OPTIONS: Record<ColorKey, string> = {
  red: '',
  yellow: '',
  blue: '',
  green: '',
};

const colorOrder: ColorKey[] = ['red', 'yellow', 'blue', 'green'];

export default function ProgramScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { programId } = useLocalSearchParams<{ programId: string }>();

  const isWide = width >= 768;
  const buttonColumns = isWide ? 4 : 2;

  const program = PROGRAMS.find(
    item => item.id === Number(programId ?? NaN),
  );

  // Regenera as perguntas do Programa 6 quando entrar nele
  useEffect(() => {
    if (program && program.id === 6) {
      regenerateProgram6();
    }
  }, [program?.id]);

  const totalQuestions = program?.questions.length ?? 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempt, setAttempt] = useState(1);
  const [score, setScore] = useState(0);
  const [pendingAdvance, setPendingAdvance] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(
    null,
  );
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);
  const [finished, setFinished] = useState(false);
  const [lastAnswerLetter, setLastAnswerLetter] = useState('');

  const optionMap = useMemo(
    () => (program ? buildOptions(program, currentIndex) : EMPTY_OPTIONS),
    [program, currentIndex],
  );

  if (!program) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={['#0f2027', '#203a43', '#2c5364']}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.centered}>
          <Text style={styles.errorTitle}>Programa não encontrado</Text>
          <Pressable onPress={() => router.replace('/')}>
            <Text style={styles.errorLink}>Voltar para a seleção</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const question = program.questions[currentIndex];
  const maxScore = totalQuestions * 3;
  const progress =
    totalQuestions === 0
      ? 0
      : Math.min(
          1,
          (currentIndex + (pendingAdvance ? 1 : 0)) / totalQuestions,
        );
  const containerStyles = [
    styles.container,
    isWide ? styles.containerWide : null,
  ];

  const handleSelect = (color: ColorKey) => {
    if (pendingAdvance || finished) return;

    setSelectedColor(color);
    setLastAnswerLetter(COLOR_BUTTONS[color].letter);
    const isCorrect = color === question.correctColor;

    if (isCorrect) {
      const earned = pointsForAttempt(attempt);
      setScore(prev => prev + earned);
      setStatusMessage(
        `Boa! Você ganhou ${earned} ponto${earned > 1 ? 's' : ''}.`,
      );
      setFeedback('correct');
      setPendingAdvance(true);
    } else if (attempt >= TOTAL_ATTEMPTS) {
      setStatusMessage('Acabaram as tentativas. Sem pontos nesta questão.');
      setFeedback('incorrect');
      setPendingAdvance(true);
    } else {
      setStatusMessage('Resposta incorreta. Tente novamente.');
      setFeedback('incorrect');
      setAttempt(prev => prev + 1);
    }
  };

  const advanceQuestion = () => {
    if (currentIndex === totalQuestions - 1) {
      setFinished(true);
      setPendingAdvance(false);
      return;
    }

    setLastAnswerLetter('');
    setSelectedColor(null);
    setFeedback(null);
    setStatusMessage('');
    setPendingAdvance(false);
    setAttempt(1);
    setCurrentIndex(prev => prev + 1);
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setAttempt(1);
    setScore(0);
    setPendingAdvance(false);
    setFeedback(null);
    setStatusMessage('');
    setSelectedColor(null);
    setFinished(false);
    setLastAnswerLetter('');
  };

  const renderSummary = () => (
    <ScrollView contentContainerStyle={styles.summaryScroll}>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Programa concluído!</Text>
        <Text style={styles.summaryScore}>
          {score} / {maxScore} pontos
        </Text>
        <Text style={styles.summaryText}>
          Aproveitamento de {Math.round((score / maxScore) * 100)}%.
        </Text>
        <Text style={styles.summaryNote}>
          Cada pergunta vale até 3 pontos, respeitando as 3 tentativas do Pense
          Bem.
        </Text>

        <Pressable style={styles.primaryButton} onPress={resetGame}>
          <Text style={styles.primaryButtonText}>Jogar novamente</Text>
        </Pressable>
        <Pressable
          style={[styles.primaryButton, styles.secondaryButton]}
          onPress={() => router.replace('/')}
        >
          <Text style={[styles.primaryButtonText, styles.secondaryButtonText]}>
            Escolher outro programa
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );

  if (finished) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={['#0f2027', '#203a43', '#2c5364']}
          style={StyleSheet.absoluteFillObject}
        />
        {renderSummary()}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={StyleSheet.absoluteFillObject}
      />
      <ScrollView contentContainerStyle={containerStyles}>
        <View style={[styles.machine, isWide && styles.machineWide]}>
          <Text style={styles.logo}>Tectoy</Text>
          <View style={styles.display}>
            <Text style={styles.displayText}>
              {`${program.code} -> ${currentIndex + 1}:${
                lastAnswerLetter || ''
              }`}
            </Text>
          </View>
          <Text style={styles.sequence}>{program.bookSequence}</Text>

          <View style={styles.statsRow}>
            <Text style={styles.stat}>
              Tentativa {attempt} de {TOTAL_ATTEMPTS}
            </Text>
            <Text style={styles.stat}>
              Pontuação {score}/{maxScore}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progress * 100}%` }]}
            />
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.stat}>
              Pergunta {currentIndex + 1}/{totalQuestions}
            </Text>
            <Text style={styles.stat}>Livro: {program.title}</Text>
          </View>
        </View>

        <View style={[styles.questionCard, isWide && styles.questionCardWide]}>
          <Text style={styles.questionTitle}>{question.prompt}</Text>
          <Text style={styles.questionNote}>
            Descubra a alternativa correta e toque no botão da cor equivalente.
          </Text>
        </View>

        <View style={[styles.grid, isWide && styles.gridWide]}>
          {colorOrder.map(color => {
            const highlight = pendingAdvance
              ? color === question.correctColor
                ? 'correct'
                : selectedColor === color
                  ? 'incorrect'
                  : null
              : selectedColor === color
                ? 'selected'
                : null;

            return (
              <ColorButton
                key={color}
                color={color}
                onPress={() => handleSelect(color)}
                optionText={optionMap[color]}
                disabled={pendingAdvance}
                highlight={highlight}
                columns={buttonColumns}
              />
            );
          })}
        </View>

        <View style={[styles.feedbackCard, isWide && styles.feedbackWide]}>
          <Text style={styles.feedbackLabel}>
            {feedback === 'correct'
              ? 'Resposta correta ✅'
              : feedback === 'incorrect'
                ? 'Resposta incorreta ❌'
                : 'Hora de responder'}
          </Text>
          <Text style={styles.feedbackText}>
            {statusMessage ||
              'Você tem até três tentativas para acertar cada pergunta.'}
          </Text>
        </View>

        {pendingAdvance ? (
          <Pressable style={styles.primaryButton} onPress={advanceQuestion}>
            <Text style={styles.primaryButtonText}>
              {currentIndex === totalQuestions - 1
                ? 'Ver resultado'
                : 'Próxima pergunta'}
            </Text>
          </Pressable>
        ) : null}

        <Pressable
          style={[styles.primaryButton, styles.secondaryButton]}
          onPress={resetGame}
        >
          <Text style={[styles.primaryButtonText, styles.secondaryButtonText]}>
            Reiniciar programa
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 24,
    paddingBottom: 40,
    gap: 18,
  },
  containerWide: {
    maxWidth: 860,
    alignSelf: 'center',
    width: '100%',
  },
  machine: {
    padding: 20,
    borderRadius: 26,
    backgroundColor: '#f8eed9',
    borderWidth: 2,
    borderColor: '#f1d6a2',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
    gap: 10,
  },
  machineWide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: 20,
  },
  logo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#d35400',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  display: {
    marginTop: 4,
    backgroundColor: '#050505',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  displayText: {
    color: '#ff4d4f',
    fontFamily: 'Courier',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  sequence: {
    fontSize: 13,
    color: '#5f5b53',
    letterSpacing: 1,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1b263b',
  },
  progressBar: {
    height: 10,
    marginVertical: 8,
    borderRadius: 999,
    backgroundColor: '#e0d7c7',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#00b894',
  },
  questionCard: {
    backgroundColor: '#fefefe',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  questionCardWide: {
    alignSelf: 'stretch',
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  questionNote: {
    fontSize: 14,
    color: '#475467',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  gridWide: {
    gap: 20,
  },
  feedbackCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  feedbackWide: {
    alignSelf: 'stretch',
  },
  feedbackLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  feedbackText: {
    fontSize: 14,
    color: '#475467',
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#1c1f2b',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  secondaryButtonText: {
    color: '#fff',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  errorLink: {
    fontSize: 16,
    color: '#60a5fa',
  },
  summaryScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  summaryCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    gap: 12,
  },
  summaryTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
  summaryScore: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    color: '#22c55e',
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.8)',
  },
  summaryNote: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 8,
  },
});
