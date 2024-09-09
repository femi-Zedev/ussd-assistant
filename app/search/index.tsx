import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import globalStyles from '@/app/globalStyle';
import SearchInput from '../components/SearchInput';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function SearchPage() {
  const router = useRouter();
  return (
    <View style={globalStyles.page}>

      <View style={[globalStyles.wrapper, { marginTop: 60 }]}>
        <View style={styles.searchBarContainer}>
          <SearchInput
            autoFocus
            onChange={(value: string) => console.log(value)}
            placeholder='Rechercher un code'
            style={styles.searchInput}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={globalStyles.text16Medium} >Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    maxWidth: '100%',
    opacity: 0.8,
    // backgroundColor: '#797C7D1A'
  },

  searchInput: {
    flex: 1,
  },

  cancelButton: {
    // backgroundColor: '#797D1A',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});