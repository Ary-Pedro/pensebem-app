import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { BOOK_NAME, PROGRAMS } from '@/src/data/programs';

export default function HomeScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [searchError, setSearchError] = useState('');
  const normalized = query.trim().toLowerCase();
  const digitsOnly = normalized.replace(/[^0-9]/g, '');

  const filteredPrograms = useMemo(() => {
    if (!normalized) {
      return PROGRAMS;
    }

    return PROGRAMS.filter(program => {
      const haystack = `${program.id} ${program.code} ${program.title} ${program.description} ${program.bookSequence}`.toLowerCase();
      return (
        haystack.includes(normalized) ||
        (!!digitsOnly && program.code.includes(digitsOnly))
      );
    });
  }, [normalized, digitsOnly]);

  const handleSubmit = (text?: string) => {
    const value = (text ?? query).trim();
    if (!value) {
      setSearchError('');
      return;
    }

    const digits = value.replace(/[^0-9]/g, '');
    const match = PROGRAMS.find(program => program.code === digits);

    if (match) {
      setSearchError('');
      router.push({
        pathname: '/program/[programId]',
        params: { programId: String(match.id) },
      });
      return;
    }

    setSearchError('Esse app não possui esse livro!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={StyleSheet.absoluteFillObject}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.kicker}>Projeto React Native • UniLaSalle</Text>
          <Text style={styles.title}>{BOOK_NAME}</Text>
          <Text style={styles.subtitle}>
            Digite 121, 122, 123, 124 ou 125 para acessar diretamente o programa
            (o primeiro número corresponde ao livro do Rei Leão). Também é possível
            buscar pelo nome, descrição ou sequência de teclas.
          </Text>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Buscar por código (121…125), nome ou sequência"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={query}
              onChangeText={text => {
                setQuery(text);
                setSearchError('');
              }}
              onSubmitEditing={({ nativeEvent }) =>
                handleSubmit(nativeEvent.text)
              }
              style={styles.searchInput}
              returnKeyType="search"
            />
            {searchError ? (
              <Text style={styles.searchError}>{searchError}</Text>
            ) : null}
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Regras principais</Text>
            <Text style={styles.infoText}>
              {'- 30 perguntas por programa\n- 3 tentativas por pergunta\n- 3 / 2 / 1 pontos conforme a tentativa\n- Sem pontos após a 3ª tentativa'}
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Sequência das teclas</Text>
            <Text style={styles.infoText}>
              {'No equipamento original: LIVRO > 1 > 2 > PROGRAMA > ENTER.\nPara uma experiência fiel, mantenha o livro por perto — algumas pistas visuais só aparecem nele.'}
            </Text>
            <Pressable
              style={styles.linkButton}
              onPress={() =>
                Linking.openURL(
                  'https://datassette.s3.us-west-004.backblazeb2.com/livros/pense_bem_-_disney_-_o_rei_leao.pdf',
                )
              }
            >
              <Text style={styles.linkButtonText}>Abrir livro digital</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Escolha um programa</Text>
          {filteredPrograms.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Nada encontrado</Text>
              <Text style={styles.emptySubtitle}>
                Ajuste os termos ou limpe o campo de busca para ver todos os programas.
              </Text>
            </View>
          ) : (
            filteredPrograms.map(program => (
              <Link
                key={program.id}
                href={{
                  pathname: '/program/[programId]',
                  params: { programId: String(program.id) },
                }}
                asChild
              >
                <Pressable style={styles.programCard}>
                  <View style={styles.programHeader}>
                    <Text style={styles.programBadge}>{program.code}</Text>
                    <Text style={styles.programSequence}>
                      {program.bookSequence}
                    </Text>
                  </View>
                  <Text style={styles.programTitle}>{program.title}</Text>
                  <Text style={styles.programDescription}>
                    {program.description}
                  </Text>
                </Pressable>
              </Link>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
    gap: 24,
  },
  hero: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  kicker: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 2,
    color: '#a5b4fc',
    marginBottom: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.4,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
  },
  searchWrapper: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(15, 23, 42, 0.35)',
    padding: 4,
  },
  searchInput: {
    padding: 12,
    fontSize: 15,
    color: '#fff',
  },
  searchError: {
    color: '#feb2b2',
    fontSize: 12,
    marginTop: 2,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  infoCard: {
    flex: 1,
    minWidth: 160,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 22,
    marginBottom: 12,
  },
  linkButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(15,23,42,0.6)',
  },
  linkButtonText: {
    color: '#e0f2fe',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f8fafc',
  },
  programCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 22,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  programHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  programBadge: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    fontWeight: '700',
    fontSize: 12,
  },
  programSequence: {
    fontSize: 12,
    color: '#475467',
    fontWeight: '600',
  },
  programTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  programDescription: {
    fontSize: 15,
    color: '#475467',
  },
  emptyState: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
  },
});
