
import { router } from "expo-router";
import {
    Image,
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

const testimonials = [
  {
    name: "Student Name 1",
    course: "Dog Training Student",
    quote:
      "The training helped me understand dog behaviour and how to work with patience, kindness and consistency.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500",
  },
  {
    name: "Student Name 2",
    course: "Pet Grooming Student",
    quote:
      "I enjoyed learning practical skills and understanding how to keep pets comfortable, clean and well cared for.",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500",
  },
  {
    name: "Student Name 3",
    course: "Animal Care Student",
    quote:
      "The course encouraged me to be more confident around animals and taught me the importance of responsible pet care.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500",
  },
];

export default function StudentTestimonials() {
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
            <Text style={styles.eyebrow}>OUR STUDENT STORIES</Text>
            <Text style={styles.heroTitle}>
              Real learning.{"\n"}A love for animals.
            </Text>
            <Text style={styles.heroDescription}>
              Discover the experiences our students can share as they build
              their knowledge, confidence and animal-care skills.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/CoursesScreen")}
            >
              <Text style={styles.primaryButtonText}>Explore Our Courses</Text>
            </TouchableOpacity>

            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900",
              }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.introSection}>
            <Text style={styles.sectionEyebrow}>WHY STUDENTS CHOOSE US</Text>
            <Text style={styles.sectionTitle}>Learning with purpose</Text>
            <Text style={styles.bodyText}>
              At Pawsitive Pet Academy, learning is about more than theory.
              Students can develop practical skills, responsible handling
              habits and a deeper appreciation for animal welfare.
            </Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>🐶</Text>
              <Text style={styles.statTitle}>Practical Skills</Text>
              <Text style={styles.statText}>Learn through activities</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>💚</Text>
              <Text style={styles.statTitle}>Animal Welfare</Text>
              <Text style={styles.statText}>Care with compassion</Text>
            </View>
          </View>

          <View style={styles.reviewsSection}>
            <Text style={styles.sectionEyebrow}>STUDENT EXPERIENCES</Text>
            <Text style={styles.sectionTitle}>Words from our learners</Text>
            <Text style={styles.bodyText}>
              The cards below are sample testimonials for layout purposes.
              Replace them with genuine feedback from your students before
              publishing.
            </Text>

            {testimonials.map((item, index) => (
              <View key={item.name} style={styles.testimonialCard}>
                <View style={styles.quoteMark}>
                  <Text style={styles.quoteMarkText}>“</Text>
                </View>

                <Text style={styles.quoteText}>{item.quote}</Text>

                <View style={styles.studentInfo}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.studentImage}
                    resizeMode="cover"
                  />
                  <View style={styles.studentDetails}>
                    <Text style={styles.studentName}>{item.name}</Text>
                    <Text style={styles.studentCourse}>{item.course}</Text>
                    <Text style={styles.sampleLabel}>SAMPLE REVIEW</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.noticeCard}>
            <Text style={styles.noticeEmoji}>⭐</Text>
            <Text style={styles.noticeTitle}>Your story could be next</Text>
            <Text style={styles.noticeText}>
              Have you studied with us? Contact the academy to share your
              experience and help future students learn more about our
              training.
            </Text>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => router.push("/ContactScreen")}
            >
              <Text style={styles.outlineButtonText}>Share Your Experience</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomCta}>
            <Text style={styles.ctaTitle}>Ready to start your journey?</Text>
            <Text style={styles.ctaText}>
              Explore our courses and take the next step towards learning
              animal care.
            </Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/CoursesScreen")}
            >
              <Text style={styles.primaryButtonText}>View Courses</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Pawsitive Pet Academy{"\n"}Learning to care, one paw at a time.
          </Text>
        </ScrollView>

        <View style={styles.bottomNav}>
          <NavItem emoji="⌂" label="Home" onPress={() => router.push("/HomeScreen")} />
          <NavItem emoji="♡" label="About" onPress={() => router.push("/AboutScreen")} />
          <NavItem emoji="▣" label="Courses" onPress={() => router.push("/CoursesScreen")} />
          <NavItem emoji="R" label="Fees" onPress={() => router.push("/FeesScreen")} />
          <NavItem emoji="✉" label="Contact" onPress={() => router.push("/ContactScreen")} />
        </View>
      </View>
    </View>
  );
}

function NavItem({
  emoji,
  label,
  onPress,
}: {
  emoji: string;
  label: string;
  onPress: () => void;
}) {
  const active = label === "About";

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
    backgroundColor: "#F5F9F5",
    padding: 22,
    paddingTop: 30,
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
    fontSize: 34,
    lineHeight: 40,
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
  heroImage: {
    width: "100%",
    height: 190,
    borderRadius: 16,
    marginTop: 22,
    backgroundColor: "#E1E9E2",
  },
  introSection: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 16,
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
  bodyText: {
    fontSize: 13,
    color: MUTED,
    lineHeight: 21,
  },
  statsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 15,
    borderRadius: 14,
    backgroundColor: LIGHT_GREEN,
  },
  statEmoji: {
    fontSize: 25,
    marginBottom: 10,
  },
  statTitle: {
    color: TEXT,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 5,
  },
  statText: {
    color: MUTED,
    fontSize: 11,
    lineHeight: 17,
  },
  reviewsSection: {
    paddingHorizontal: 18,
    paddingTop: 30,
  },
  testimonialCard: {
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
  quoteMark: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  quoteMarkText: {
    color: GREEN,
    fontSize: 29,
    fontWeight: "900",
    lineHeight: 34,
  },
  quoteText: {
    color: TEXT,
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 18,
  },
  studentInfo: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EDF1ED",
    paddingTop: 13,
  },
  studentImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E1E9E2",
  },
  studentDetails: {
    marginLeft: 11,
    flex: 1,
  },
  studentName: {
    color: TEXT,
    fontWeight: "800",
    fontSize: 13,
  },
  studentCourse: {
    color: MUTED,
    fontSize: 11,
    marginTop: 4,
  },
  sampleLabel: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 5,
  },
  noticeCard: {
    marginHorizontal: 18,
    marginTop: 26,
    padding: 20,
    borderRadius: 16,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
  },
  noticeEmoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  noticeTitle: {
    color: TEXT,
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
  },
  noticeText: {
    color: MUTED,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 9,
    marginBottom: 16,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: GREEN,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 10,
  },
  outlineButtonText: {
    color: GREEN,
    fontWeight: "800",
    fontSize: 12,
  },
  bottomCta: {
    marginHorizontal: 18,
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: GREEN,
  },
  ctaTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "900",
  },
  ctaText: {
    color: "#E5F1E8",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 16,
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