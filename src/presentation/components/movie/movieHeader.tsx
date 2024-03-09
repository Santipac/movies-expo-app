import { FullMovie } from '@/core/entities/movie.entity';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

interface MovieHeaderProps {
  moviePoster: string;
  ogTitle: string;
  title: string;
}

export const MovieHeader = ({ moviePoster, title, ogTitle }: MovieHeaderProps) => {
  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.backButtonCtn}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Regresar</Text>
        </Pressable>
      </View>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.6 }}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{ uri: moviePoster }} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{ogTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 12,
    width: '100%',
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 12,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButtonCtn: {
    marginHorizontal: 12,
    marginTop: 24,
  },
  backButton: {
    color: '#000',
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
