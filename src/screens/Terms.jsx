import React from 'react';
import { View, Text, ScrollView, StyleSheet,TouchableOpacity,Linking } from 'react-native';

export default function Terms() {
    const handleEmailPress = () => {
    Linking.openURL('mailto:pranverseapp@gmail.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Terms and Conditions</Text>
      <Text style={styles.date}>Effective Date: August 5, 2025</Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.text}>
        By using this App, you confirm that you have read, understood, and agree to comply with these Terms, as well as our Privacy Policy. You also agree to comply with all applicable laws and regulations.
      </Text>

      <Text style={styles.sectionTitle}>2. Services Provided</Text>
      <Text style={styles.text}>
        Pranverse offers spiritual guidance, healing content, meditative resources, tarot/reiki course access, and wellness tools. All content is for informational and personal growth purposes only, and not professional medical or psychological advice.
      </Text>

      <Text style={styles.sectionTitle}>3. Eligibility</Text>
      <Text style={styles.text}>
        - You must be at least 13 years of age to use this App.{"\n"}
        - If you are under 18, you must have parental or guardian consent.{"\n"}
        - You agree to provide accurate information when signing up or editing your profile.
      </Text>

      <Text style={styles.sectionTitle}>4. User Conduct</Text>
      <Text style={styles.text}>
        You agree not to:{"\n"}
        - Use the App for any illegal or unauthorized purposes.{"\n"}
        - Post or share harmful, abusive, or misleading content.{"\n"}
        - Attempt to hack, overload, or reverse-engineer the App.
      </Text>

      <Text style={styles.sectionTitle}>5. Account and Data</Text>
      <Text style={styles.text}>
        - You are responsible for maintaining the confidentiality of your account.{"\n"}
        - You can request deletion of your account at any time via the App.{"\n"}
        - We may suspend or remove accounts that violate these Terms or show signs of abuse.
      </Text>

      <Text style={styles.sectionTitle}>6. Intellectual Property</Text>
      <Text style={styles.text}>
        All content within the App — including logos, images, text, UI design, and graphics — belongs to Pranverse or its content partners and is protected under copyright and intellectual property laws.
      </Text>

      <Text style={styles.sectionTitle}>7. App Usage Disclaimer</Text>
      <Text style={styles.text}>
        Pranverse is provided "as is" with no warranties of any kind. We do not guarantee:{"\n"}
        - The accuracy or completeness of any spiritual or healing guidance.{"\n"}
        - That the app will be free of bugs, delays, or technical issues.{"\n"}
        - That results or outcomes from spiritual tools will be consistent or guaranteed.
      </Text>

      <Text style={styles.sectionTitle}>8. Limitation of Liability</Text>
      <Text style={styles.text}>
        We are not liable for any direct, indirect, or incidental damage that may arise from using this app, including personal decisions, loss of data, or emotional impact from content interactions.
      </Text>

      <Text style={styles.sectionTitle}>9. Modifications to Terms</Text>
      <Text style={styles.text}>
        We may modify these Terms at any time. Changes will take effect upon update. Continuing to use the App after such changes means you accept the new Terms.
      </Text>

      <Text style={styles.sectionTitle}>10. Contact Information</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.email}>pranverseapp@gmail.com</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 5,
  },
  email:{
    color:'blue'
  }
});
