import { useState, useEffect } from 'react';
import { Text,View,Image, Button,StyleSheet,ScrollView } from 'react-native';
import StyleMain from '../utils/StyleMain';
import { IMAGE_POSTER_URL } from '../utils/Config';
import { GET } from '../service/Api';
import Loader from '../utils/Loader';
import ImageView from 'react-native-image-viewing';
import VideosTrailer from '../components/VideosTrailer';
import Gallery from '../components/tvcomponents/Gallery';
import TopRated from '../components/tvcomponents/TopRated';
import OnAir from '../components/tvcomponents/OnAir';
const TvDetails = props => {
   
    const [loading, setLoading] = useState(true);
    const [details, setTvDetails] = useState({});

    useEffect(() => {
        const getTvDetails = async () => {
            const data = await GET(`/tv/${props.route.params.tvId}`);
            setTvDetails(data);
            setLoading(false);
        };

        getTvDetails();
    }, []);

    

    return (
        <ScrollView style={StyleMain.containerMain}>
           
     <View>
       
       
        <View>
             <Image
                 source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
                 style={StyleMain.imageBg}
             />


{/* 
<ImageView
       images={}
       imageIndex={}
       onRequestClose={() => }
      /> */}


         <Text style={StyleMain.textD}>{details.original_name}</Text>
         </View>

         {/* <View style={{display: 'flex', flexDirection: 'row'}}>
            {getGenre()}
          </View> */}

          
         <View style={StyleMain.detailsContainer}>
            <View>
              <Text style={StyleMain.heading}>STATUS</Text>
              <Text style={StyleMain.details}>{details.status}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>DURATION</Text>
              <Text style={StyleMain.details}>{details.episode_run_time} min.</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>FIRST RELEASE DATE</Text>
              <Text style={StyleMain.details}>{details.first_air_date}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>TAGLINE</Text>
              <Text style={StyleMain.details}>{details.tagline}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>TYPE</Text>
              <Text style={StyleMain.details}>{details.type}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>VOTE AVERAGE</Text>
              <Text style={StyleMain.details}>{details.vote_average}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>VOTE COUNT</Text>
              <Text style={StyleMain.details}>{details.vote_count}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>NUMBER OF EPISODES</Text>
              <Text style={StyleMain.details}>{details.number_of_episodes}</Text>
            </View>
            {/* <View>
              <Text style={StyleMain.heading}>NUMBER OF SEASONS</Text>
              <Text style={StyleMain.details}>{details.number_of_seasons}</Text>
            </View> */}

            {/* <View>
              <Text style={StyleMain.heading}>NEXT EPISODE TO AIR</Text>
              <Text style={StyleMain.details}>{details.next_episode_to_air}</Text>
            </View> */}

            {/* <View>
              <Text style={StyleMain.heading}>LAST EPISODE TO AIR</Text>
              <Text style={StyleMain.details}>{details.last_air_date}</Text>
            </View> */}

            <View>
              <Text style={StyleMain.heading}>HOMEPAGE</Text>
              <Text style={StyleMain.details}>{details.homepage}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>IN PRODUCTION</Text>
              <Text style={StyleMain.details}>{details.in_production}</Text>
            </View>

            <View>
              <Text style={StyleMain.heading}>OVERVIEW</Text>
              <Text style={StyleMain.details}>{details.overview}</Text>
            </View>
          </View>


        <View>
          <Text style={StyleMain.heading}>Trailer</Text>
        <VideosTrailer
         title = "Trailer"
         url = {`/tv/${props.route.params.tvId}/videos`}
        />  
        </View>

        <View>
        <Text style={StyleMain.heading}>Gallery</Text>
        <Gallery
            title="Gallery"
            url={`/tv/${props.route.params.tvId}/images`}
           
          />
        </View>
        

          <View>
          <View style={styles.parent}>
            <Text style={StyleMain.text}>Similar shows</Text>
            <Button  title='See all' onPress={() =>props.navigation.navigate('TopRatedMore', { name: 'Jane' })}/>  
           </View>
            <TopRated
              title="Similar"
              url={`/tv/${props.route.params.tvId}/similar`}
              navigation={props.navigation}
            />
          </View>
         

          <View>
          <View style={styles.parent}>
            <Text style={StyleMain.text}>Recommendations</Text>
            <Button  title='See all' onPress={() =>props.navigation.navigate('TopRatedMore', { name: 'Jane' })}/>  
           </View>
            <TopRated
              title="Recommendations"
              url={`/tv/${props.route.params.tvId}/recommendations`}
              navigation={props.navigation}
            />
          </View>

     </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
  parent: {
     
      flexDirection:'row',
      justifyContent: 'space-between',
     marginTop:'3%',
      marginEnd:'5%',
      marginBottom:'2%',
   
  },
 
});


export default TvDetails;