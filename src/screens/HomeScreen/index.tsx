import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationProps} from '../../routes/navigation/interfaces/navigation';
import {ROUTES} from '../../routes/navigation/routes';
import styles from './styles';
import axios from 'axios';
import CountryFlag from 'react-native-country-flag';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import Loader from '../../components/Loader';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC<NavigationProps> = () => {
  const [countries, setCountries] = React.useState([]);
  const [loading, setSetLoading] = React.useState(false);
  const navigation = useNavigation();
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setSetLoading(true);
    try {
      const {data} = await axios.get('https://api.covid19api.com/countries');
      if (data) {
        setCountries(data);
      }
    } catch (error) {
      console.error('Error call api countries', error);
    } finally {
      setSetLoading(false);
    }
  };

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          navigation.navigate(ROUTES.DETAILS, {
            Slug: item.Slug,
            Country: item.Country,
          });
        }}>
        <CountryFlag isoCode={item.ISO2} size={25} />
        <Text style={styles.text}>{item.Country}</Text>
        <Icon.Button
          name="arrow-forward"
          size={25}
          backgroundColor={'transparent'}
          color={colors.secondary}
        />
      </TouchableOpacity>
    );
  };

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        initialNumToRender={10}
        ItemSeparatorComponent={ItemDivider}
        data={countries}
        renderItem={renderItem}
        keyExtractor={item => item.ISO2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
