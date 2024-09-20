import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './GSMStyles';

export default function GSMVerificationScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(120);


  useEffect(() => {
    const fetchEmailAndOtp = async () => {
        const storedEmail = await AsyncStorage.getItem('email');
        const storedOtp = await AsyncStorage.getItem('phoneOtp'); 
        if (storedEmail) {
            console.log('Stored Email:', storedEmail);
            setEmail(storedEmail);
        }
        if (storedOtp) {
            console.log('Stored OTP:', storedOtp);
            setCode(storedOtp.split('')); 
        }
    };
    fetchEmailAndOtp();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      Alert.alert('Süre doldu', 'Süre doldu, lütfen tekrar kod gönderin.');
    }
  }, [timer]);

  const handleVerifyCode = async () => {
    if (timer <= 0) {
      Alert.alert('Hata', 'Süre doldu, lütfen tekrar kod gönderin.');
      return;
    }

    try {
      console.log('API’ye gönderilen email:', email);
      console.log('API’ye gönderilen OTP:', code.join(''));

      const response = await fetch('https://api.dev.auth.tirport.com/user/verify-phone', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneOtp: code.join(''),
          email: email,
        }),
      });

      const json = await response.json();
      console.log('API Yanıtı:', JSON.stringify(json, null, 2));

      if (json.statusCode === 200) {
        Alert.alert('Başarılı', 'Doğrulama başarılı!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Hata', json.message || 'Doğrulama başarısız oldu.');

      }
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }


  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GSM no Doğrulama</Text>
      <Text style={styles.subtitle}>
        Telefonuna gelen 6 haneli doğrulama kodunu girin
      </Text>
      <Text style={styles.timer}>
       {`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`}
      </Text>
      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>DOĞRULA</Text>
      </TouchableOpacity>     
      <View style={styles.footer}>
        <Text>SMS kodu size ulaşmadı mı?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Kodu Tekrar Gönder</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>GSM numaranız yanlış mı?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Düzenle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


