import React, {useEffect, useState} from 'react';
import {View, Text,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GET} from '../../service/Api';
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_POSTER_URL,POSTER_IMAGE,ANOTHER_IMAGE} from '../../utils/Config';
import Constants from '../../utils/Constants';
import StyleMain from '../../utils/StyleMain';



const DiscoverTv = props => {
    const [movies, setDiscoverTv] = useState([]);
    const [images, setImages] = useState([]);

    const navigation = useNavigation();

    function navigateToDicoverMore() {
        navigation.navigate("DiscoverMore");
    }
  
    useEffect(() => {
      const getDiscoverTv = async () => {
        const response = await GET('/discover/tv');
        setDiscoverTv(response.results);
   
        const images = response.results.map(
          data => `${IMAGE_POSTER_URL}${data.poster_path}`,
        );
        // const nameTv = response.results.map(
        //     data => {data.name}
        // )
  
        let backImages = [];
        //let nameTv = [];
        for (let i = 0; i < 20; ++i) {
          backImages = [...backImages, images[i]];
          //nameTv = [...nameTv,nameTv[i]];
        }
  
        setImages(backImages);
      };
  
      getDiscoverTv();
    }, []);
  
    return (
    
    <View>
          <Text style={StyleMain.text}>Discover Tv</Text>
   
   
        <SliderBox
        sliderBoxHeight={350}
       
          images={images}

          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          autoplay={false}
        //   onCurrentImagePressed={index =>
        //     props.navigation.navigate('TvDetails', {movieId: movies[index].id})
        //   }
        
        />

      </View>
    );
  };
  
  export default DiscoverTv;