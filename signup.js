import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox'; 
import { useNavigation } from '@react-navigation/native'; 
import styles from './styles';
import PhoneInput from 'react-native-phone-number-input';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const navigation = useNavigation(); 

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Hata", "Geçerli bir e-posta adresi giriniz.");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);

    if (password.length < minLength) {
      Alert.alert('Geçersiz Şifre', `Şifreniz en az ${minLength} karakter uzunluğunda olmalıdır.`);
      return false;
    }

    if (!hasUpperCase) {
      Alert.alert('Geçersiz Şifre', 'Şifreniz en az bir büyük harf içermelidir.');
      return false;
    }

    if (!hasLowerCase) {
      Alert.alert('Geçersiz Şifre', 'Şifreniz en az bir küçük harf içermelidir.');
      return false;
    }

    if (!hasNumber) {
      Alert.alert('Geçersiz Şifre', 'Şifreniz en az bir rakam içermelidir.');
      return false;
    }

    if (!hasSpecialChar) {
      Alert.alert('Geçersiz Şifre', 'Şifreniz en az bir özel karakter içermelidir.');
      return false;
    }

    return true;
  };

  const validatePasswordsMatch = () => {
    if (password !== confirmPassword) {
      Alert.alert("Hata", "Şifreler aynı değil. Lütfen şifrelerinizi tekrar kontrol edin.");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (validateEmail() && validatePassword(password) && validatePasswordsMatch()) {
        try {
            const response = await fetch('https://api.dev.auth.tirport.com/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    password: password,
                }),
            });

            const json = await response.json();
            console.log('API Yanıtı:', JSON.stringify(json, null, 2));

            if (json.statusCode === 400) {
                Alert.alert('Hata', 'Geçersiz kayıt isteği');
            } else if (json.statusCode === 409) {
                Alert.alert('Hata', 'Email zaten kayıtlı');
            } else if (json.statusCode === 500) {
                Alert.alert('Hata', 'Sunucu hatası');
            } else {
                Alert.alert('Başarılı', 'Kayıt başarılı!');
                

                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('phoneOtp', '123123');  


                navigation.navigate('GSMVerification');
            }

        } catch (error) {
            console.log('Error:', error);
            Alert.alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    }
};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Kayıt Ol</Text>
          <Text style={styles.confirmationText}>Kaydınızı oluşturmak için kişisel bilgilerinizi doldurun.</Text>

          <Text style={styles.label}>Ad Soyad</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Ad Soyad"
              value={name}
              onChangeText={setName}
            />
          </View>

          <Text style={styles.label}>E-posta</Text>
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
              textContentType="emailAddress"
            />
          </View>

          <View style={styles.phoneInputContainer}>
            <PhoneInput
              defaultValue={phone}
              defaultCode="TR"
              layout="first"
              onChangeText={(text) => {
                setPhone(text);
              }}
              containerStyle={styles.phoneContainer}
              textInputStyle={styles.phoneInput}
              codeTextStyle={styles.codeText}
              withDarkTheme
            />
          </View>

          <Text style={styles.label}>Şifre</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="************"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              autoComplete="off"
              autoCorrect={false}
              textContentType="password"
              importantForAutofill="no"
            />

            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Ionicons
                name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.errorText}>Şifre en az 8 karakter uzunluğunda, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.</Text>

          <Text style={styles.label}>Şifre Tekrar</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="************"
              value={confirmPassword}
              onChangeText={setConfirmPassword} 
              secureTextEntry={!isPasswordVisible}
              autoComplete="off"
              autoCorrect={false}
              textContentType="password"
              importantForAutofill="no"
            />

            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Ionicons
                name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <CheckBox
              value={isChecked1}
              onValueChange={setIsChecked1}
            />
            <Text style={styles.confirmationText}>Önemli kampanyalardan haberdar olmak için Rıza Metni kapsamında elektronik ileti almak istiyorum</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <CheckBox
              value={isChecked2}
              onValueChange={setIsChecked2}
            />
            <Text style={styles.confirmationText}>Üyelik Sözleşmesini kabul ediyorum</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <CheckBox
              value={isChecked3}
              onValueChange={setIsChecked3}
            />
            <Text style={styles.confirmationText}>KVKK Politikasını kabul ediyorum</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
