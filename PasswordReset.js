import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';

export default function PasswordResetScreen() {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {

    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifre Yenile</Text>
      <Text style={styles.confirmationText}>
        Kayıt olduğunuz telefon numaranızı kullanarak şifrenizi yenileyebilirsiniz
      </Text>
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          defaultValue={phone}
          defaultCode="TR"
          layout="first"
          onChangeText={(text) => setPhone(text)}
          containerStyle={styles.phoneContainer}
          textInputStyle={styles.phoneInput}
          codeTextStyle={styles.codeText}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Devam</Text>
      </TouchableOpacity>
    </View>
  );
}
