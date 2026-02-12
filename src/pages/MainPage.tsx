import { View, Text, TextInput, Pressable, FlatList, Alert } from 'react-native';
import { useState } from 'react';

export default function MainPage() {

    const [text, setText] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const handleAdd = () => {
        const textToAdd: string = text.trim();

        if(!textToAdd) {
            Alert.alert("Type a name first!")
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

    return(
        <View className="flex-1 p-5 gap-3">
            <View className="p-2 text-xl tracking-wider select-none bg-indigo-600  transition-colors duration-300 text-white text-center">
                <Text className="text-xl tracking-wider text-white text-center">
                    {`< Pinca, Seth A. >`}
                </Text>
            </View>

            <View className="flex flex-col gap-4 flex-1">
                <TextInput 
                    className="border-2 border-black bg-white focus:border-indigo-600 focus:bg-indigo-50 text-xl p-3 transition-all duration-300" 
                    placeholder="Enter Name" 
                    underlineColorAndroid="transparent"

                    value={text}
                    onChangeText={(val) => setText(val)}
                />   

                <Pressable onPress={handleAdd} 
                        className="p-4 bg-blue-500 select-none active:bg-blue-700 active:scale-95 transition-all duration-100 rounded-lg">
                    <Text className='text-white text-xl text-center tracking-widest'>
                        + ADD
                    </Text>
                </Pressable>

                <FlatList
                    className="border-2 border-black flex-1 p-2"
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View className="p-4 border-b select-none border-gray-200 bg-green-500active:scale-95 transition-all duration-300 mb-2 rounded">
                            <Text className="text-xl text-center text-white">{item}</Text>
                        </View>
                    )}
                />
            </View>
        </View> 
    )
}