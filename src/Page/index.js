import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import InputFilter from '../components/input'
import Card from '../components/card'
import { Data } from '../data/data'

export default function Page() {

    const [DataFilter, setDataFilter] = useState(Data)

    return (
        <View style={styles.container}>
            <InputFilter text={"Filtrar"} placeholder={"Digite o nome da fruta"}
                onChangeText={(value) => {
                    const newData = DataFilter.filter((item) => {
                        const text = item.name.toUpperCase();
                        const seachText = value.toUpperCase();
                        return text.includes(seachText);
                    });
                    if (value !== '') {
                        setDataFilter(newData);
                    } else {
                        setDataFilter(Data);
                    }
                }}
            />
            <FlatList
                style={styles.list}
                data={DataFilter}
                renderItem={({ item }) => <Card text={item.name} />}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />} />
        </View>
    )
}