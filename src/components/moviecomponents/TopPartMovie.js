import {Text,View} from 'react-native';
import StyleMain from '../../utils/StyleMain';
import { Ionicons } from "@expo/vector-icons";


const TopPartMovie = ()=> {
 
    return(
        <View style ={StyleMain.topparttv}>
            {/* <Text>top part</Text> */}


        
       
        {/* <View style={{ marginRight: 10 }}> */}
        <Text style={{ fontWeight: '900', fontSize: 25,margin:'5%',color: '#fff'
     }}>Trending Movies</Text>
            <Ionicons //Icon
                name='search'
                type='font-awesome'
                color="#6b6e72"
            />
        {/* </View> */}
        </View>
    )

}
export default TopPartMovie