import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import { IMAGE_POSTER_URL } from '../../utils/Config';
import {GET} from '../../service/Api';
import StyleMain from '../../utils/StyleMain';
import Loader from '../../utils/Loader';




const People= props =>{

    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState();
  
    useEffect(() => {
      const getPeople = async () => {
        const data = await GET(props.url);
        setPeople(data.results)//(props.isForPage === 'details' ? data.cast : data.results);
        setLoading(false);
      };
  
      getPeople();
    }, []);
  
    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <View>
            {/* <Text style={StyleMain.heading}>{props.title}</Text> */}
            <FlatList
              keyExtractor={item => item.id}
              data={people}
              renderItem={displayPeople}
              horizontal
            />
          </View>
        )}
      </View>
    );
  };
  
  const displayPeople = ({item}) => {
    return (
      <View style={StyleMain.trendingPeopleContainer}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
          style={StyleMain.trendingPeopleImage}
        />
        <Text style={StyleMain.trendingPeopleName}>{item.name}</Text>
      </View>
    );
  };
export default People;