import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { useState } from 'react';

export default function MainPage() {

    const [text, setText] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const handleAdd = () => {
    if (text.trim()) {
        setItems([...items, text]);
        setText(''); 
        }
    };

    return(
        <View className="w-full p-5 gap-3">
            <View className="p-2 text-xl tracking-wider bg-indigo-600 text-white text-center">
                {`< Pinca, Seth A. >`}
            </View>

            <View className="flex flex-col gap-4 flex-1">
                <TextInput 
                    className="border-2 border-black focus:border-gray-300 text-xl p-3" 
                    placeholder="Enter Name" 
                    underlineColorAndroid="transparent"

                    value={text}
                    onChangeText={(val) => setText(val)}
                />   

                <Pressable onPress={handleAdd} className="p-4 bg-blue-500">
                    <Text className='text-white text-xl text-center'>
                        +ADD
                    </Text>
                </Pressable>

                <FlatList
                    className="border-2 border-black flex-1 p-2"
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View className="p-4 border-b border-gray-200 bg-green-500 mb-2 rounded">
                            <Text className="text-xl text-center text-white">{item}</Text>
                        </View>
                    )}
                />
            </View>
        </View> 
    )
}