import {View,Text,StatusBar,Button,ScrollView, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import DiscoverTv from '../components/tvcomponents/DiscoverTv';
import OnAirToday from '../components/tvcomponents/On_Air_Today';
import StyleMain from '../utils/StyleMain';
import ItemSeparator from '../utils/ItemSeparator';
import OnAir from '../components/tvcomponents/OnAir';
import Latest from '../components/tvcomponents/Latest';
import TopPartTv from '../components/tvcomponents/TopPartTv';
import TopRated from '../components/tvcomponents/TopRated';


const TvShows = (props,navigation) =>{//navigation
    return(
       <ScrollView style={StyleMain.containerMain}>
        <View  >
           <StatusBar barStyle="light-content" backgroundColor="#151C26" />
            <TopPartTv/>

            {/* <View style={styles.parent}>
            <Text style={StyleMain.text}>On Air</Text>
            <Button onPress={() =>props.navigation.navigate('DiscoverMore', { name: 'Jane' })}
             title='See all'
              />  
            </View>
            <DiscoverTv/> */}
            


            <View style={styles.parent}>
            <Text style={StyleMain.text}>On Air</Text>
            <Button onPress={() =>props.navigation.navigate('OnAirMore', { name: 'Jane' })}
             title='See all'
              />  
            </View>
           


         
            <OnAir
             title="On air"
             url="/tv/on_the_air"
             navigation={props.navigation}
            />
           <ItemSeparator/>

           <View style={styles.parent}>
            <Text style={StyleMain.text}>Latest</Text>
           </View>


           <Latest
           url="/tv/latest"
           navigation={props.navigation}
           />
           <ItemSeparator/>

           <View style={styles.parent}>
            <Text style={StyleMain.text}>Top Rated</Text>
            <Button  title='See all' onPress={() =>props.navigation.navigate('TopRatedMore', { name: 'Jane' })}/>  
           </View>

         
            <TopRated
             title="Latest Movies"
             url="/tv/top_rated"
             navigation={props.navigation}
            />
           
        

            <View style={styles.parent}>
            <Text style={StyleMain.text}>On Air Today</Text>
            <Button  title='See all'  onPress={() =>props.navigation.navigate('OnAirTodayMore', { name: 'Jane' })}/>  
           </View>

             <OnAirToday
             title="Trending Movies"
             url="/tv/airing_today"
             navigation={props.navigation}
            />
           
        </View>
       </ScrollView>
         
       
      
    );
}

const styles = StyleSheet.create({
    parent: {
       
        flexDirection:'row',
        justifyContent: 'space-between',
       marginTop:'3%',
        marginEnd:'5%',
        marginBottom:'2%',
     
    },
   
});

export default TvShows;