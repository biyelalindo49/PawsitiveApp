
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const academyPages = [
  {
    title: "Our Gallery",
    description: "Explore photos from our academy.",
    icon: "images-outline" as const,
    route: "/OurGallery" as const,
  },
  {
    title: "Student Life & Training",
    description: "See learning and practical activities.",
    icon: "paw-outline" as const,
    route: "/StudentLife" as const,
  },
  {
    title: "Meet Our Instructors",
    description: "Discover our teaching team.",
    icon: "people-outline" as const,
    route: "/Instructors" as const,
  },
  {
    title: "Student Testimonials",
    description: "Read student experiences.",
    icon: "chatbubbles-outline" as const,
    route: "/StudentTestimonials" as const,
  },
  {
    title: "Course Schedule",
    description: "View course schedules and durations.",
    icon: "calendar-outline" as const,
    route: "/CourseSchedules" as const,
  },
  {
    title: "Student Registration",
    description: "Register your interest in a course.",
    icon: "create-outline" as const,
    route: "/StudentRegistration" as const,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.brandRow}>
              <View style={styles.logo}>
                <MaterialCommunityIcons
                  name="dog"
                  size={23}
                  color="#fff"
                />
              </View>

              <View>
                <Text style={styles.brand}>Pawsitive</Text>
                <Text style={styles.brandSub}>PET ACADEMY</Text>
              </View>
            </View>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="About Pawsitive Pet Academy"
              onPress={() => router.push("/AboutScreen")}
            >
              <Ionicons
                name="person-outline"
                size={21}
                color="#17623f"
              />
            </TouchableOpacity>
          </View>

          {/* Hero Image */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900",
            }}
            style={styles.hero}
            resizeMode="cover"
          />

          {/* Welcome Text */}
          <Text style={styles.title}>
            Unlock Your Passion for{"\n"}
            Professional Pet Care
          </Text>

          <Text style={styles.description}>
            Durban's premier animal care institute training pet owners
            and career seekers in modern, ethical pet husbandry.
          </Text>

          {/* Quick Services */}
          <Text style={styles.sectionTitle}>Quick Services</Text>

          <View style={styles.serviceRow}>
            <TouchableOpacity
              style={styles.serviceCard}
              activeOpacity={0.75}
              onPress={() => router.push("/CoursesScreen")}
            >
              <Ionicons
                name="school-outline"
                size={25}
                color="#17623f"
              />
              <Text style={styles.serviceTitle}>Our Courses</Text>
              <Text style={styles.serviceText}>6 dynamic courses</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.serviceCard}
              activeOpacity={0.75}
              onPress={() => router.push("/FeesScreen")}
            >
              <Ionicons
                name="calculator-outline"
                size={25}
                color="#17623f"
              />
              <Text style={styles.serviceTitle}>Calculate Fees</Text>
              <Text style={styles.serviceText}>Flexible plans</Text>
            </TouchableOpacity>
          </View>

          {/* Statistics */}
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>10+</Text>
              <Text style={styles.statLabel}>Years Exp.</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>1,200+</Text>
              <Text style={styles.statLabel}>Graduates</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Hands-on</Text>
            </View>
          </View>

          {/* New Academy Pages */}
          <View style={styles.academySection}>
            <Text style={styles.sectionTitle}>Explore the Academy</Text>
            <Text style={styles.sectionDescription}>
              Discover our training, team, courses and student resources.
            </Text>

            <View style={styles.academyGrid}>
              {academyPages.map((page) => (
                <TouchableOpacity
                  key={page.title}
                  style={styles.academyCard}
                  activeOpacity={0.75}
                  accessibilityRole="button"
                  accessibilityLabel={`Open ${page.title}`}
                 onPress={() => router.push(page.route as any)}
                >
                  <View style={styles.academyIcon}>
                    <Ionicons
                      name={page.icon}
                      size={23}
                      color="#17623f"
                    />
                  </View>

                  <Text style={styles.academyTitle}>
                    {page.title}
                  </Text>

                  <Text style={styles.academyDescription}>
                    {page.description}
                  </Text>

                  <View style={styles.cardFooter}>
                    <Text style={styles.openText}>Explore</Text>
                    <Ionicons
                      name="arrow-forward"
                      size={15}
                      color="#17623f"
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Registration Call to Action */}
          <View style={styles.registerBox}>
            <Text style={styles.registerTitle}>
              Ready to get started?
            </Text>
            <Text style={styles.registerDescription}>
              Register your interest and take the next step in your
              pet care journey.
            </Text>

            <TouchableOpacity
              style={styles.registerButton}
              activeOpacity={0.8}
              onPress={() => router.push("/StudentRegistration")}
            >
              <Text style={styles.registerButtonText}>
                Register Now
              </Text>
              <Ionicons
                name="arrow-forward"
                size={17}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.contactLink}
            onPress={() => router.push("/ContactScreen")}
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={18}
              color="#17623f"
            />
            <Text style={styles.contactLinkText}>
              Have questions? Contact us
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <BottomNavigation active="Home" />
      </View>
    </View>
  );
}

function BottomNavigation({ active }: { active: string }) {
  const items = [
    { name: "Home", icon: "home-outline", route: "/HomeScreen" },
    {
      name: "About",
      icon: "information-circle-outline",
      route: "/AboutScreen",
    },
    {
      name: "Courses",
      icon: "school-outline",
      route: "/CoursesScreen",
    },
    { name: "Fees", icon: "card-outline", route: "/FeesScreen" },
    {
      name: "Contact",
      icon: "chatbubble-outline",
      route: "/ContactScreen",
    },
  ] as const;

  return (
    <View style={styles.bottomNav}>
      {items.map((item) => {
        const isActive = active === item.name;

        return (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={item.name}
            accessibilityState={{ selected: isActive }}
            onPress={() => {
              if (!isActive) router.push(item.route);
            }}
          >
            <Ionicons
              name={item.icon}
              size={19}
              color={isActive ? "#17623f" : "#777"}
            />
            <Text
              style={[
                styles.navText,
                isActive && styles.activeNavText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#eef2ef",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
    alignSelf: "center",
    backgroundColor: "#fff",
    overflow: "hidden",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#e5eae7",
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
    marginBottom: 15,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#17623f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  brand: {
    fontSize: 15,
    fontWeight: "800",
    color: "#164e35",
  },
  brandSub: {
    fontSize: 8,
    color: "#777",
    letterSpacing: 1,
  },
  hero: {
    width: "100%",
    height: 165,
    borderRadius: 15,
    marginBottom: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#174f35",
    lineHeight: 30,
  },
  description: {
    fontSize: 12,
    color: "#777",
    lineHeight: 18,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
  serviceRow: {
    flexDirection: "row",
    gap: 10,
  },
  serviceCard: {
    flex: 1,
    minHeight: 105,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 13,
    padding: 14,
    justifyContent: "center",
  },
  serviceTitle: {
    fontWeight: "700",
    fontSize: 13,
    marginTop: 8,
    color: "#333",
  },
  serviceText: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
  },
  stats: {
    flexDirection: "row",
    gap: 8,
    marginTop: 18,
    marginBottom: 5,
  },
  stat: {
    flex: 1,
    backgroundColor: "#eef7f2",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  statNumber: {
    fontWeight: "800",
    fontSize: 15,
    color: "#17623f",
  },
  statLabel: {
    fontSize: 9,
    color: "#777",
    marginTop: 2,
  },
  academySection: {
    marginTop: 8,
  },
  sectionDescription: {
    color: "#777",
    fontSize: 12,
    lineHeight: 18,
    marginTop: -4,
    marginBottom: 12,
  },
  academyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  academyCard: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "44%",
    minHeight: 155,
    borderWidth: 1,
    borderColor: "#e5ece7",
    borderRadius: 13,
    padding: 12,
    backgroundColor: "#fff",
  },
  academyIcon: {
    width: 39,
    height: 39,
    borderRadius: 11,
    backgroundColor: "#eef7f2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },
  academyTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#244a36",
    lineHeight: 18,
  },
  academyDescription: {
    fontSize: 10,
    lineHeight: 15,
    color: "#777",
    marginTop: 5,
    flex: 1,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  openText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#17623f",
  },
  registerBox: {
    marginTop: 22,
    backgroundColor: "#eef7f2",
    borderRadius: 15,
    padding: 17,
  },
  registerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#174f35",
  },
  registerDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: "#66736b",
    marginTop: 6,
  },
  registerButton: {
    marginTop: 14,
    backgroundColor: "#17623f",
    borderRadius: 10,
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "800",
  },
  contactLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 20,
  },
  contactLinkText: {
    color: "#17623f",
    fontSize: 12,
    fontWeight: "700",
  },
  bottomNav: {
    height: 65,
    flexShrink: 0,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  activeNavText: {
    color: "#17623f",
    fontWeight: "700",
  },
});