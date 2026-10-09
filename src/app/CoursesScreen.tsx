
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const courses = [
  {
    id: "grooming",
    title: "Professional Pet Grooming",
    category: "Grooming",
    duration: "Contact for details",
    description:
      "Learn about grooming routines, coat care, bathing and safe handling.",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900",
  },
  {
    id: "first-aid",
    title: "Pet First Aid & Emergency CPR",
    category: "Animal Care",
    duration: "Contact for details",
    description:
      "Explore basic pet first aid, emergency awareness and responsible response.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900",
  },
  {
    id: "dog-training",
    title: "Advanced Dog Training",
    category: "Training",
    duration: "Contact for details",
    description:
      "Explore canine behaviour, communication and positive training techniques.",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900",
  },
  {
    id: "animal-care",
    title: "Animal Care Fundamentals",
    category: "Animal Care",
    duration: "Contact for details",
    description:
      "Discover everyday animal care, welfare, handling and responsible husbandry.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900",
  },
  {
    id: "pet-behaviour",
    title: "Pet Behaviour & Welfare",
    category: "Training",
    duration: "Contact for details",
    description:
      "Learn about animal behaviour, welfare needs and positive interactions.",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900",
  },
  {
    id: "pet-health",
    title: "Pet Health & Wellness",
    category: "Animal Care",
    duration: "Contact for details",
    description:
      "Explore preventive care, wellness routines and recognising changes in pets.",
    image:
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=900",
  },
];

const categories = ["All", "Animal Care", "Training", "Grooming"];

export default function CoursesScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" ||
        course.category === selectedCategory;

      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Heading */}
          <View style={styles.headingRow}>
            <View style={styles.headingText}>
              <Text style={styles.eyebrow}>PAWSITIVE PET ACADEMY</Text>
              <Text style={styles.title}>Our Courses</Text>
              <Text style={styles.subtitle}>
                Find a learning path that matches your passion for
                animal care.
              </Text>
            </View>

            <View style={styles.headingIcon}>
              <Ionicons name="school-outline" size={28} color="#17623F" />
            </View>
          </View>

          {/* Course count */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryIcon}>
              <Ionicons name="paw-outline" size={23} color="#17623F" />
            </View>
            <View style={styles.summaryText}>
              <Text style={styles.summaryTitle}>
                Explore learning opportunities
              </Text>
              <Text style={styles.summaryDescription}>
                {courses.length} course options to explore
              </Text>
            </View>
          </View>

          {/* Working search */}
          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={19} color="#888" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search courses or topics..."
              placeholderTextColor="#999"
              style={styles.searchInput}
              returnKeyType="search"
              accessibilityLabel="Search courses"
            />

            {search.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearch("")}
                accessibilityLabel="Clear course search"
              >
                <Ionicons name="close-circle" size={19} color="#888" />
              </TouchableOpacity>
            )}
          </View>

          {/* Category filters */}
          <Text style={styles.filterLabel}>Browse by category</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          >
            {categories.map((category) => {
              const selected = selectedCategory === category;

              return (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryChip,
                    selected && styles.categoryChipActive,
                  ]}
                  onPress={() => setSelectedCategory(category)}
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selected && styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Course cards */}
          <View style={styles.courseHeadingRow}>
            <Text style={styles.sectionTitle}>Available Courses</Text>
            <Text style={styles.resultCount}>
              {filteredCourses.length} found
            </Text>
          </View>

          {filteredCourses.map((course) => (
            <View key={course.id} style={styles.card}>
              <Image
                source={{ uri: course.image }}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.cardContent}>
                <View style={styles.courseMeta}>
                  <Text style={styles.courseCategory}>
                    {course.category}
                  </Text>
                  <View style={styles.durationTag}>
                    <Ionicons
                      name="time-outline"
                      size={12}
                      color="#17623F"
                    />
                    <Text style={styles.durationText}>
                      {course.duration}
                    </Text>
                  </View>
                </View>

                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>
                  {course.description}
                </Text>

                <TouchableOpacity
                  style={styles.detailsButton}
                  activeOpacity={0.8}
                  accessibilityRole="button"
                  accessibilityLabel={`View ${course.title} details`}
                  onPress={() =>
                    router.push({
                      pathname: "/IndividualCourseScreen",
                      params: { course: course.id },
                    } as any)
                  }
                >
                  <Text style={styles.detailsText}>View Course Details</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={16}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {filteredCourses.length === 0 && (
            <View style={styles.emptyState}>
              <Ionicons name="search-outline" size={34} color="#8A9A90" />
              <Text style={styles.emptyTitle}>No courses found</Text>
              <Text style={styles.emptyDescription}>
                Try another search term or choose a different category.
              </Text>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                <Text style={styles.resetButtonText}>Show all courses</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* More pages and actions */}
          <Text style={styles.sectionTitle}>Plan Your Learning</Text>
          <Text style={styles.planningDescription}>
            Find schedules, learn about fees or register your interest.
          </Text>

          <View style={styles.actionGrid}>
            <ActionCard
              icon="calendar-outline"
              title="Course Schedule"
              description="Check schedule information"
              onPress={() => router.push("/CourseSchedules" as any)}
            />
            <ActionCard
              icon="calculator-outline"
              title="Course Fees"
              description="Ask about course costs"
              onPress={() => router.push("/FeesScreen")}
            />
            <ActionCard
              icon="create-outline"
              title="Register"
              description="Submit your course interest"
              onPress={() => router.push("/StudentRegistration" as any)}
            />
            <ActionCard
              icon="chatbubble-ellipses-outline"
              title="Contact Us"
              description="Ask us a question"
              onPress={() => router.push("/ContactScreen")}
            />
          </View>

          <View style={styles.helpBox}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#17623F"
            />
            <View style={styles.helpTextWrap}>
              <Text style={styles.helpTitle}>Need help choosing?</Text>
              <Text style={styles.helpDescription}>
                Contact the academy to ask about course content, fees,
                entry requirements and upcoming dates.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => router.push("/ContactScreen")}
          >
            <Text style={styles.contactButtonText}>Contact the Academy</Text>
            <Ionicons name="arrow-forward" size={17} color="#17623F" />
          </TouchableOpacity>
        </ScrollView>

        <BottomNavigation />
      </View>
    </View>
  );
}

function ActionCard({
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
      style={styles.actionCard}
      activeOpacity={0.75}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <View style={styles.actionIcon}>
        <Ionicons name={icon} size={21} color="#17623F" />
      </View>
      <Text style={styles.actionTitle}>{title}</Text>
      <Text style={styles.actionDescription}>{description}</Text>
      <Ionicons
        name="chevron-forward"
        size={16}
        color="#17623F"
        style={styles.actionArrow}
      />
    </TouchableOpacity>
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
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headingText: {
    flex: 1,
    paddingRight: 10,
  },
  eyebrow: {
    fontSize: 9,
    letterSpacing: 1.2,
    fontWeight: "800",
    color: "#688274",
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#174F35",
  },
  subtitle: {
    fontSize: 12,
    color: "#777",
    lineHeight: 18,
    marginTop: 6,
  },
  headingIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#EAF5EF",
    alignItems: "center",
    justifyContent: "center",
  },
  summaryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF5EF",
    borderRadius: 12,
    padding: 13,
    marginBottom: 15,
  },
  summaryIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  summaryText: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#174F35",
  },
  summaryDescription: {
    fontSize: 11,
    color: "#66736B",
    marginTop: 4,
  },
  searchBox: {
    minHeight: 45,
    borderWidth: 1,
    borderColor: "#E0E5E2",
    borderRadius: 10,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: "#333",
    fontSize: 12,
    paddingVertical: 10,
    outlineStyle: "none",
  } as any,
  filterLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#444",
    marginBottom: 9,
  },
  categoryList: {
    gap: 8,
    paddingBottom: 6,
  },
  categoryChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E0E5E2",
  },
  categoryChipActive: {
    backgroundColor: "#17623F",
    borderColor: "#17623F",
  },
  categoryText: {
    fontSize: 11,
    color: "#555",
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#FFF",
  },
  courseHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#174F35",
    marginTop: 20,
    marginBottom: 10,
  },
  resultCount: {
    fontSize: 10,
    color: "#777",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E8E6",
  },
  image: {
    width: "100%",
    height: 155,
    backgroundColor: "#EAF0EC",
  },
  cardContent: {
    padding: 13,
  },
  courseMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7,
    marginBottom: 8,
  },
  courseCategory: {
    fontSize: 10,
    color: "#17623F",
    backgroundColor: "#EAF5EF",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: "700",
  },
  durationTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  durationText: {
    fontSize: 9,
    color: "#777",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#174F35",
    lineHeight: 22,
  },
  courseDescription: {
    fontSize: 11,
    color: "#777",
    lineHeight: 17,
    marginTop: 6,
  },
  detailsButton: {
    marginTop: 13,
    backgroundColor: "#17623F",
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  detailsText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
  },
  emptyState: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E8E6",
    borderRadius: 13,
    padding: 24,
    marginTop: 6,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#174F35",
    marginTop: 10,
  },
  emptyDescription: {
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
    color: "#777",
    marginTop: 6,
  },
  resetButton: {
    marginTop: 14,
    backgroundColor: "#17623F",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  resetButtonText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
  },
  planningDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: "#777",
    marginTop: -4,
    marginBottom: 12,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  actionCard: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "44%",
    minHeight: 132,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5EAE7",
    borderRadius: 12,
    padding: 12,
  },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EAF5EF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },
  actionTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#244A36",
  },
  actionDescription: {
    fontSize: 10,
    lineHeight: 15,
    color: "#777",
    marginTop: 5,
    paddingRight: 5,
  },
  actionArrow: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  helpBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EAF5EF",
    padding: 13,
    borderRadius: 11,
    marginTop: 20,
    gap: 9,
  },
  helpTextWrap: {
    flex: 1,
  },
  helpTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#174F35",
  },
  helpDescription: {
    fontSize: 11,
    color: "#66736B",
    lineHeight: 17,
    marginTop: 4,
  },
  contactButton: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: "#17623F",
    borderRadius: 9,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  contactButtonText: {
    color: "#17623F",
    fontSize: 12,
    fontWeight: "800",
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