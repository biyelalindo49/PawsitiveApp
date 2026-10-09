
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const courses = {
  grooming: {
    title: "Professional Pet Grooming",
    category: "Grooming",
    duration: "To be confirmed",
    level: "To be confirmed",
    certificate: "Ask academy",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1000",
    description:
      "Explore professional grooming routines, coat care, bathing, styling and safe handling techniques for pets.",
    learnings: [
      "Grooming preparation and safe animal handling",
      "Bathing, coat maintenance and styling basics",
      "Recognising skin or coat concerns that may need attention",
      "Maintaining a clean and safe grooming environment",
    ],
    suitableFor:
      "People interested in pet grooming and developing practical animal-care skills.",
  },
  "first-aid": {
    title: "Pet First Aid & Emergency CPR",
    category: "Animal Care",
    duration: "To be confirmed",
    level: "To be confirmed",
    certificate: "Ask academy",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1000",
    description:
      "Explore pet first-aid awareness, recognising urgent situations and understanding how to seek appropriate veterinary help.",
    learnings: [
      "Recognising possible pet emergencies",
      "Understanding basic first-aid principles",
      "Learning when and how to contact a veterinarian",
      "Introduction to emergency response concepts",
    ],
    suitableFor:
      "Pet owners and people interested in learning about animal emergency awareness.",
  },
  "dog-training": {
    title: "Advanced Dog Training",
    category: "Training",
    duration: "To be confirmed",
    level: "To be confirmed",
    certificate: "Ask academy",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1000",
    description:
      "Explore canine behaviour, communication and positive approaches to dog training.",
    learnings: [
      "Understanding canine body language",
      "Positive reinforcement training principles",
      "Building consistency in training routines",
      "Recognising common behaviour challenges",
    ],
    suitableFor:
      "Dog owners and learners interested in canine training and behaviour.",
  },
  "animal-care": {
    title: "Animal Care Fundamentals",
    category: "Animal Care",
    duration: "To be confirmed",
    level: "To be confirmed",
    certificate: "Ask academy",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000",
    description:
      "Discover everyday animal care, welfare, responsible handling and good husbandry practices.",
    learnings: [
      "Understanding everyday animal needs",
      "Responsible handling and welfare principles",
      "Hygiene and safe care environments",
      "Recognising changes in an animal's condition",
    ],
    suitableFor:
      "Beginners, pet owners and learners interested in animal care.",
  },
  "pet-behaviour": {
    title: "Pet Behaviour & Welfare",
    category: "Training",
    duration: "To be confirmed",
    level: "To be confirmed",
    certificate: "Ask academy",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000",
    description:
      "Explore animal behaviour, welfare needs and positive ways to interact with pets.",
    learnings: [
      "Introduction to pet body language",
      "Understanding common behaviour patterns",
      "Supporting animal welfare and enrichment",
      "Encouraging positive human-animal interactions",
    ],
    suitableFor:
      "Pet owners and learners interested in animal behaviour and welfare.",
  },
  "pet-health": {
    title: "Pet Health & Wellness",
    category: "Animal Care",
    duration: "To be confirmed",
    level: "To be confirmed",
    certificate: "Ask academy",
    image:
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=1000",
    description:
      "Learn about pet wellness routines, preventive care awareness and responsible everyday care.",
    learnings: [
      "Understanding everyday wellness routines",
      "Recognising changes in behaviour or condition",
      "Basic hygiene and preventive-care awareness",
      "Understanding when veterinary advice is needed",
    ],
    suitableFor:
      "Pet owners and learners interested in supporting pet health and wellbeing.",
  },
};

type CourseId = keyof typeof courses;

export default function IndividualCourseScreen() {
  const params = useLocalSearchParams<{ course?: string | string[] }>();
  const requestedId = Array.isArray(params.course)
    ? params.course[0]
    : params.course;

  const courseId: CourseId =
    requestedId && requestedId in courses
      ? (requestedId as CourseId)
      : "grooming";

  const course = courses[courseId];

  const openRegistration = () => {
    router.push({
      pathname: "/StudentRegistration",
      params: {
        course: courseId,
        courseTitle: course.title,
      },
    } as any);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Back to course list */}
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => router.push("/CoursesScreen")}
          >
            <Ionicons name="arrow-back" size={20} color="#174F35" />
            <Text style={styles.backText}>All Courses</Text>
          </TouchableOpacity>

          {/* Course image */}
          <Image
            source={{ uri: course.image }}
            style={styles.heroImage}
            resizeMode="cover"
          />

          <View style={styles.categoryTag}>
            <Ionicons name="paw-outline" size={13} color="#17623F" />
            <Text style={styles.categoryText}>{course.category}</Text>
          </View>

          {/* Course title and description */}
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.description}>{course.description}</Text>

          {/* Course information */}
          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <Ionicons
                name="time-outline"
                size={19}
                color="#17623F"
              />
              <Text style={styles.infoLabel}>Duration</Text>
              <Text style={styles.infoValue}>{course.duration}</Text>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="bar-chart-outline"
                size={19}
                color="#17623F"
              />
              <Text style={styles.infoLabel}>Level</Text>
              <Text style={styles.infoValue}>{course.level}</Text>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="ribbon-outline"
                size={19}
                color="#17623F"
              />
              <Text style={styles.infoLabel}>Certificate</Text>
              <Text style={styles.infoValue}>{course.certificate}</Text>
            </View>
          </View>

          {/* Learning outcomes */}
          <Text style={styles.sectionTitle}>What You Can Explore</Text>
          <Text style={styles.sectionDescription}>
            Topics may vary depending on the academy's confirmed course
            content. Contact the academy for the official syllabus.
          </Text>

          {course.learnings.map((learning, index) => (
            <View key={`${courseId}-learning-${index}`} style={styles.learning}>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#17623F"
              />
              <Text style={styles.learningText}>{learning}</Text>
            </View>
          ))}

          {/* Who it is for */}
          <View style={styles.suitableCard}>
            <View style={styles.suitableIcon}>
              <Ionicons
                name="people-outline"
                size={22}
                color="#17623F"
              />
            </View>
            <View style={styles.suitableContent}>
              <Text style={styles.suitableTitle}>Who is this course for?</Text>
              <Text style={styles.suitableText}>{course.suitableFor}</Text>
            </View>
          </View>

          {/* Course fee information */}
          <View style={styles.priceCard}>
            <View style={styles.priceInfo}>
              <Text style={styles.priceLabel}>Course Fee</Text>
              <Text style={styles.price}>Contact for details</Text>
              <Text style={styles.priceNote}>
                Ask about fees, dates and requirements.
              </Text>
            </View>
          </View>

          {/* Main actions */}
          <TouchableOpacity
            style={styles.enrolButton}
            activeOpacity={0.8}
            onPress={openRegistration}
          >
            <Ionicons name="create-outline" size={18} color="#FFF" />
            <Text style={styles.enrolText}>Register Your Interest</Text>
            <Ionicons name="arrow-forward" size={17} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={() => router.push("/CourseSchedules" as any)}
          >
            <Ionicons
              name="calendar-outline"
              size={18}
              color="#17623F"
            />
            <Text style={styles.secondaryButtonText}>View Course Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={() => router.push("/FeesScreen")}
          >
            <Ionicons
              name="wallet-outline"
              size={18}
              color="#17623F"
            />
            <Text style={styles.secondaryButtonText}>Ask About Fees</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactLink}
            onPress={() => router.push("/ContactScreen")}
          >
            <Text style={styles.contactLinkText}>
              Have a question? Contact the academy
            </Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#17623F"
            />
          </TouchableOpacity>

          {/* Browse other courses */}
          <TouchableOpacity
            style={styles.browseButton}
            onPress={() => router.push("/CoursesScreen")}
          >
            <Ionicons
              name="grid-outline"
              size={17}
              color="#17623F"
            />
            <Text style={styles.browseButtonText}>Explore Other Courses</Text>
          </TouchableOpacity>
        </ScrollView>

        <BottomNavigation />
      </View>
    </View>
  );
}

function BottomNavigation() {
  const items = [
    { label: "Home", icon: "home-outline", route: "/HomeScreen" },
    {
      label: "About",
      icon: "information-circle-outline",
      route: "/AboutScreen",
    },
    {
      label: "Courses",
      icon: "school-outline",
      route: "/CoursesScreen",
    },
    { label: "Fees", icon: "card-outline", route: "/FeesScreen" },
    {
      label: "Contact",
      icon: "chatbubble-outline",
      route: "/ContactScreen",
    },
  ] as const;

  return (
    <View style={styles.bottomNav}>
      {items.map((item) => {
        const active = item.label === "Courses";

        return (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityState={{ selected: active }}
            onPress={() => {
              if (!active) router.push(item.route);
            }}
          >
            <Ionicons
              name={item.icon}
              size={19}
              color={active ? "#17623F" : "#777"}
            />
            <Text
              style={[
                styles.navText,
                active && styles.activeNavText,
              ]}
            >
              {item.label}
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
    padding: 18,
    paddingBottom: 28,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backText: {
    marginLeft: 8,
    fontSize: 12,
    color: "#174F35",
    fontWeight: "700",
  },
  heroImage: {
    width: "100%",
    height: 195,
    borderRadius: 14,
    backgroundColor: "#EAF0EC",
  },
  categoryTag: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 14,
    backgroundColor: "#EAF5EF",
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  categoryText: {
    color: "#17623F",
    fontSize: 10,
    fontWeight: "700",
  },
  title: {
    fontSize: 23,
    fontWeight: "800",
    color: "#174F35",
    lineHeight: 30,
    marginTop: 10,
  },
  description: {
    fontSize: 12,
    color: "#6F776F",
    lineHeight: 19,
    marginTop: 8,
  },
  infoRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 18,
  },
  infoBox: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "#EAF5EF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 9,
    color: "#777",
    marginTop: 6,
  },
  infoValue: {
    fontSize: 10,
    textAlign: "center",
    color: "#174F35",
    fontWeight: "800",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#174F35",
    marginTop: 23,
    marginBottom: 9,
  },
  sectionDescription: {
    fontSize: 11,
    color: "#777",
    lineHeight: 17,
    marginBottom: 13,
  },
  learning: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 13,
    gap: 9,
  },
  learningText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: "#555",
  },
  suitableCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EAF5EF",
    padding: 13,
    borderRadius: 12,
    marginTop: 8,
    gap: 10,
  },
  suitableIcon: {
    width: 39,
    height: 39,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  suitableContent: {
    flex: 1,
  },
  suitableTitle: {
    fontSize: 12,
    color: "#174F35",
    fontWeight: "800",
  },
  suitableText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#66736B",
    marginTop: 5,
  },
  priceCard: {
    marginTop: 18,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E2E7E4",
  },
  priceInfo: {
    flexShrink: 1,
  },
  priceLabel: {
    fontSize: 10,
    color: "#777",
  },
  price: {
    fontSize: 17,
    fontWeight: "800",
    color: "#174F35",
    marginTop: 5,
  },
  priceNote: {
    fontSize: 10,
    color: "#777",
    lineHeight: 15,
    marginTop: 5,
  },
  enrolButton: {
    backgroundColor: "#17623F",
    minHeight: 46,
    paddingHorizontal: 14,
    borderRadius: 9,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  enrolText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "800",
  },
  secondaryButton: {
    minHeight: 44,
    paddingHorizontal: 13,
    borderRadius: 9,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#DCE6DF",
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  secondaryButtonText: {
    color: "#17623F",
    fontSize: 11,
    fontWeight: "700",
  },
  contactLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: 19,
    paddingVertical: 8,
  },
  contactLinkText: {
    fontSize: 11,
    color: "#17623F",
    fontWeight: "700",
  },
  browseButton: {
    minHeight: 43,
    borderRadius: 9,
    backgroundColor: "#EAF5EF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  browseButtonText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#17623F",
  },
  bottomNav: {
    height: 65,
    flexShrink: 0,
    backgroundColor: "#FFF",
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
  activeNavText: {
    color: "#17623F",
    fontWeight: "700",
  },
});