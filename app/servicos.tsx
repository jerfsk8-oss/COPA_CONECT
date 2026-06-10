import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  excluirServico,
  listarServicos,
} from '../database/db';

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

  function abrirWhatsApp(telefone: string) {
  const numero = telefone.replace(/\D/g, '');
  const url = `https://wa.me/55${numero}`;

  Linking.openURL(url);
}

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços Cadastrados</Text>

      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>

            <Text>Categoria: {item.categoria}</Text>
            <Text>Telefone: {item.telefone}</Text>
            <Text>{item.descricao}</Text>

            <View style={styles.botoes}>
               <TouchableOpacity
                  style={styles.botaoWhatsApp}
                  onPress={() => abrirWhatsApp(item.telefone)}
              >
               <Text style={styles.textoBotao}>
                WhatsApp
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() =>
                  router.push({
                    pathname: '/cadastro',
                    params: {
                      id: item.id,
                      nome: item.nome,
                      categoria: item.categoria,
                      telefone: item.telefone,
                      descricao: item.descricao,
                    },
                  })
                }
              >
                <Text style={styles.textoBotao}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={() => remover(item.id)}
              >
                <Text style={styles.textoBotao}>Excluir</Text>
              </TouchableOpacity>
            </View>
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

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  botaoWhatsApp: {
  backgroundColor: '#25D366',
  flex: 1,
  padding: 10,
  borderRadius: 6,
  marginRight: 5,
  },

  botaoEditar: {
    backgroundColor: '#457b9d',
    flex: 1,
    padding: 10,
    borderRadius: 6,
    marginRight: 5,
  },

  botaoExcluir: {
    backgroundColor: '#e63946',
    flex: 1,
    padding: 10,
    borderRadius: 6,
    marginLeft: 5,
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});