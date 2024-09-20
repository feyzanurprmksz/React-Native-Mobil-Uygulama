import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function SuccessScreen() {
  const navigation = useNavigation();

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tebrikler</Text>
      <Text style={styles.confirmationText}>
        Şifrenizi yenilediniz. Giriş sayfasına yönlendiriliyorsunuz.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}
