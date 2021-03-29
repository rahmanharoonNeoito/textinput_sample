import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import ProfileImg from '../../assets/images/img1.png';
import AnimatedTextInput from '../../components/reusable/AnimatedTextInput';
import PasswordTextInput from '../../components/reusable/PasswordTextInput';
import CheckBox from '@react-native-community/checkbox';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  topSection: {
    flex: 1.5,
    height: '100%',
    width: '100%',
    backgroundColor: '#1F87C9',
    padding: 10,
  },
  topHead: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileHead: {
    flex: 1,
    height: '100%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profilePicSection: {
    flex: 1.3,
    height: '90%',
    width: '100%',
    borderRadius: 90,
  },
  profileTextSection: {
    flex: 8.7,
    justifyContent: 'flex-start',
  },
  textRow: {
    flex: 1,
    left: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textRow1: {
    flex: 1,
    left: 10,
    top: -5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textLight: {
    fontSize: 15,
    fontFamily: 'Open Sans',
    color: '#fff',
  },
  textMedium: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Open Sans',
    color: '#fff',
  },
  middleSection: {
    flex: 6.5,
    height: '100%',
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
  },
  middleTopDivider: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  middleDivider: {
    flex: 7.9,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textBox: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  termsSectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
  },
  checkBoxContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxTextContainer: {
    flex: 9,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textSeperator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDark: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Open Sans',
    color: '#000000',
  },
  textBlue: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Open Sans',
    color: '#85B8D7',
  },
  buttonContainer: {
    flex: 1.1,
    height: '100%',
    width: '100%',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F87C9',
  },
  submitText: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Open Sans',
    color: '#fff',
  },
  middleBottomDivider: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  textRegular: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Open Sans',
    color: '#000',
  },
  bottomSection: {
    flex: 2,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomSeperator: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNormal: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: '#000',
  },
});

const SignUpScreen = () => {
  const [homeText, setHomeText] = React.useState('');
  const [homeModelText, setHomeModelText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topHead}>
          <Text style={styles.textMedium}>Back</Text>
        </View>
        <View style={styles.profileHead}>
          <Image style={styles.profilePicSection} source={ProfileImg}></Image>
          <View style={styles.profileTextSection}>
            <View style={styles.textRow}>
              <Text style={styles.textLight}>Hi </Text>
              <Text style={styles.textMedium}>John Doe,</Text>
            </View>
            <View style={styles.textRow1}>
              <Text style={styles.textLight}>
                Verify Your personal details to countinue
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.middleTopDivider}>
          <Text style={styles.textRegular}>You Are Almost There</Text>
        </View>
        <View style={styles.middleDivider}>
          <View style={styles.textBox}>
            <AnimatedTextInput
              styleObj={{
                width: '100%',
                height: '75%',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 30,
              }}
              placeholder=" Home Builder "
              value={homeText}
              onChangeText={homeText => setHomeText(homeText)}
            />
          </View>
          <View style={styles.textBox}>
            <AnimatedTextInput
              styleObj={{
                width: '100%',
                height: '75%',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 30,
              }}
              placeholder=" Model Home "
              value={homeModelText}
              onChangeText={homeModelText => setHomeModelText(homeModelText)}
            />
          </View>
          <View style={styles.textBox}>
            <PasswordTextInput
              styleObj={{
                width: '100%',
                height: '75%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 30,
              }}
              secureTextEntry={true}
              placeholder=" Password "
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <View style={styles.textBox}>
            <PasswordTextInput
              styleObj={{
                width: '100%',
                height: '75%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 30,
              }}
              secureTextEntry={true}
              placeholder=" Confirm Password "
              value={confirmPassword}
              onChangeText={confirmPassword =>
                setConfirmPassword(confirmPassword)
              }
            />
          </View>
          <View style={styles.termsSectionContainer}>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>
            <View style={styles.checkBoxTextContainer}>
              <View style={styles.textSeperator}>
                <Text style={styles.textDark}>
                  By continuing you agree to our{' '}
                </Text>
                <Text style={styles.textBlue}>Terms of Service </Text>
              </View>
              <View style={styles.textSeperator}>
                <Text style={styles.textDark}>and </Text>
                <Text style={styles.textBlue}>Privacy Policy</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => console.log('Submitted')}>
          <Text style={styles.submitText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSeperator}></View>
        <View style={styles.bottomSeperator}>
          <Text style={styles.textNormal}>
            © Copyright NEXTPOST - All Rights Reserved
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
