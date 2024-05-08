import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tailwind from 'twrnc';
import CustomTextInput from '../components/molecules/CustomTextInput.molecule';
import CustomButton from '../components/molecules/CustomButton.molecule';
import {reqRegister} from '../libs/requests/Auth.request';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const _handleSubmit = async () => {
    const formData = {
      username,
      email,
      password,
    };

    setLoading(true);
    const response = await reqRegister(formData);
    setLoading(false);

    if (response) {
      navigation.navigate('login');
    }
  };

  return (
    <SafeAreaView style={tailwind`min-h-full min-w-full`}>
      <View style={tailwind`flex-1`}>
        <ScrollView contentContainerStyle={tailwind`grow-1`}>
          {/* Form */}
          <View style={tailwind`flex-1 items-center justify-center px-6`}>
            <View>
              <Text style={[tailwind`text-3xl text-yellow-600 font-bold`]}>
                Register
              </Text>
            </View>

            <View style={tailwind`mt-5 flex-col gap-2 w-full`}>
              <View>
                <Text style={tailwind`text-neutral-600`}>Username</Text>
                <CustomTextInput onChangeText={text => setUsername(text)} />
              </View>
              <View>
                <Text style={tailwind`text-neutral-600`}>Email</Text>
                <CustomTextInput
                  keyboardType="email-address"
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View>
                <Text style={tailwind`text-neutral-600`}>Password</Text>
                <CustomTextInput
                  secureTextEntry={true}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View style={tailwind`mt-8`}>
                <CustomButton
                  text={'Register'}
                  disabled={loading}
                  onPress={_handleSubmit}
                />
              </View>
            </View>

            <View style={tailwind`mt-8`}>
              <Text style={tailwind`text-gray-500 text-xs`}>
                Alread have an account?{' '}
                <Text
                  style={tailwind`text-yellow-600`}
                  onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;
