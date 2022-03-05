import React from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {NavigationProps} from '../../routes/navigation/interfaces/navigation';
import {ROUTES} from '../../routes/navigation/routes';
import styles from './styles';
import axios from 'axios';
import dayjs from 'dayjs';

import RNPickerSelect from 'react-native-picker-select';

const DetailsScreen: React.FC<NavigationProps> = ({
  navigation,
  route,
}): JSX.Element => {
  const [countryDetails, setCountryDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const {params} = route;
  console.log('params', params);

  React.useEffect(() => {
    fetchData();
    navigation.setOptions({title: params.Country});
  }, []);

  const fetchData = async () => {
    const {data} = await axios.get(
      `https://api.covid19api.com/total/dayone/country/${params?.Slug}/status/confirmed`,
    );
    if (data) {
      console.log('data ======>', data);
      setCountryDetails(data);
    }
  };

  const formatDate = async (sort: any) => {
    setLoading(true);
    try {
      const date = await countryDetails.sort(function (a, b) {
        return sort === 'dsc'
          ? new Date(b.Date) - new Date(a.Date)
          : new Date(a.Date) - new Date(b.Date);
      });
      setCountryDetails(date);
    } catch (error) {
      console.error('Error al ordenar');
    } finally {
      setLoading(false);
    }
  };

  const sortCases = async (sort: any) => {
    setLoading(true);
    try {
      const date = await countryDetails.sort(function (a, b) {
        return sort === 'dsc' ? b.Cases - a.Cases : a.Cases - b.Cases;
      });
      setCountryDetails(date);
    } catch (error) {
      console.error('Error al ordenar');
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{padding: 16}} key={index}>
        <Text>Fecha: {item.Date}</Text>
        <Text>Casos: {item.Cases}</Text>
      </View>
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
    return (
      <View style={{flex: 1}}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        initialNumToRender={10}
        ItemSeparatorComponent={ItemDivider}
        data={countryDetails}
        renderItem={renderItem}
        keyExtractor={item => item.ISO2}
      />
      <RNPickerSelect
        onValueChange={value => formatDate(value)}
        placeholder={{label: 'Ordernar por fecha'}}
        items={[
          {label: 'Ascendente', value: 'asc'},
          {label: 'descendente', value: 'dsc'},
        ]}
      />
      <RNPickerSelect
        onValueChange={value => sortCases(value)}
        placeholder={{label: 'Ordernar por Casos'}}
        items={[
          {label: 'Ascendente', value: 'asc'},
          {label: 'descendente', value: 'dsc'},
        ]}
      />
    </View>
  );
};

export default DetailsScreen;
