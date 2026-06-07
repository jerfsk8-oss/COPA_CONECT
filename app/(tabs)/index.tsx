import { Link } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { criarTabela } from '../database/db';

export default function HomeScreen() {

  useEffect(() => {
    criarTabela();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COPA_CONECT</Text>

      <Text style={styles.subtitle}>
        Conectando moradores de Copacabana a pequenos empreendedores.
      </Text>

      <Text style={styles.text}>
        Encontre e divulgue serviços locais como massoterapeutas,
        eletricistas, barbeiros, manicures, professores particulares,
        técnicos de informática e muito mais.
      </Text>

      <Link href="/cadastro" style={styles.button}>
        Cadastrar Serviço
      </Link>

      <Link href="/servicos" style={styles.secondaryButton}>
        Ver Serviços
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f2f6ff',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1d3557',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#457b9d',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1d3557',
    color: '#fff',
    padding: 16,
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#457b9d',
    color: '#fff',
    padding: 16,
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});