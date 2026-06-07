import { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    excluirServico,
    listarServicos,
} from './database/db';

export default function ServicosScreen() {
  const [servicos, setServicos] = useState<any[]>([]);

  function carregar() {
    const dados = listarServicos();
    setServicos(dados as any[]);
  }

  function remover(id: number) {
    excluirServico(id);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Serviços Cadastrados
      </Text>

      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              Categoria: {item.categoria}
            </Text>

            <Text>
              Telefone: {item.telefone}
            </Text>

            <Text>
              {item.descricao}
            </Text>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => remover(item.id)}
            >
              <Text style={styles.textoExcluir}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  botaoExcluir: {
    backgroundColor: '#e63946',
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
  },

  textoExcluir: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});