import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchButton from '@/app/components/SearchButton';
import globalStyles from '@/app/globalStyle';
import { useTheme } from '@/providers/theme/Theme.provider';
import colors from '@/constants/Colors';

const tabs = ['MTN', 'MOOV', 'CELTIIS']


export default function index() {

  const [activeTab, setActiveTab] = useState(0)

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.wrapper,{ marginTop: 60 }]}> 

        <Text style={styles.tabTitle}>Opérateurs</Text>

        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} isActive={activeTab === index} onPress={ () => setActiveTab(index) } />
          ))}
        </View>

      </View>
      
      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  
  tabTitle: { 
    marginVertical: 18, 
    ...globalStyles.text18SemiBold
  },

  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
  },

  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    minWidth: 96,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 22,
    color: "white",
  },

  tab_inactive: {
    backgroundColor: colors.gray.medium,
    borderWidth: 1,
    borderColor: colors.gray.base,
  },

  textInactive: {
    ...globalStyles.text12Medium
  },
  
  textActive: {
    ...globalStyles.text12ExtraBold
  },

});

function Tab({ label, isActive, onPress }: { label: string, isActive: boolean, onPress?: () => void }) {

  const { primary_base, } = useTheme();

  return (    
    <TouchableOpacity 
      onPress={ onPress }
      style={[styles.tab, isActive ? {backgroundColor: primary_base} : styles.tab_inactive ]}>  
      <View style={{width: 16, height: 16, backgroundColor: "white", borderRadius: 12}} />
      <Text style={ isActive ? styles.textActive : styles.textInactive}>{label}</Text>
    </TouchableOpacity>
  );  
} 
