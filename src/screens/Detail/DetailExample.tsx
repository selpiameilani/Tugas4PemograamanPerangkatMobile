import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackparamList = {
  DetailExample:  {
    message : string;
    name: string;
    description: string;
    image: any;
    price : string;
    rating : number;
  };
  Order: {
    name : String;
    image : any;
    price : String;
  };
};

type DetailExampleProps = {
  route: RouteProp<RootStackparamList, 'DetailExample'>;
  navigation: NativeStackNavigationProp<RootStackparamList, 'DetailExample'>;
};

const DetailExample: React.FC <DetailExampleProps>= ({ route, navigation}) => {
  const {name, description, image, price, rating} = route.params;
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/cake.jpeg')} style={styles.image} />
      <Text style={styles.title}>Cake</Text>
      <Text style={styles.subtitle}>with Strawbery</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>⭐ 4.8</Text>
        <Text style={styles.ratingCount}>(230)</Text>
      </View>
      <Text style={styles.description}>
        Cake stroberi lembut dengan krim manis dan saus stroberi segar, memberikan perpaduan rasa manis dan asam yang sempurna.} </Text>
      <Text style={styles.readMore}>Read More</Text>
      <View style={styles.sizeContainer}>
        <TouchableOpacity style={[styles.sizeButton, styles.selectedSize ]} onPress={()=> handleSizeSelection('S')}>
          <Text style={styles.sizeText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeButton, styles.selectedSize} onPress={()=> handleSizeSelection('M')} >
          <Text style={styles.sizeText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeButton, styles.selectedSize} onPress={()=> handleSizeSelection('L')}>
          <Text style={styles.sizeText}>L</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.priceAndButtonContainer}>
      <Text style={styles.price}>Price $4.53</Text>
      <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Order', { name, image, price})}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailExample;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FDE8E8',
    flexGrow: 1, // Agar content bisa flexible
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 390,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#4B3C30',
 
  },
  subtitle: {
    fontSize: 15,
    color: '#000',
    marginBottom: 7,
    color : '#4B3C30',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  rating: {
    fontSize: 16,
    color: '#FFA500',
  },
  ratingCount: {
    fontSize: 16,
    color: '#4B3C30',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#4B3C30',
    marginVertical: 3,
  },
  readMore: {
    fontSize: 14,
    color: '#ffb6c1',
    marginVertical: 4,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 1,
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ffb6c1',
    borderColor: '#000',
    borderRadius: 5,
    width: 40,
    alignItems: 'center',

  },
  selectedSize: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ffb6c1',
    borderColor: '#4B3C30',
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  priceAndButtonContainer: {
    flexDirection: 'row', // Untuk menempatkan harga dan tombol dalam satu baris
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B3C30',
  },
  buyButton: {
    backgroundColor: '#ffb6c1',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 50,
    borderWidth: 1,
    
  },
  buyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});