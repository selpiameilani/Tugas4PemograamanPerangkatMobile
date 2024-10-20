import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Order: {name: string; image: any; price: string};
  DetailExample: {name: string; image: any; price: string};
};

type OrderProps = {
  route: RouteProp<RootStackParamList, 'Order'>;
  navigation: StackNavigationProp<RootStackParamList, 'Order'>;
};

const Order = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { name = 'Cake', image = require('../../assets/cake.jpeg'), price = '3.80',
  } = route.params || {};

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/undo.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order</Text>
      </View>

      <View style={styles.deliveryOptionContainer}>
        <TouchableOpacity style={styles.deliveryButtonSelected}>
          <Text style={styles.deliveryTextSelected}>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliveryButton}>
          <Text style={styles.deliveryText}>Pick Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressLabel}>Delivery Address</Text>
        <Text style={styles.address}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.subAddress}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
        <View style={styles.addressButtonsContainer}>
          <TouchableOpacity style={styles.addressButton}>
            <Image
              source={require('../../assets/edit.png')}
              style={styles.smallIcon}
            />
            <Text style={styles.addressButtonText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addressButton}>
            <Image
              source={require('../../assets/note.png')}
              style={styles.smallIcon}
            />
            <Text style={styles.addressButtonText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productContainer}>
        <Image source={image} style={styles.productImage} />
        <View>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productDescription}>with Strawberry</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={handleDecrement}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={handleIncrement}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.discountContainer}>
        <Image
          source={require('../../assets/diskon.png')}
          style={styles.discountIcon}
        />
        <Text style={styles.discountText}>1 Discount is applied</Text>
        <Image
          source={require('../../assets/back.png')}
          style={styles.arrowRight}
        />
      </View>

      <View style={styles.paymentSummary}>
        <Text style={styles.paymentTitle}>Payment Summary</Text>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Price</Text>
          <Text style={styles.paymentValue}>{price}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Delivery Fee</Text>
          <Text style={styles.paymentValue}>$ 1.0</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total Payment</Text>
          <Text style={styles.paymentTotal}>$ 5.53</Text>
        </View>
      </View>

      <View style={styles.paymentMethodContainer}>
        <Image
          source={require('../../assets/payment.png')}
          style={styles.paymentIcon}
        />
        <Text style={styles.paymentMethodText}>Cash</Text>
        <Text style={styles.paymentMethodAmount}>$ 5.53</Text>
        <Image
          source={require('../../assets/option.png')}
          style={styles.dotsIcon}
        />
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE8E8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B3C30',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  icon: {
    width: 24,
    height: 24,
  },
  deliveryOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  deliveryButtonSelected: {
    backgroundColor: '#ffb6c1',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  deliveryButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  deliveryTextSelected: {
    color: '#4B3C30',
    fontWeight: '600',
  },
  deliveryText: {
    color: '#4B3C30',
    fontWeight: '600',
  },
  addressContainer: {
    marginBottom: 50,
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#4B3C30',
  },
  address: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color:'#4B3C30',
  },
  subAddress: {
    fontSize: 12,
    color: '#4B3C30',
    marginBottom: 10,
  },
  addressButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  addressButton: {
    borderColor: '#ffb6c1',
    borderWidth: 1,
    padding: 15,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  smallIcon: {
    width: 15,
    height: 16,
  },
  addressButtonText: {
    color: '#4B3C30',
    marginLeft: 10,
    marginTop: -2,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 54,
    height: 54,
    borderRadius: 10,
    marginRight: 10,
  },
  productName: {
    fontSize: 19,
    fontWeight: '600',
    color:'#4B3C30',
  },
  productDescription: {
    fontSize: 12,
    color: '#4B3C30',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  quantityButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    width: 24,
    height: 24,
    justifyContent: 'center', 
  },
  quantityButtonText: {
    fontWeight: '600',
    textAlign: 'center',
    color:'#4B3C30',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#4B3C30',
  },
  discountContainer: {
    padding: 10,
    borderRadius: 14,
    marginBottom: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ffb6c1',
  },
  discountIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  discountText: {
    color: '#2F2D2C',
  },
  arrowRight: {
    width: 12,
    height: 12,
    marginLeft: 'auto',
  },
  paymentSummary: {
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4B3C30',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  paymentLabel: {
    fontSize: 14,
    color:  '#4B3C30',
  },
  paymentValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B3C30',
  },
  paymentTotal: {
    fontSize: 14,
    fontWeight: '600',
    color:  '#4B3C30',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentMethodText: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#4B3C30',
  },
  paymentMethodAmount: {
    fontSize: 14,
    marginLeft: 1,
    color: '#4B3C30',
  },
  dotsIcon: {
    width: 24,
    height: 24,
    marginLeft: 'auto',
  },
  paymentIcon: {
    width: 24,
    height: 24,
  },

  orderButton: {
    backgroundColor:'#ffb6c1',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },
  orderButtonText: {
    color:  '#4B3C30',
    fontSize: 18,
    fontWeight: '600',
  },
});
