import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    try {
        const response = await fetch('https://api.dev.auth.tirport.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const json = await response.json();
        console.log('API Yanıtı:', JSON.stringify(json, null, 2));

        if (json.statusCode === 404) {
            Alert.alert('Hata', 'Kullanıcı bulunamadı');
        } else if (json.statusCode === 400) {
            Alert.alert('Hata', 'Geçersiz istek');
        } else if (json.statusCode === 401) {
            Alert.alert('Hata', 'Yetkisiz erişim');
        } else if (json.statusCode === 500) {
            Alert.alert('Hata', 'Sunucu hatası');
        } else {
            Alert.alert('Başarılı', 'Giriş Başarılı!');

            console.log('Alınan Token:', JSON.stringify(json.token, null, 2));

            await AsyncStorage.setItem('token', JSON.stringify(json.token));
            
            navigation.navigate('TransportManagement'); 
        }

    } catch (error) {
        console.log('Error:', error);
        Alert.alert('Hata', 'Bir hata oluştu. Lütfen tekrar deneyin.');
    }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      
      <Text style={styles.label}>Email Adresi</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <Text style={styles.label}>Şifre</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder="**************"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Ionicons
            name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Tırport hesabın yok mu?</Text>
        <TouchableOpacity style={styles.linkTouchable} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text>Şifreni mi unuttun</Text>
        <TouchableOpacity style={styles.linkTouchable} onPress={() => navigation.navigate('PasswordReset')}>
          <Text style={styles.link}>Şifreni Yenile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
