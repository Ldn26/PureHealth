import {  StyleSheet, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (


        <Text className="text-white text-xl ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quod, in recusandae officia earum magni nulla repellat neque voluptatum laudantium, molestiae, error rem quibusdam vel natus autem nemo provident accusamus!</Text>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
