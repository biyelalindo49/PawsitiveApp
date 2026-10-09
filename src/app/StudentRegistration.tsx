
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const GREEN = "#236B4A";
const LIGHT_GREEN = "#EAF4ED";
const TEXT = "#24332B";
const MUTED = "#68766D";
const BORDER = "#DDE6DF";

const courses = [
  "Animal Care Fundamentals",
  "Dog Training",
  "Pet Grooming",
  "Pet Health and Wellness",
  "Other / Not Sure Yet",
];

export default function StudentRegistration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [preferredStart, setPreferredStart] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !selectedCourse
    ) {
      Alert.alert(
        "Required information",
        "Please enter your name, email address, phone number and select a course."
      );
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!validEmail) {
      Alert.alert(
        "Check your email",
        "Please enter a valid email address."
      );
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setSelectedCourse("");
    setPreferredStart("");
    setExperience("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.appFrame}>
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🐾</Text>
          </View>

          <View style={styles.brandText}>
            <Text style={styles.brandName}>PAWSITIVE</Text>
            <Text style={styles.brandSubtitle}>PET ACADEMY</Text>
          </View>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => router.push("/ContactScreen")}
          >
            <Text style={styles.headerButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>TAKE YOUR NEXT STEP</Text>
            <Text style={styles.heroTitle}>
              Student{"\n"}Registration
            </Text>
            <Text style={styles.heroDescription}>
              Start your journey towards learning more about animals, their
              care and their wellbeing. Complete the form to register your
              interest in a course.
            </Text>

            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeIcon}>💚</Text>
              <Text style={styles.heroBadgeText}>
                Your journey in animal care starts here.
              </Text>
            </View>
          </View>

          {submitted ? (
            <View style={styles.successCard}>
              <View style={styles.successIcon}>
                <Text style={styles.successEmoji}>✓</Text>
              </View>

              <Text style={styles.successTitle}>Form completed!</Text>
              <Text style={styles.successText}>
                Thank you, {fullName}. Your registration details have been
                checked in this demo.
              </Text>

              <View style={styles.summaryBox}>
                <Text style={styles.summaryLabel}>NAME</Text>
                <Text style={styles.summaryValue}>{fullName}</Text>

                <Text style={styles.summaryLabel}>SELECTED COURSE</Text>
                <Text style={styles.summaryValue}>{selectedCourse}</Text>

                <Text style={styles.summaryLabel}>EMAIL</Text>
                <Text style={styles.summaryValue}>{email}</Text>

                <Text style={styles.summaryLabel}>PHONE</Text>
                <Text style={styles.summaryValue}>{phone}</Text>
              </View>

              <Text style={styles.demoNotice}>
                Demo only: your details have not been sent or saved. Please
                contact the academy to complete your registration.
              </Text>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push("/ContactScreen")}
              >
                <Text style={styles.primaryButtonText}>
                  Contact the Academy
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.resetButton}
                onPress={resetForm}
              >
                <Text style={styles.resetButtonText}>
                  Start a New Registration
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.formSection}>
              <Text style={styles.sectionEyebrow}>REGISTRATION FORM</Text>
              <Text style={styles.sectionTitle}>Your details</Text>
              <Text style={styles.formIntro}>
                Fields marked with * are required.
              </Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Full name *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#98A49B"
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                  returnKeyType="next"
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Email address *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="you@example.com"
                  placeholderTextColor="#98A49B"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Phone number *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#98A49B"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                />
              </View>

              <View style={styles.separator} />

              <Text style={styles.sectionTitle}>Course preferences</Text>
              <Text style={styles.label}>Choose a course *</Text>

              {courses.map((course) => {
                const selected = selectedCourse === course;

                return (
                  <TouchableOpacity
                    key={course}
                    style={[
                      styles.courseOption,
                      selected && styles.courseOptionSelected,
                    ]}
                    onPress={() => setSelectedCourse(course)}
                    activeOpacity={0.8}
                  >
                    <View
                      style={[
                        styles.radioOuter,
                        selected && styles.radioOuterSelected,
                      ]}
                    >
                      {selected && <View style={styles.radioInner} />}
                    </View>
                    <Text
                      style={[
                        styles.courseOptionText,
                        selected && styles.courseOptionTextSelected,
                      ]}
                    >
                      {course}
                    </Text>
                  </TouchableOpacity>
                );
              })}

              <View style={[styles.fieldGroup, { marginTop: 18 }]}>
                <Text style={styles.label}>Preferred start date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Next available intake"
                  placeholderTextColor="#98A49B"
                  value={preferredStart}
                  onChangeText={setPreferredStart}
                  returnKeyType="next"
                />
                <Text style={styles.helperText}>
                  Start dates are subject to confirmation by the academy.
                </Text>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>
                  Previous animal-care experience
                </Text>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Tell us about any relevant experience (optional)"
                  placeholderTextColor="#98A49B"
                  value={experience}
                  onChangeText={setExperience}
                  multiline
                  textAlignVertical="top"
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Additional message</Text>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Any questions or information you'd like to share?"
                  placeholderTextColor="#98A49B"
                  value={message}
                  onChangeText={setMessage}
                  multiline
                  textAlignVertical="top"
                />
              </View>

              <View style={styles.privacyNote}>
                <Text style={styles.privacyIcon}>🔒</Text>
                <Text style={styles.privacyText}>
                  This is a demonstration form. Do not enter sensitive
                  information. Submitting it will not send your details to
                  the academy.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                activeOpacity={0.85}
              >
                <Text style={styles.submitButtonText}>
                  Complete Demo Registration
                </Text>
                <Text style={styles.submitArrow}>›</Text>
              </TouchableOpacity>

              <Text style={styles.requiredNote}>
                By continuing, you confirm that the information entered is
                accurate.
              </Text>
            </View>
          )}

          <View style={styles.helpCard}>
            <Text style={styles.helpEmoji}>💬</Text>
            <View style={styles.helpContent}>
              <Text style={styles.helpTitle}>Need assistance?</Text>
              <Text style={styles.helpText}>
                Contact the academy for course details, fees and registration
                guidance.
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/ContactScreen")}
              >
                <Text style={styles.helpLink}>Get in touch →</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.footerText}>
            Pawsitive Pet Academy{"\n"}Learning to care, one paw at a time.
          </Text>
        </ScrollView>

        <View style={styles.bottomNav}>
          <NavItem
            emoji="⌂"
            label="Home"
            onPress={() => router.push("/HomeScreen")}
          />
          <NavItem
            emoji="♡"
            label="About"
            onPress={() => router.push("/AboutScreen")}
          />
          <NavItem
            emoji="▣"
            label="Courses"
            active
            onPress={() => router.push("/CoursesScreen")}
          />
          <NavItem
            emoji="R"
            label="Fees"
            onPress={() => router.push("/FeesScreen")}
          />
          <NavItem
            emoji="✉"
            label="Contact"
            onPress={() => router.push("/ContactScreen")}
          />
        </View>
      </View>
    </View>
  );
}

function NavItem({
  emoji,
  label,
  active = false,
  onPress,
}: {
  emoji: string;
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Text style={[styles.navEmoji, active && styles.activeNavText]}>
        {emoji}
      </Text>
      <Text style={[styles.navLabel, active && styles.activeNavText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#EEF2EF",
    alignItems: "center",
  },
  appFrame: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  header: {
    minHeight: 72,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EEE9",
    backgroundColor: "#FFFFFF",
  },
  logoCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  logoEmoji: {
    fontSize: 23,
  },
  brandText: {
    marginLeft: 10,
    flex: 1,
  },
  brandName: {
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 1.4,
    color: GREEN,
  },
  brandSubtitle: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    color: MUTED,
    marginTop: 2,
  },
  headerButton: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: LIGHT_GREEN,
    borderRadius: 18,
  },
  headerButtonText: {
    color: GREEN,
    fontWeight: "700",
    fontSize: 12,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  hero: {
    padding: 22,
    paddingTop: 30,
    backgroundColor: "#F5F9F5",
  },
  eyebrow: {
    color: GREEN,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 12,
  },
  heroTitle: {
    color: TEXT,
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "900",
  },
  heroDescription: {
    color: MUTED,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 18,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5ECE6",
  },
  heroBadgeIcon: {
    fontSize: 21,
    marginRight: 10,
  },
  heroBadgeText: {
    flex: 1,
    color: GREEN,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700",
  },
  formSection: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  sectionEyebrow: {
    color: GREEN,
    fontSize: 10,
    letterSpacing: 1.7,
    fontWeight: "800",
    marginBottom: 8,
  },
  sectionTitle: {
    color: TEXT,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: "900",
    marginBottom: 8,
  },
  formIntro: {
    color: MUTED,
    fontSize: 12,
    marginBottom: 21,
  },
  fieldGroup: {
    marginBottom: 18,
  },
  label: {
    color: TEXT,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    minHeight: 49,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 13,
    color: TEXT,
    backgroundColor: "#FFFFFF",
  },
  multilineInput: {
    minHeight: 100,
    paddingTop: 13,
  },
  helperText: {
    color: MUTED,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 7,
  },
  separator: {
    height: 1,
    backgroundColor: "#E8EEE9",
    marginVertical: 8,
    marginBottom: 22,
  },
  courseOption: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    padding: 13,
    marginTop: 9,
    backgroundColor: "#FFFFFF",
  },
  courseOptionSelected: {
    borderColor: GREEN,
    backgroundColor: "#F3F8F4",
  },
  radioOuter: {
    width: 19,
    height: 19,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#AAB7AD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  radioOuterSelected: {
    borderColor: GREEN,
  },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: GREEN,
  },
  courseOptionText: {
    flex: 1,
    color: TEXT,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
  },
  courseOptionTextSelected: {
    color: GREEN,
    fontWeight: "800",
  },
  privacyNote: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F5F8F5",
    padding: 13,
    borderRadius: 10,
    marginBottom: 17,
  },
  privacyIcon: {
    fontSize: 17,
    marginRight: 9,
  },
  privacyText: {
    flex: 1,
    color: MUTED,
    fontSize: 11,
    lineHeight: 18,
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    flex: 1,
  },
  submitArrow: {
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 22,
  },
  requiredNote: {
    color: MUTED,
    fontSize: 10,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 12,
  },
  successCard: {
    marginHorizontal: 18,
    marginTop: 26,
    padding: 21,
    borderWidth: 1,
    borderColor: "#DDE9DF",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  successIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  successEmoji: {
    color: GREEN,
    fontSize: 32,
    fontWeight: "900",
  },
  successTitle: {
    color: TEXT,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },
  successText: {
    color: MUTED,
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 9,
    marginBottom: 20,
  },
  summaryBox: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F5F8F5",
    borderRadius: 12,
  },
  summaryLabel: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginTop: 10,
    marginBottom: 4,
  },
  summaryValue: {
    color: TEXT,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700",
  },
  demoNotice: {
    color: "#8A641C",
    backgroundColor: "#FFF8E8",
    borderRadius: 9,
    padding: 12,
    fontSize: 11,
    lineHeight: 18,
    marginTop: 15,
    marginBottom: 17,
  },
  primaryButton: {
    width: "100%",
    alignItems: "center",
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },
  resetButton: {
    paddingVertical: 14,
  },
  resetButtonText: {
    color: GREEN,
    fontSize: 12,
    fontWeight: "800",
  },
  helpCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 18,
    marginTop: 25,
    padding: 17,
    borderRadius: 14,
    backgroundColor: LIGHT_GREEN,
  },
  helpEmoji: {
    fontSize: 25,
    marginRight: 12,
  },
  helpContent: {
    flex: 1,
  },
  helpTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 6,
  },
  helpText: {
    color: MUTED,
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 9,
  },
  helpLink: {
    color: GREEN,
    fontSize: 12,
    fontWeight: "900",
  },
  footerText: {
    color: MUTED,
    textAlign: "center",
    fontSize: 11,
    lineHeight: 18,
    paddingVertical: 24,
  },
  bottomNav: {
    height: 65,
    borderTopWidth: 1,
    borderTopColor: "#E5ECE6",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  navEmoji: {
    fontSize: 20,
    color: MUTED,
    fontWeight: "700",
  },
  navLabel: {
    fontSize: 10,
    color: MUTED,
    fontWeight: "600",
  },
  activeNavText: {
    color: GREEN,
    fontWeight: "900",
  },
});