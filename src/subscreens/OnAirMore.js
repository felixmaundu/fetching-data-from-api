import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native';
import OnAirMoreSub from '../components/tvSubScreenComponents/OnAirMoreSub';
import StyleMain from '../utils/StyleMain';

const OnAirMore = (props) => {
    return (
        <ScrollView style={StyleMain.containerMain}>
            <Text style={StyleMain.text}>On Air more</Text>
            <SafeAreaView>
                <TextInput
                    style={StyleMain.input}
                    placeholder="Search Shows..."
                    placeholderTextColor={'white'}
                    selectionColor='#fff'
                />
            </SafeAreaView>



            <View>
                <OnAirMoreSub
                  title="On air more"
                  url="/tv/on_the_air"
                  navigation={props.navigation}
                />
            </View>
        </ScrollView>

    )
}
export default OnAirMore