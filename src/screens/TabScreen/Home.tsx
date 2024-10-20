import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
('');

const products = [
  {
    id: '1',
    name: ' Cake',
    description: ' whith strawberry',
    image: require('../../assets/cake.jpeg'),
    price: '$4.50',
    rating: 4.8,
  },
  {
    id: '2',
    name: ' Cookies',
    description: ' whith strawberry',
    image: require('../../assets/cookies.jpg'),
    price: '$4.90',
    rating: 4.85,
  },
  {
    id: '3',
    name: ' Drink',
    description: ' whith strawberry',
    image: require('../../assets/drink.jpeg'),
    price: '$4.10',
    rating: 4.77,
  },
  {
    id: '4',
    name: ' Ice Cream',
    description: ' whith strawberry',
    image: require('../../assets/icecream.jpeg'),
    price: '$4.35',
    rating: 4.9,
  },
];

type RootStackparamList = {
  Home: undefined;
  DetailExample: {message: String};
  profile: undefined;
};
type DetailNavigationProps = NavigationProp<
  RootStackparamList,
  'DetailExample'
>;

const strawberry = () => {
  const navigation = useNavigation<DetailNavigationProps>();

  const handleProductPress = (product: any) => {
    navigation.navigate('DetailExample', {
      message: 'Product Details',
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      ranting: product.ranting,
    });
  };

  return (
    <View style={{backgroundColor: '#FDE8E8'}}>
      <ScrollView>
        {/* Other components */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Lokasi}>Location</Text>
            <Text
              style={{
                width: 143,
                height: 18,
                fontFamily: 'sora',
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 17.64,
                color: '#8B5A2B',
              }}>
              Sukabumi, Indonesia.
            </Text>
          </View>
          <View>
            <Image
              source={require('../../assets/selpi.jpg')}
              style={styles.Avatar}></Image>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Search Strawberry"
            style={styles.search}></TextInput>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../assets/banner.jpg')}
            style={{width: 350, height: 150, borderRadius: 14}}
          />
        </View>

        <ScrollView horizontal={true} style={styles.ScrollView}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>cake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncase}>
              <Text style={styles.buttonTextcase}>Cookies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncase}>
              <Text style={styles.buttonTextcase}>drink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncase}>
              <Text style={styles.buttonTextcase}>icecream</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.cardWrapper}>
          {products.map(product => (
            <TouchableOpacity key={product.id} onPress={handleProductPress} style={styles.cardContainer}>
              <Image source={product.image} style={styles.cardImage} />
              <Image
                source={require('../../assets/iconStar.jpg')}
                style={styles.iconStar}></Image>
              <Text style={styles.rating}>{product.rating}</Text>

              <Text style={styles.cardTitle}>{product.name}</Text>
              <Text style={styles.cardDescription}>{product.description}</Text>
              <Text style={styles.cardPrice}>{product.price}</Text>
              <Image
                source={require('../../assets/plus.jpg')}
                style={styles.ikonplus}></Image>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default strawberry;

const styles = StyleSheet.create({
  Avatar: {
    width: 44,
    height: 44,
    borderRadius: 20,
  },

  Lokasi: {
    width: 60,
    height: 15,
    color: '#8B5A2B',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.12,
    letterSpacing: 1,
    fontFamily: 'sora',
  },

  search: {
    paddingLeft: 20,
    borderRadius: 50,
    width: 350,
    height: 55,
    borderWidth: 2,
    borderColor: '#FDE8E8',
    backgroundColor: '#ffb6c1',
  },

  ScrollView: {
    marginTop: 20,
    marginLeft: 25,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#ffb6c1',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
  },

  buttoncase: {
    backgroundColor: '#FDE8E8',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginRight: 10,
  },

  buttonText: {
    fontWeight: '600',
    fontFamily: 'sora',
    fontSize: 18,
    color: '#4B3C30',
  },

  buttonTextcase: {
    backgroundColor: '#ffb6c1',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 11,
  },

  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 10,
    marginTop: 70,
  },

  cardContainer: {
    backgroundColor: '#ffb6c1',
    borderRadius: 12,
    padding: 4,
    marginTop: -50,
    marginBottom: 70,
    width: '45%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4B3C30',
    marginTop: 10,
    marginLeft: 5,
  },

  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  cardDescription: {
    marginTop: 1,
    fontSize: 14,
    marginLeft: 7,
    color: '#4B3C30',
  },

  cardPrice: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#4B3C30',
  },

  ikonplus: {
    marginHorizontal: 100,
    marginTop: -30,
    width: 35,
    height: 35,
  },

  iconStar: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginLeft: 9,
    marginTop: 5,
  },

  rating: {
    position: 'absolute',
    color: '#4B3C30',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 35,
  },
});
