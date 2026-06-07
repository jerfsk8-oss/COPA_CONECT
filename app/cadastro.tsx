import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { inserirServico } from './database/db';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');

  function salvar() {
    if (!nome || !categoria) {
      Alert.alert('Atenção', 'Preencha os campos obrigatórios.');
      return;
    }

    inserirServico(
      nome,
      categoria,
      telefone,
      descricao
    );

    Alert.alert(
      'Sucesso',
      'Serviço cadastrado com sucesso!'
    );

    setNome('');
    setCategoria('');
    setTelefone('');
    setDescricao('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Serviço</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TextInput
        style={[styles.input, styles.area]}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonText}>
          Salvar Serviço
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  area: {
    height: 100,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#1d3557',
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});