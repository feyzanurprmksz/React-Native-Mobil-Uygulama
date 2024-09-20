import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function VerificationCodeScreen() {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const handleVerify = () => {
    if (code.length !== 6) {
      Alert.alert('Hata', 'Geçerli bir doğrulama kodu girin.');
      return;
    }
    navigation.navigate('Success'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifre Yenile</Text>
      <Text style={styles.confirmationText}>
        Lütfen doğrulama kodunu girin
      </Text>
      <TextInput
        style={styles.verificationCodeInput}
        placeholder="Doğrulama Kodu"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Devam</Text>
      </TouchableOpacity>
    </View>
  );
}


