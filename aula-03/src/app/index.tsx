import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const Colors = {
  background: '#FFFFFF',
  institutional: '#175CD3',
  text: '#0B2F6B',
} as const;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Ícones escuros: o fundo desta tela é claro. */}
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Olá, mundo! 👋</Text>
          <Text style={styles.subtitle}>Bem-vindo ao ToDoList</Text>
          <Text style={styles.description}>
            Meu primeiro aplicativo desenvolvido com React Native, Expo e inteligência artificial.
          </Text>
          <View style={styles.identity}>
            <Text style={styles.academy}>Academia PHR Software</Text>
            <Text style={styles.lesson}>Aula 03 — Primeiro aplicativo</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.three,
  },
  title: {
    color: Colors.text,
    fontSize: 36,
    lineHeight: 44,
    fontWeight: 700,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.institutional,
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 600,
    textAlign: 'center',
  },
  description: {
    color: Colors.text,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: Spacing.two,
  },
  identity: {
    alignItems: 'center',
    gap: Spacing.one,
    marginTop: Spacing.four,
  },
  academy: {
    color: Colors.institutional,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
    textAlign: 'center',
  },
  lesson: {
    color: Colors.text,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
    textAlign: 'center',
  },
});
