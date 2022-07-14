import {createStackNavigator} from '@react-navigation/stack'
import Movies from '../screens/Movies';
import TvShows from '../screens/TvShows';
import Search from '../screens/Search';
import TvDetails from '../DetailScreens/TvDetails';
import OnAirMore from '../subscreens/OnAirMore';
import OnAirTodayMore from '../subscreens/OnAirTodayMore';
import TopRatedMore from '../subscreens/TopRatedMore';
import DiscoverMore from '../subscreens/DiscoverMore';

const Stack = createStackNavigator()

const TvScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="TvShows"   component={TvShows}  options={{ headerShown: false }}/> 
            <Stack.Screen name="TvDetails"   component={TvDetails}  options={{ headerShown: false }}/>  
            <Stack.Screen name="OnAirTodayMore"   component={OnAirTodayMore}  options={{ headerShown: false }}/>
            <Stack.Screen name="TopRatedMore"   component={TopRatedMore}  options={{ headerShown: false }}/>
            <Stack.Screen name="OnAirMore"   component={OnAirMore}  options={{ headerShown: false }}/>
            <Stack.Screen name="DiscoverMore"   component={DiscoverMore}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
export {TvScreen};


const MovieScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen  name="Movies"  component={Movies} options={{ headerShown: false }}/>          
        </Stack.Navigator>
    )
}
export {MovieScreen};


const SearchScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>          
        </Stack.Navigator>
    )
}
export {SearchScreen};