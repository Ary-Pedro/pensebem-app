import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLOR_BUTTONS, ColorKey } from '../src/data/programs';

type Highlight = 'correct' | 'incorrect' | 'selected' | null;

interface ColorButtonProps {
  color: ColorKey;
  optionText: string;
  disabled?: boolean;
  onPress: () => void;
  highlight?: Highlight;
  columns?: 2 | 4;
}

export function ColorButton({
  color,
  optionText,
  onPress,
  disabled,
  highlight,
  columns = 2,
}: ColorButtonProps) {
  const palette = COLOR_BUTTONS[color];

  return (
    <Pressable
      accessibilityLabel={`Alternativa ${palette.letter}`}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        columns === 4 ? styles.wrapperQuarter : styles.wrapperHalf,
        pressed && !disabled ? styles.pressed : null,
      ]}
    >
      <LinearGradient
        colors={palette.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.base,
          disabled ? styles.disabled : null,
          highlight === 'correct' ? styles.correct : null,
          highlight === 'incorrect' ? styles.incorrect : null,
          highlight === 'selected' ? styles.selected : null,
        ]}
      >
        <View style={styles.letterBadge}>
          <Text style={styles.letter}>{palette.letter}</Text>
        </View>
        <Text style={styles.option} numberOfLines={3}>
          {optionText}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
  },
  wrapperHalf: {
    width: '48%',
  },
  wrapperQuarter: {
    width: '22%',
  },
  base: {
    minHeight: 130,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.65,
  },
  correct: {
    borderWidth: 3,
    borderColor: '#1abc9c',
  },
  incorrect: {
    borderWidth: 3,
    borderColor: '#8e44ad',
  },
  selected: {
    borderWidth: 3,
    borderColor: '#2d3436',
  },
  letterBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  option: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
});
