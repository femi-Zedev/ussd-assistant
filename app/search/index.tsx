import { View, Text, TouchableOpacity, StyleSheet, StyleProp } from 'react-native'
import globalStyles from '@/app/globalStyle';
import SearchInput from '../components/SearchInput';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useSearchValue } from '../providers/search.provider';
import CodeItem from '../components/CodeItem';


export default function SearchPage() {
  const router = useRouter();
  const history = [
    { label: 'Solde' },
    { label: 'Momo' },
    { label: 'forfait illimité' }
  ]
  const codes = [
    { label: 'Mobile money (MTN)', code: '*880#' },
    { label: 'Mobile money (Celtiis)', code: '*889#' },
  ]

  const { searchValue } = useSearchValue()

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

        {searchValue.length === 0 &&
          <View style={{ marginTop: 20, paddingLeft: 10 }}>
            {history.map((item, index) => (
              <HistoryItem key={index} label={item.label} style={{ borderBottomWidth: index === history.length - 1 ? 0 : 1, borderBottomColor: Colors.gray.light }} />
            ))}
          </View>
        }

        {searchValue.length > 0 &&
          <View style={{ marginTop: 20, paddingLeft: 10 }}>
            {codes.map((item, index) => (
              <CodeItem  code={item.code} key={index} label={item.label} style={{ borderBottomWidth: index === history.length - 1 ? 0 : 1, borderBottomColor: Colors.gray.light }} />
            ))}
          </View>
        }

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

const HistoryItem = ({ label, style }: { label: string, style: StyleProp<any> }) => {
  return (
    <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 18, }, style]}>
      <Ionicons name="time-outline" size={24} color="#BBBBBB" />
      <Text style={[globalStyles.text16Regular, { color: '#BBBBBB' }]}>{label}</Text>
    </View>
  );
};