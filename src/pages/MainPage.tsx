import { View, Text, TextInput, Pressable, FlatList, Alert } from 'react-native';
import { useState } from 'react';

export default function MainPage() {
    const [text, setText] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const handleAdd = () => {
        const textToAdd: string = text.trim();

        if(!textToAdd) {
            Alert.alert("Type a name first!");
            return;
        };

        if(items.includes(textToAdd)) {
            Alert.alert("Cannot enter existing names.");
        }
        else {
            setItems([...items, textToAdd]);
            setText(''); 
        }
    };

    const handleDelete = (name: string) => {
    alert(`Deleting: ${name}`);

    const filteredItems = items.filter((item) => item !== name);
    setItems(filteredItems);
    };

    return(
        <View className="flex-1 p-5 gap-3 bg-gray-50">
            <View className="p-2 bg-indigo-600">
                <Text className="text-xl tracking-wider text-white text-center font-bold">
                    {`< Pinca, Seth A. >`}
                </Text>
            </View>

            <View className="flex-col gap-4 flex-1">
                <TextInput 
                    className="border-2 border-black bg-white text-xl p-3" 
                    placeholder="Enter Name" 
                    placeholderTextColor="#999"
                    value={text}
                    onChangeText={(val) => setText(val)}
                />   

                <Pressable 
                    onPress={handleAdd} 
                    className="p-4 bg-blue-500 active:bg-blue-700 rounded-lg"
                >
                    <Text className='text-white text-xl text-center tracking-widest font-bold'>
                        + ADD
                    </Text>
                </Pressable>

                <FlatList
                    className="border-2 border-black flex-1 p-2 bg-white"
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View className="flex-row justify-between items-center p-2 border-2 border-black bg-green-500 mb-2 rounded">
                            <Text className="text-xl text-center text-white font-medium">{item}</Text>
                            <Pressable 
                            onPress = {() => handleDelete(item)}
                            className="bg-red-600 p-4 rounded-lg "><Text className="text-white">DELETE</Text></Pressable>
                        </View>
                    )}
                />
            </View>
        </View> 
    );
}