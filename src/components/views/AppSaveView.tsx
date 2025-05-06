import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { colors } from '../../styles/colors';
import { IS_ANDROID } from '../../constants/constants';

export default function AppSaveView({ children, style }: { children: React.ReactNode, style?: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, style]}>
            {children}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
