
import { router } from "expo-router";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const GREEN = "#236B4A";
const LIGHT_GREEN = "#EAF4ED";
const TEXT = "#24332B";
const MUTED = "#68766D";

const schedules = [
  {
    category: "ANIMAL CARE",
    title: "Animal Care Fundamentals",
    description:
      "Learn the foundations of responsible pet care, animal welfare and everyday handling.",
    duration: "Course duration: To be confirmed",
    format: "Format: To be confirmed",
    icon: "🐾",
  },
  {
    category: "DOG TRAINING",
    title: "Dog Training",
    description:
      "Explore canine behaviour, positive reinforcement and essential training techniques.",
    duration: "Course duration: To be confirmed",
    format: "Format: To be confirmed",
    icon: "🐕",
  },
  {
    category: "PET GROOMING",
    title: "Pet Grooming",
    description:
      "Learn about grooming routines, coat care, hygiene and safe handling practices.",
    duration: "Course duration: To be confirmed",
    format: "Format: To be confirmed",
    icon: "🛁",
  },
  {
    category: "PET WELLNESS",
    title: "Pet Health and Wellness",
    description:
      "Build your understanding of animal wellbeing, daily care and recognising when professional help is needed.",
    duration: "Course duration: To be confirmed",
    format: "Format: To be confirmed",
    icon: "💚",
  },
];

export default function CourseSchedules() {
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
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>PLAN YOUR LEARNING</Text>
            <Text style={styles.heroTitle}>
              Course{"\n"}Schedules
            </Text>
            <Text style={styles.heroDescription}>
              Find a course that matches your passion for animals. Contact us
              to confirm upcoming start dates, class times and availability.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/ContactScreen")}
            >
              <Text style={styles.primaryButtonText}>Ask About Dates</Text>
            </TouchableOpacity>

            <View style={styles.heroNote}>
              <Text style={styles.noteIcon}>📅</Text>
              <View style={styles.noteContent}>
                <Text style={styles.noteTitle}>Upcoming intakes</Text>
                <Text style={styles.noteText}>
                  Dates and times will be announced by the academy.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionEyebrow}>EXPLORE YOUR OPTIONS</Text>
            <Text style={styles.sectionTitle}>Available course areas</Text>
            <Text style={styles.sectionDescription}>
              Browse the course areas below. Contact the academy for the
              confirmed timetable and enrolment details.
            </Text>

            {schedules.map((course) => (
              <View key={course.title} style={styles.courseCard}>
                <View style={styles.courseTopRow}>
                  <View style={styles.courseIconBox}>
                    <Text style={styles.courseIcon}>{course.icon}</Text>
                  </View>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{course.category}</Text>
                  </View>
                </View>

                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>
                  {course.description}
                </Text>

                <View style={styles.infoLine}>
                  <Text style={styles.infoIcon}>📆</Text>
                  <Text style={styles.infoText}>{course.duration}</Text>
                </View>

                <View style={styles.infoLine}>
                  <Text style={styles.infoIcon}>🕒</Text>
                  <Text style={styles.infoText}>{course.format}</Text>
                </View>

                <View style={styles.scheduleDivider} />

                <View style={styles.scheduleStatusRow}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>Schedule to be confirmed</Text>
                </View>

                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() => router.push("/ContactScreen")}
                >
                  <Text style={styles.cardButtonText}>Enquire About This Course</Text>
                  <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.stepsSection}>
            <Text style={styles.sectionEyebrow}>HOW TO GET STARTED</Text>
            <Text style={styles.sectionTitle}>Your next steps</Text>

            <View style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Choose a course</Text>
                <Text style={styles.stepDescription}>
                  Explore the training areas that interest you.
                </Text>
              </View>
            </View>

            <View style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Confirm the timetable</Text>
                <Text style={styles.stepDescription}>
                  Contact us for actual dates, times, fees and availability.
                </Text>
              </View>
            </View>

            <View style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Register your interest</Text>
                <Text style={styles.stepDescription}>
                  Ask about the registration process and the next intake.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.ctaCard}>
            <Text style={styles.ctaEmoji}>🐶</Text>
            <Text style={styles.ctaTitle}>Need help choosing?</Text>
            <Text style={styles.ctaDescription}>
              We can help you find out which course may suit your interests
              and goals.
            </Text>

            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/ContactScreen")}
            >
              <Text style={styles.ctaButtonText}>Contact the Academy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.push("/CoursesScreen")}
            >
              <Text style={styles.secondaryButtonText}>View All Courses</Text>
            </TouchableOpacity>
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
  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: GREEN,
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 13,
  },
  heroNote: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 14,
    marginTop: 22,
    borderWidth: 1,
    borderColor: "#E5ECE6",
  },
  noteIcon: {
    fontSize: 27,
    marginRight: 12,
  },
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    color: TEXT,
    fontWeight: "800",
    fontSize: 13,
    marginBottom: 4,
  },
  noteText: {
    color: MUTED,
    fontSize: 12,
    lineHeight: 18,
  },
  section: {
    paddingHorizontal: 18,
    paddingTop: 29,
  },
  sectionEyebrow: {
    color: GREEN,
    fontSize: 10,
    letterSpacing: 1.7,
    fontWeight: "800",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "900",
    color: TEXT,
    marginBottom: 9,
  },
  sectionDescription: {
    fontSize: 13,
    color: MUTED,
    lineHeight: 21,
    marginBottom: 8,
  },
  courseCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5ECE6",
    borderRadius: 16,
    padding: 17,
    marginTop: 15,
    shadowColor: "#173D2B",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  courseTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  courseIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  courseIcon: {
    fontSize: 25,
  },
  categoryBadge: {
    backgroundColor: LIGHT_GREEN,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 7,
  },
  categoryText: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
  courseTitle: {
    color: TEXT,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8,
  },
  courseDescription: {
    color: MUTED,
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 15,
  },
  infoLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  infoIcon: {
    fontSize: 15,
    marginRight: 9,
  },
  infoText: {
    flex: 1,
    color: MUTED,
    fontSize: 11,
    lineHeight: 17,
  },
  scheduleDivider: {
    height: 1,
    backgroundColor: "#E8EEE9",
    marginVertical: 15,
  },
  scheduleStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D8A23B",
    marginRight: 8,
  },
  statusText: {
    color: MUTED,
    fontSize: 11,
    fontWeight: "700",
  },
  cardButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREEN,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 9,
  },
  cardButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 11,
    flex: 1,
    textAlign: "center",
  },
  arrow: {
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 22,
  },
  stepsSection: {
    paddingHorizontal: 22,
    paddingTop: 32,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 18,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumberText: {
    color: GREEN,
    fontSize: 14,
    fontWeight: "900",
  },
  stepContent: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 2,
  },
  stepTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 5,
  },
  stepDescription: {
    color: MUTED,
    fontSize: 12,
    lineHeight: 19,
  },
  ctaCard: {
    marginHorizontal: 18,
    marginTop: 30,
    padding: 21,
    borderRadius: 16,
    backgroundColor: GREEN,
    alignItems: "center",
  },
  ctaEmoji: {
    fontSize: 32,
    marginBottom: 9,
  },
  ctaTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "900",
    textAlign: "center",
  },
  ctaDescription: {
    color: "#E5F1E8",
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 17,
  },
  ctaButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
  },
  ctaButtonText: {
    color: GREEN,
    fontSize: 13,
    fontWeight: "900",
  },
  secondaryButton: {
    marginTop: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
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