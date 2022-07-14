import {View,Text,StyleSheet,ScrollView} from 'react-native';
import NowPlaying from '../components/moviecomponents/NowPlaying';
import People from '../components/moviecomponents/People';
import TopPartMovie from '../components/moviecomponents/TopPartMovie';
import TopRated from '../components/moviecomponents/TopRated';
import UpComing from '../components/moviecomponents/UpComing';
import StyleMain from '../utils/StyleMain';
import Popular from '../components/moviecomponents/Popular'

const Movies = () =>{
    return(
        <ScrollView  style={StyleMain.containerMain}>
        <View>
            <TopPartMovie/>
           
       
            <NowPlaying
            url= "/movie/now_playing"
            />

            <Text style={StyleMain.text}>Trending people</Text>
            <People
            url = "/trending/person/week"
            ///movie/upcoming
            />

<Text style={StyleMain.text}>Up Coming</Text>
            <UpComing
             url = "/movie/upcoming"
            />

<Text style={StyleMain.text}>Top Rated</Text>
            <TopRated
             url = "/movie/top_rated"
            />

<Text style={StyleMain.text}>Popular Movies</Text>
            <Popular
             url = "/movie/popular"
            />


        </View>
        </ScrollView>
    )
}



export default Movies;