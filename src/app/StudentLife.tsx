
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

const activities = [
  {
    title: "Hands-On Pet Care",
    category: "PRACTICAL LEARNING",
    description:
      "Discover the principles of everyday pet care, including hygiene, gentle handling and animal wellbeing.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Grooming & Coat Care",
    category: "GROOMING SKILLS",
    description:
      "Explore grooming preparation, coat maintenance and the importance of using safe, appropriate techniques.",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Positive Dog Training",
    category: "TRAINING & BEHAVIOUR",
    description:
      "Learn about patience, consistency and reward-based approaches to encourage positive behaviour.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Understanding Animal Needs",
    category: "ANIMAL WELLBEING",
    description:
      "Build awareness of animal comfort, body language, responsible care and when professional support may be needed.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
  },
];

const navItems = [
  { label: "Home", icon: "⌂", route: "/HomeScreen" },
  { label: "About", icon: "♡", route: "/AboutScreen" },
  { label: "Courses", icon: "▤", route: "/CoursesScreen" },
  { label: "Fees", icon: "R", route: "/FeesScreen" },
  { label: "Contact", icon: "✉", route: "/ContactScreen" },
];

export default function StudentLife() {
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
          {/* Intro */}
          <View style={styles.introSection}>
            <Text style={styles.eyebrow}>LIFE AT PAWSITIVE</Text>

            <Text style={styles.heading}>
              Student Life & Training
            </Text>

            <Text style={styles.introText}>
              Discover the world of pet care through learning, compassion
              and practical skills. Explore the areas that can help you
              develop confidence in working with animals.
            </Text>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85",
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />

          {/* Learning highlights */}
          <View style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>
              Learning with compassion
            </Text>
            <Text style={styles.highlightText}>
              Good pet care begins with patience, respect for animals,
              safe practices and a willingness to keep learning.
            </Text>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Explore learning activities
            </Text>
            <Text style={styles.sectionSubtitle}>
              Discover key areas of pet-care learning.
            </Text>
          </View>

          {/* Activity cards */}
          {activities.map((activity) => (
            <View key={activity.title} style={styles.activityCard}>
              <Image
                source={{ uri: activity.image }}
                style={styles.activityImage}
                resizeMode="cover"
              />

              <View style={styles.activityBody}>
                <Text style={styles.categoryLabel}>
                  {activity.category}
                </Text>

                <Text style={styles.activityTitle}>
                  {activity.title}
                </Text>

                <Text style={styles.activityDescription}>
                  {activity.description}
                </Text>
              </View>
            </View>
          ))}

          {/* Student journey */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Your learning journey
            </Text>
            <Text style={styles.sectionSubtitle}>
              Take the next step towards your pet-care goals.
            </Text>
          </View>

          <View style={styles.journeyCard}>
            <View style={styles.journeyStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Explore courses</Text>
                <Text style={styles.stepDescription}>
                  Compare the available course options and their listed
                  durations.
                </Text>
              </View>
            </View>

            <View style={styles.journeyStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Check the schedule</Text>
                <Text style={styles.stepDescription}>
                  Contact the academy to confirm upcoming dates and class
                  times.
                </Text>
              </View>
            </View>

            <View style={styles.journeyStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Register your interest</Text>
                <Text style={styles.stepDescription}>
                  Send an enquiry about the course that interests you.
                </Text>
              </View>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>
              Ready to explore your options?
            </Text>

            <Text style={styles.ctaText}>
              Find a course that matches your interests and ask the
              academy about requirements, fees and availability.
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
              style={styles.secondaryButton}
              onPress={() => navigate("/RegistrationScreen")}
            >
              <Text style={styles.secondaryButtonText}>
                Student Registration
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.textButton}
              onPress={() => navigate("/OurGallery")}
            >
              <Text style={styles.textButtonText}>
                View Our Gallery
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>
              Pawsitive Pet Academy
            </Text>
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
  introSection: {
    marginTop: 6,
    marginBottom: 18,
  },
  eyebrow: {
    color: GREEN,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },
  heading: {
    color: "#18392A",
    fontSize: 29,
    lineHeight: 36,
    fontWeight: "800",
    marginBottom: 10,
  },
  introText: {
    color: "#68756E",
    fontSize: 14,
    lineHeight: 22,
  },
  heroImage: {
    width: "100%",
    height: 195,
    borderRadius: 18,
    marginBottom: 18,
    backgroundColor: "#E5EAE7",
  },
  highlightCard: {
    backgroundColor: "#E8F2EB",
    borderRadius: 15,
    padding: 16,
    marginBottom: 26,
  },
  highlightTitle: {
    color: "#18392A",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 7,
  },
  highlightText: {
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
  },
  sectionSubtitle: {
    color: "#78847D",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },
  activityCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E4EAE6",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    marginBottom: 15,
  },
  activityImage: {
    width: "100%",
    height: 175,
    backgroundColor: "#E5EAE7",
  },
  activityBody: {
    padding: 15,
  },
  categoryLabel: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
  },
  activityTitle: {
    color: "#18392A",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 7,
  },
  activityDescription: {
    color: "#68756E",
    fontSize: 13,
    lineHeight: 20,
  },
  journeyCard: {
    backgroundColor: "#F8FAF8",
    borderWidth: 1,
    borderColor: "#E4EAE6",
    borderRadius: 16,
    padding: 15,
    marginBottom: 22,
  },
  journeyStep: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  stepNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E0EEE4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  stepNumberText: {
    color: GREEN,
    fontSize: 14,
    fontWeight: "800",
  },
  stepContent: {
    flex: 1,
    paddingTop: 2,
  },
  stepTitle: {
    color: "#18392A",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 5,
  },
  stepDescription: {
    color: "#68756E",
    fontSize: 12,
    lineHeight: 18,
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
    padding: 13,
    borderRadius: 11,
    alignItems: "center",
    marginBottom: 9,
    backgroundColor: "#FFFFFF",
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