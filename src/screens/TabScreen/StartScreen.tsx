import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/started.jpeg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>
          Strawberry flavor that refreshes the soul. Bring special moments with
          every serving
        </Text>
        <Text style={styles.subtitle}>
          Fresh, sweet, and delicious-all in our strawberry drinks and snacks!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Tetap di tengah secara vertikal
    alignItems: 'center', // Tetap di tengah secara horizontal
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end', // Memindahkan konten ke bawah
    paddingHorizontal: 20,
    paddingBottom: 50, // Tambahkan padding bawah agar ada sedikit jarak dari bawah
    flex: 1, // Menambahkan flex agar container mengambil seluruh layar
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffb6c1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20, // Menambahkan margin untuk memberikan jarak antara tombol dan teks di atasnya
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;
