import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Link,
  StackNavigationState,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  DetailExample: {message: string};
  DetailExample2: {data: any};
};

type DetailNavigationProps = NavigationProp<
  RootStackParamList,
  'DetailExample'
>;

const Home = () => {
  const navigation = useNavigation<DetailNavigationProps>();

  const handleGoToDetail = () => {
    navigation.navigate('DetailExample', {message: 'INI VALUE DARI HOME'});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleGoToDetail}>
        <Text
          style={{
            color: 'blue',
            marginTop: 20,
            fontSize: 20,
          }}>
          Go to Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
