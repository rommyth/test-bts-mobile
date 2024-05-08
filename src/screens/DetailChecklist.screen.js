import {View, Text, SafeAreaView, FlatList, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  reqAddChecklistDetail,
  reqDeleteDetailChecklist,
  reqGetDetailChecklist,
  reqUpdateDetailChecklist,
} from '../libs/requests/Checklist.request';
import tailwind from 'twrnc';
import ItemChecklistDetail from '../components/organisms/ItemChecklistDetail.organism';
import CustomTextInput from '../components/molecules/CustomTextInput.molecule';
import CustomButton from '../components/molecules/CustomButton.molecule';
import ButtonFloatBottom from '../components/molecules/ButtonFloatBottom.molecule';

const DetailChecklist = ({navigation, route}) => {
  const {id} = route.params.item;
  const [listData, setListData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const initData = async () => {
    const response = await reqGetDetailChecklist(id);

    setListData(response);
  };

  useEffect(() => {
    initData();
  }, []);

  // General Function
  // =========================

  const onCheckItem = async itemId => {
    await reqUpdateDetailChecklist(id, itemId);
    return initData();
  };

  const onDeleteItem = async itemId => {
    await reqDeleteDetailChecklist(id, itemId);
    return initData();
  };

  const onAddChecklist = async () => {
    const response = await reqAddChecklistDetail(id, {itemName: name});
    if (response) {
      setShowModal(false);
      return initData();
    }
  };

  return (
    <SafeAreaView style={tailwind`bg-white min-w-full min-h-full`}>
      <View style={tailwind`flex-1 p-6`}>
        <Text style={tailwind`text-gray-500 text-xs`}>
          Detail Chekclist/{id}
        </Text>
        <Text style={tailwind`text-black text-base mt-2`}>List Data</Text>
        <View>
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
                <ItemChecklistDetail
                  data={item}
                  onCheck={() => onCheckItem(item.id)}
                  onDelete={() => onDeleteItem(item.id)}
                />
              );
            }}
          />
        </View>

        <ButtonFloatBottom onPress={() => setShowModal(true)} />

        <Modal
          visible={showModal}
          transparent
          onRequestClose={() => setShowModal(false)}
          animationType="fade">
          <View
            style={tailwind`bg-black/20 w-full h-full items-center justify-center`}>
            <View
              style={tailwind`w-[90%] rounded-md p-4 bg-white shadow gap-2`}>
              <Text style={tailwind`text-bold text-black`}>Name</Text>
              <CustomTextInput
                placeholder="Enter Name..."
                onChangeText={text => setName(text)}
              />
              <CustomButton text={'Add'} onPress={onAddChecklist} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DetailChecklist;
