
import { router } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const GREEN = "#236B4A";

const instructors = [
  {
    id: "1",
    name: "Lead Pet-Care Instructor",
    role: "PET CARE & ANIMAL WELLBEING",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    description:
      "Introduce your lead instructor here, including their verified qualifications, experience and passion for animal care.",
    qualifications: "Add verified qualifications",
  },
  {
    id: "2",
    name: "Grooming Instructor",
    role: "PROFESSIONAL PET GROOMING",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=85",
    description:
      "Share information about the instructor's grooming experience, specialist skills and approach to safe pet handling.",
    qualifications: "Add verified grooming credentials",
  },
  {
    id: "3",
    name: "Dog Training Instructor",
    role: "DOG TRAINING & BEHAVIOUR",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
    description:
      "Introduce the person who teaches training principles, positive reinforcement and responsible dog handling.",
    qualifications: "Add verified training credentials",
  },
];

const navItems = [
  { label: "Home", icon: "⌂", route: "/HomeScreen" },
  { label: "About", icon: "♡", route: "/AboutScreen" },
  { label: "Courses", icon: "▤", route: "/CoursesScreen" },
  { label: "Fees", icon: "R", route: "/FeesScreen" },
  { label: "Contact", icon: "✉", route: "/ContactScreen" },
];

export default function Instructors() {
  const navigate = (path: string) => {
    router.push(path as any);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigate("/HomeScreen")}>
            <Text style={styles.logo}>🐾 Pawsitive</Text>
            <Text style={styles.logoSubtitle}>PET ACADEMY</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => navigate("/ContactScreen")}
          >
            <Text style={styles.contactButtonText}>Contact us</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Page introduction */}
          <Text style={styles.eyebrow}>THE PEOPLE BEHIND THE LEARNING</Text>

          <Text style={styles.heading}>Meet Our Instructors</Text>

          <Text style={styles.intro}>
            Get to know the people who guide students as they develop their
            pet-care knowledge, practical skills and confidence.
          </Text>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85",
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />

          {/* Welcome card */}
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>
              Learning with care and compassion
            </Text>
            <Text style={styles.welcomeText}>
              Good teaching combines knowledge, patience, responsible animal
              handling and a commitment to animal welfare.
            </Text>
          </View>

          {/* Instructor profiles */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our teaching team</Text>
            <Text style={styles.sectionSubtitle}>
              Add each instructor's real name, photograph and verified
              professional details before publishing.
            </Text>
          </View>

          {instructors.map((instructor) => (
            <View key={instructor.id} style={styles.instructorCard}>
              <Image
                source={{ uri: instructor.image }}
                style={styles.instructorImage}
                resizeMode="cover"
              />

              <View style={styles.instructorBody}>
                <Text style={styles.role}>{instructor.role}</Text>

                <Text style={styles.instructorName}>
                  {instructor.name}
                </Text>

                <Text style={styles.description}>
                  {instructor.description}
                </Text>

                <View style={styles.qualificationBox}>
                  <Text style={styles.qualificationLabel}>
                    QUALIFICATIONS & EXPERIENCE
                  </Text>
                  <Text style={styles.qualificationText}>
                    {instructor.qualifications}
                  </Text>
                </View>
              </View>
            </View>
          ))}

          {/* Teaching values */}
          <Text style={styles.sectionTitle}>Our learning values</Text>

          <View style={styles.valuesGrid}>
            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>♡</Text>
              <Text style={styles.valueTitle}>Compassion</Text>
              <Text style={styles.valueText}>
                Treat animals with care and respect.
              </Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>✓</Text>
              <Text style={styles.valueTitle}>Safety</Text>
              <Text style={styles.valueText}>
                Encourage responsible handling practices.
              </Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>✦</Text>
              <Text style={styles.valueTitle}>Learning</Text>
              <Text style={styles.valueText}>
                Build skills through continued development.
              </Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>🐾</Text>
              <Text style={styles.valueTitle}>Animal Welfare</Text>
              <Text style={styles.valueText}>
                Put animal wellbeing at the centre of care.
              </Text>
            </View>
          </View>

          {/* Call to action */}
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>
              Ready to start your learning journey?
            </Text>

            <Text style={styles.ctaText}>
              Explore the course options or contact the academy to ask about
              training, requirements and upcoming dates.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigate("/CoursesScreen")}
            >
              <Text style={styles.primaryButtonText}>
                Explore Courses →
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigate("/ScheduleScreen")}
            >
              <Text style={styles.secondaryButtonText}>
                View Course Schedule
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.textButton}
              onPress={() => navigate("/ContactScreen")}
            >
              <Text style={styles.textButtonText}>
                Contact the academy
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Pawsitive Pet Academy</Text>
            <Text style={styles.footerText}>
              Learn with care. Grow with confidence.
            </Text>
          </View>
        </ScrollView>

        {/* Fixed bottom navigation */}
        <View style={styles.bottomNav}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.navItem}
              onPress={() => navigate(item.route)}
            >
              <Text style={styles.navIcon}>{item.icon}</Text>
              <Text style={styles.navLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEF2EF",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E5EAE7",
  },
  header: {
    minHeight: 68,
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EDE9",
  },
  logo: {
    color: GREEN,
    fontSize: 20,
    fontWeight: "800",
  },
  logoSubtitle: {
    marginLeft: 27,
    color: "#69776F",
    fontSize: 9,
    letterSpacing: 2,
    fontWeight: "700",
  },
  contactButton: {
    backgroundColor: "#E8F2EB",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  contactButtonText: {
    color: GREEN,
    fontSize: 12,
    fontWeight: "700",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 18,
    paddingBottom: 28,
  },
  eyebrow: {
    color: GREEN,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 7,
    marginBottom: 8,
  },
  heading: {
    color: "#18392A",
    fontSize: 29,
    lineHeight: 36,
    fontWeight: "800",
    marginBottom: 10,
  },
  intro: {
    color: "#68756E",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
  heroImage: {
    width: "100%",
    height: 190,
    borderRadius: 18,
    marginBottom: 18,
    backgroundColor: "#E5EAE7",
  },
  welcomeCard: {
    backgroundColor: "#E8F2EB",
    borderRadius: 15,
    padding: 16,
    marginBottom: 25,
  },
  welcomeTitle: {
    color: "#18392A",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 7,
  },
  welcomeText: {
    color: "#52645A",
    fontSize: 13,
    lineHeight: 20,
  },
  sectionHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#18392A",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 7,
  },
  sectionSubtitle: {
    color: "#78847D",
    fontSize: 13,
    lineHeight: 20,
  },
  instructorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E4EAE6",
    overflow: "hidden",
    marginBottom: 17,
  },
  instructorImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#E5EAE7",
  },
  instructorBody: {
    padding: 15,
  },
  role: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
  },
  instructorName: {
    color: "#18392A",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 8,
  },
  description: {
    color: "#68756E",
    fontSize: 13,
    lineHeight: 20,
  },
  qualificationBox: {
    backgroundColor: "#F1F7F2",
    borderRadius: 10,
    padding: 11,
    marginTop: 13,
  },
  qualificationLabel: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 5,
  },
  qualificationText: {
    color: "#52645A",
    fontSize: 12,
    lineHeight: 18,
  },
  valuesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 24,
  },
  valueCard: {
    width: "48.5%",
    backgroundColor: "#F8FAF8",
    borderWidth: 1,
    borderColor: "#E4EAE6",
    borderRadius: 13,
    padding: 12,
    marginBottom: 10,
  },
  valueIcon: {
    color: GREEN,
    fontSize: 23,
    marginBottom: 8,
  },
  valueTitle: {
    color: "#18392A",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
  },
  valueText: {
    color: "#68756E",
    fontSize: 11,
    lineHeight: 17,
  },
  ctaCard: {
    backgroundColor: "#F1F7F2",
    borderWidth: 1,
    borderColor: "#DDE9E0",
    borderRadius: 17,
    padding: 17,
  },
  ctaTitle: {
    color: "#18392A",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "800",
    marginBottom: 8,
  },
  ctaText: {
    color: "#68756E",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: GREEN,
    padding: 14,
    borderRadius: 11,
    alignItems: "center",
    marginBottom: 9,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: GREEN,
    backgroundColor: "#FFFFFF",
    padding: 13,
    borderRadius: 11,
    alignItems: "center",
    marginBottom: 9,
  },
  secondaryButtonText: {
    color: GREEN,
    fontSize: 13,
    fontWeight: "800",
  },
  textButton: {
    alignItems: "center",
    padding: 10,
  },
  textButtonText: {
    color: GREEN,
    fontSize: 13,
    fontWeight: "800",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
    marginTop: 5,
  },
  footerTitle: {
    color: GREEN,
    fontSize: 14,
    fontWeight: "800",
  },
  footerText: {
    color: "#78847D",
    fontSize: 11,
    marginTop: 5,
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
  navIcon: {
    color: GREEN,
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 2,
  },
  navLabel: {
    color: "#68756E",
    fontSize: 10,
    fontWeight: "600",
  },
});