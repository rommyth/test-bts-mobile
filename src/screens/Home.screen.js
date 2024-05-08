import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tailwind from 'twrnc';
import {
  reqDeleteChecklist,
  reqGetAllChecklist,
} from '../libs/requests/Checklist.request';
import {XMarkIcon} from 'react-native-heroicons/mini';
import ItemChecklist from '../components/organisms/ItemChecklist.organism';

const Home = () => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const initData = async () => {
    setLoading(true);
    const response = await reqGetAllChecklist();
    setLoading(false);

    setListData(response);
  };

  useEffect(() => {
    initData();
  }, []);

  //   General Function
  //   =======================

  const onDeleteList = async id => {
    const isConfirm = await new Promise(resolve => {
      Alert.alert('Confirm Delete', 'Are you sure want to delete?', [
        {
          text: 'Delete',
          onPress: () => resolve(true),
        },
        {
          text: 'Cancel',
          onPress: () => resolve(false),
          style: 'cancel',
        },
      ]);
    });

    if (isConfirm) {
      await reqDeleteChecklist(id);
      return initData();
    }
  };

  return (
    <SafeAreaView style={tailwind`min-w-full min-h-full bg-white`}>
      <View style={tailwind`flex-1`}>
        <ScrollView>
          <View style={tailwind`px-6 pt-6`}>
            <Text style={tailwind`text-black`}>Selamat Datang</Text>
            <View style={tailwind`flex-1 mt-5`}>
              <FlatList
                data={listData}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={() => (
                  <Text style={tailwind`text-gray-400 text-center mt-5`}>
                    Tidak ada list saat ini
                  </Text>
                )}
                renderItem={({item}) => {
                  return (
                    <ItemChecklist
                      data={item}
                      onDelete={() => onDeleteList(item.id)}
                    />
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
