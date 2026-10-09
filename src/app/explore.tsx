
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GREEN = "#236B4A";
const LIGHT_GREEN = "#EAF4ED";
const TEXT = "#24332B";
const MUTED = "#68766D";

export default function ExploreScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Explore</Text>
              <Text style={styles.subtitle}>
                Discover Pawsitive Pet Academy
              </Text>
            </View>

            <View style={styles.iconCircle}>
              <Ionicons name="paw-outline" size={24} color={GREEN} />
            </View>
          </View>

          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeEyebrow}>WELCOME TO PAWSITIVE</Text>
            <Text style={styles.welcomeTitle}>
              Learn to care.{"\n"}Make a difference.
            </Text>
            <Text style={styles.welcomeText}>
              Explore our courses, meet our team and discover opportunities
              to develop your animal-care skills.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/CoursesScreen")}
            >
              <Text style={styles.primaryButtonText}>Explore Courses</Text>
              <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Course</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>EXPLORE</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => router.push("/IndividualCourseScreen")}
            activeOpacity={0.85}
          >
            <View style={styles.featureImagePlaceholder}>
              <Ionicons name="paw" size={44} color={GREEN} />
            </View>

            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Professional Pet Grooming</Text>
              <Text style={styles.featureDescription}>
                Discover grooming, coat care, hygiene and safe pet-handling
                techniques.
              </Text>

              <View style={styles.featureBottom}>
                <Text style={styles.featureHint}>View course information</Text>
                <View style={styles.detailsButton}>
                  <Text style={styles.detailsText}>View Course</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Explore Our Courses</Text>
            <Text style={styles.sectionSubtitle}>
              Find a learning path that interests you.
            </Text>
          </View>

          <View style={styles.grid}>
            <CategoryCard
              icon="cut-outline"
              title="Pet Grooming"
              description="Coat care and grooming"
              onPress={() => router.push("/CoursesScreen")}
            />
            <CategoryCard
              icon="paw-outline"
              title="Dog Training"
              description="Behaviour and training"
              onPress={() => router.push("/CoursesScreen")}
            />
            <CategoryCard
              icon="medkit-outline"
              title="Animal Care"
              description="Everyday animal welfare"
              onPress={() => router.push("/CoursesScreen")}
            />
            <CategoryCard
              icon="school-outline"
              title="All Courses"
              description="Browse course options"
              onPress={() => router.push("/CoursesScreen")}
            />
          </View>

          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Discover the Academy</Text>
            <Text style={styles.sectionSubtitle}>
              Get to know our learning community.
            </Text>
          </View>

          <View style={styles.linkList}>
            <ExploreLink
              icon="images-outline"
              title="Our Gallery"
              description="Photos of pets, activities and training"
              onPress={() => router.push("/OurGallery")}
            />
            <ExploreLink
              icon="heart-outline"
              title="Student Life and Training"
              description="Explore the student learning experience"
              onPress={() => router.push("/StudentLife")}
            />
            <ExploreLink
              icon="people-outline"
              title="Meet Our Instructors"
              description="Get to know the people behind the training"
              onPress={() => router.push("/Instructors")}
            />
            <ExploreLink
              icon="chatbubbles-outline"
              title="Student Testimonials"
              description="Read student feedback and experiences"
              onPress={() => router.push("/StudentTestimonials")}
            />
            <ExploreLink
              icon="calendar-outline"
              title="Course Schedules"
              description="Ask about upcoming dates and timetables"
              onPress={() => router.push("/CourseSchedule")}
            />
            <ExploreLink
              icon="document-text-outline"
              title="Student Registration"
              description="Register your interest in a course"
              onPress={() => router.push("/StudentRegistration")}
            />
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoIcon}>
              <Ionicons
                name="information-circle-outline"
                size={26}
                color={GREEN}
              />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Need help choosing?</Text>
              <Text style={styles.infoText}>
                Contact the academy for information about courses, fees,
                schedules and registration.
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/ContactScreen")}
                style={styles.contactButton}
              >
                <Text style={styles.contactLink}>Contact Us</Text>
                <Ionicons name="arrow-forward" size={15} color={GREEN} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomCta}>
            <Text style={styles.bottomCtaTitle}>Ready to get started?</Text>
            <Text style={styles.bottomCtaText}>
              Take the next step towards your animal-care learning journey.
            </Text>

            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/StudentRegistration")}
            >
              <Text style={styles.ctaButtonText}>Register Your Interest</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
            PAWSITIVE PET ACADEMY{"\n"}
            Learning to care, one paw at a time.
          </Text>
        </ScrollView>

        <BottomNavigation />
      </View>
    </View>
  );
}

function CategoryCard({
  icon,
  title,
  description,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.category}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={styles.categoryIcon}>
        <Ionicons name={icon} size={25} color={GREEN} />
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categoryText}>{description}</Text>
      <View style={styles.categoryArrow}>
        <Ionicons name="arrow-forward" size={14} color={GREEN} />
      </View>
    </TouchableOpacity>
  );
}

function ExploreLink({
  icon,
  title,
  description,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.exploreLink}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={styles.exploreLinkIcon}>
        <Ionicons name={icon} size={23} color={GREEN} />
      </View>

      <View style={styles.exploreLinkContent}>
        <Text style={styles.exploreLinkTitle}>{title}</Text>
        <Text style={styles.exploreLinkDescription}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={19} color={MUTED} />
    </TouchableOpacity>
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
        onPress={() => router.push("/ContactScreen")}
      />
    </View>
  );
}

function NavItem({
  icon,
  label,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={icon} size={20} color={MUTED} />
      <Text style={styles.navText}>{label}</Text>
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
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E5EAE7",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 18,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: GREEN,
  },
  subtitle: {
    fontSize: 11,
    color: MUTED,
    marginTop: 4,
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeCard: {
    backgroundColor: LIGHT_GREEN,
    borderRadius: 16,
    padding: 19,
    marginBottom: 25,
  },
  welcomeEyebrow: {
    color: GREEN,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.6,
    marginBottom: 10,
  },
  welcomeTitle: {
    color: TEXT,
    fontSize: 29,
    lineHeight: 35,
    fontWeight: "900",
  },
  welcomeText: {
    color: MUTED,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 17,
  },
  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: GREEN,
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionHeading: {
    marginTop: 7,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: TEXT,
  },
  sectionSubtitle: {
    fontSize: 11,
    color: MUTED,
    marginTop: 5,
    lineHeight: 17,
  },
  badge: {
    backgroundColor: LIGHT_GREEN,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "900",
    color: GREEN,
    letterSpacing: 0.7,
  },
  featureCard: {
    borderWidth: 1,
    borderColor: "#E5ECE6",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 25,
    backgroundColor: "#FFFFFF",
  },
  featureImagePlaceholder: {
    width: "100%",
    height: 135,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  featureContent: {
    padding: 14,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: GREEN,
  },
  featureDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: MUTED,
    marginTop: 6,
  },
  featureBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 15,
  },
  featureHint: {
    flex: 1,
    color: MUTED,
    fontSize: 10,
  },
  detailsButton: {
    backgroundColor: GREEN,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  detailsText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
    marginBottom: 26,
  },
  category: {
    width: "48.5%",
    minHeight: 145,
    borderWidth: 1,
    borderColor: "#E5ECE6",
    borderRadius: 13,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
  categoryIcon: {
    width: 42,
    height: 42,
    borderRadius: 11,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: TEXT,
  },
  categoryText: {
    fontSize: 10,
    lineHeight: 15,
    color: MUTED,
    marginTop: 4,
  },
  categoryArrow: {
    position: "absolute",
    right: 11,
    bottom: 11,
  },
  linkList: {
    borderWidth: 1,
    borderColor: "#E5ECE6",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginTop: 3,
    marginBottom: 24,
  },
  exploreLink: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EDF1ED",
    gap: 10,
  },
  exploreLinkIcon: {
    width: 40,
    height: 40,
    borderRadius: 11,
    backgroundColor: LIGHT_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  exploreLinkContent: {
    flex: 1,
  },
  exploreLinkTitle: {
    color: TEXT,
    fontSize: 12,
    fontWeight: "800",
  },
  exploreLinkDescription: {
    color: MUTED,
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
  },
  infoCard: {
    padding: 14,
    borderRadius: 13,
    backgroundColor: "#F5F8F5",
    borderWidth: 1,
    borderColor: "#E5ECE6",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 1,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: GREEN,
  },
  infoText: {
    fontSize: 11,
    color: MUTED,
    lineHeight: 17,
    marginTop: 5,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    marginTop: 10,
  },
  contactLink: {
    color: GREEN,
    fontSize: 11,
    fontWeight: "900",
  },
  bottomCta: {
    padding: 18,
    borderRadius: 14,
    backgroundColor: GREEN,
  },
  bottomCtaTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },
  bottomCtaText: {
    color: "#E5F1E8",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
    marginBottom: 15,
  },
  ctaButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 9,
    alignItems: "center",
    paddingVertical: 12,
  },
  ctaButtonText: {
    color: GREEN,
    fontSize: 12,
    fontWeight: "900",
  },
  footer: {
    color: MUTED,
    textAlign: "center",
    fontSize: 10,
    lineHeight: 17,
    paddingVertical: 24,
    letterSpacing: 0.3,
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
    color: MUTED,
    marginTop: 3,
  },
});