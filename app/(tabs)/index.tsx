import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchButton from '@/app/components/SearchButton';
import globalStyles from '@/app/globalStyle';
import { useTheme } from '@/providers/theme/Theme.provider';
import colors from '@/constants/Colors';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import { PhoneRinging } from '../icons/phone-ringing';
import { Globe } from '../icons/globe';
import { Wallet } from '../icons/wallet';
import CodeItem from '../components/CodeItem';
import Colors from '@/constants/Colors';

const tabs = ['MTN', 'MOOV', 'CELTIIS']

const Services = [
  {
    title: 'Appels',
    subTitle: 'Pré et post payé, forfaits',
    icon: <PhoneRinging color='#FFFFFF' />,

  },
  {
    title: 'Internet',
    subTitle: 'Service internet, solde ...',
    icon: <Globe color='#FFFFFF' />,

  },
  {
    title: 'Mobile Money',
    subTitle: 'Pré et post payé, forfaits',
    icon: <Wallet color='#FFFFFF' />,

  },
]

const codes = [
  { label: 'Forfait socials', code: '*650#' },
  { label: 'Forfait appel', code: '*175#' },
]


export default function index() {

  const [activeTab, setActiveTab] = useState(0)

  return (
    <View style={globalStyles.container}>

      <View style={[globalStyles.wrapper, { marginTop: 70 }]}>

        <Text style={[styles.tabTitle, { marginVertical: 14 }]}>Opérateurs</Text>

        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} isActive={activeTab === index} onPress={() => setActiveTab(index)} />
          ))}
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>

            <Text style={styles.tabTitle}>Services</Text>

            {Services.map((service, index) => (
              <Accordion
                key={index}
                title={service.title}
                subTitle={service.subTitle}
                icon={service.icon} >

                <View style={{ marginTop: 0, paddingLeft: 10 }}>
                  {codes.map((item, index) => (
                    <CodeItem code={item.code} key={index} label={item.label} style={{ borderBottomWidth: index === codes.length - 1 ? 0 : 1, borderBottomColor: '#65B3BE99' }} />
                  ))}
                </View>

              </Accordion>
            ))}

          </View>

        </View>



      </View>



      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({

  tabTitle: {
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

  // to remove
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  }

});

function Tab({ label, isActive, onPress }: { label: string, isActive: boolean, onPress?: () => void }) {

  const { primary_base } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tab, isActive ? { backgroundColor: primary_base } : styles.tab_inactive]}>
      <View style={{ width: 16, height: 16, backgroundColor: "white", borderRadius: 12 }} />
      <Text style={isActive ? styles.textActive : styles.textInactive}>{label}</Text>
    </TouchableOpacity>
  );
} 
