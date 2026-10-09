
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitInquiry = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert(
        "Missing Information",
        "Please complete all fields before submitting."
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email address."
      );
      return;
    }

    Alert.alert(
      "Inquiry Ready",
      "Thank you for contacting Pawsitive Pet Academy. This form is currently a demo and has not sent your message to the academy."
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  const openWhatsApp = async () => {
    try {
      await Linking.openURL("https://wa.me/27732454567");
    } catch {
      Alert.alert(
        "Unable to Open WhatsApp",
        "Please try again or contact us by email."
      );
    }
  };

  const openEmail = async () => {
    try {
      await Linking.openURL("mailto:info@pawsitive.co.za");
    } catch {
      Alert.alert(
        "Unable to Open Email",
        "Please email info@pawsitive.co.za from your email app."
      );
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Get In Touch</Text>

          <Text style={styles.subtitle}>
            We would love to hear from you. Contact Pawsitive Pet
            Academy for more information about our courses.
          </Text>

          <View style={styles.contactCard}>
            <TouchableOpacity
              style={styles.contactRow}
              onPress={openWhatsApp}
              activeOpacity={0.75}
            >
              <View style={styles.iconCircle}>
                <Ionicons
                  name="logo-whatsapp"
                  size={22}
                  color="#17623F"
                />
              </View>

              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>
                  WhatsApp / Phone
                </Text>
                <Text style={styles.contactValue}>
                  +27 73 245 4567
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={17}
                color="#999"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactRow}
              onPress={openEmail}
              activeOpacity={0.75}
            >
              <View style={styles.iconCircle}>
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color="#17623F"
                />
              </View>

              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>
                  info@pawsitive.co.za
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={17}
                color="#999"
              />
            </TouchableOpacity>

            <View style={[styles.contactRow, styles.lastContactRow]}>
              <View style={styles.iconCircle}>
                <Ionicons
                  name="location-outline"
                  size={22}
                  color="#17623F"
                />
              </View>

              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Location</Text>
                <Text style={styles.contactValue}>
                  Durban, South Africa
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.locationCard}>
            <View style={styles.locationIconCircle}>
              <Ionicons
                name="location"
                size={30}
                color="#17623F"
              />
            </View>

            <Text style={styles.locationTitle}>
              Pawsitive Pet Academy
            </Text>

            <Text style={styles.locationText}>
              Durban Campus
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Send Us a Message
          </Text>

          <Text style={styles.fieldLabel}>Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            returnKeyType="next"
          />

          <Text style={styles.fieldLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
          />

          <Text style={styles.fieldLabel}>Your Message</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="How can we help you?"
            placeholderTextColor="#999"
            multiline
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={submitInquiry}
            activeOpacity={0.85}
          >
            <Ionicons
              name="send"
              size={16}
              color="#FFFFFF"
            />
            <Text style={styles.submitText}>
              Submit Inquiry
            </Text>
          </TouchableOpacity>

          <Text style={styles.footerNote}>
            We look forward to hearing from you!
          </Text>
        </ScrollView>

        <BottomNavigation />
      </View>
    </View>
  );
}

function BottomNavigation() {
  return (
    <View style={styles.bottomNav}>
      <NavItem
        icon="home-outline"
        label="Home"
        onPress={() => router.push("/HomeScreen")}
      />

      <NavItem
        icon="information-circle-outline"
        label="About"
        onPress={() => router.push("/AboutScreen")}
      />

      <NavItem
        icon="school-outline"
        label="Courses"
        onPress={() => router.push("/CoursesScreen")}
      />

      <NavItem
        icon="card-outline"
        label="Fees"
        onPress={() => router.push("/FeesScreen")}
      />

      <NavItem
        icon="chatbubble-outline"
        label="Contact"
        active
        onPress={() => router.push("/ContactScreen")}
      />
    </View>
  );
}

function NavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon}
        size={20}
        color={active ? "#17623F" : "#777"}
      />

      <Text
        style={[
          styles.navText,
          active && styles.activeText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#EEF2EF",
  },

  container: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
    alignSelf: "center",
    backgroundColor: "#F8FAF9",
    overflow: "hidden",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E5EAE7",
  },

  scrollView: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 28,
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#174F35",
  },

  subtitle: {
    fontSize: 11,
    color: "#777",
    lineHeight: 17,
    marginTop: 6,
    marginBottom: 18,
  },

  contactCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E2E7E4",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  lastContactRow: {
    marginBottom: 0,
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EAF5EF",
    alignItems: "center",
    justifyContent: "center",
  },

  contactText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 5,
  },

  contactLabel: {
    fontSize: 10,
    color: "#888",
    marginBottom: 4,
  },

  contactValue: {
    fontSize: 11,
    fontWeight: "700",
    color: "#333",
  },

  locationCard: {
    minHeight: 150,
    backgroundColor: "#DCEBE5",
    borderRadius: 13,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },

  locationIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  locationTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#174F35",
    marginTop: 9,
  },

  locationText: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#333",
    marginTop: 22,
    marginBottom: 12,
  },

  fieldLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#444",
    marginBottom: 6,
  },

  input: {
    minHeight: 44,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 12,
    color: "#333",
    marginBottom: 12,
  },

  messageInput: {
    height: 90,
    paddingTop: 12,
  },

  submitButton: {
    minHeight: 46,
    backgroundColor: "#17623F",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    gap: 8,
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },

  footerNote: {
    fontSize: 10,
    color: "#888",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 5,
  },

  bottomNav: {
    height: 65,
    flexShrink: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E7E4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 6,
    paddingBottom: 5,
  },

  navItem: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    fontSize: 9,
    color: "#777",
    marginTop: 3,
  },

  activeText: {
    color: "#17623F",
    fontWeight: "700",
  },
});