
import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const GREEN = "#236B4A";

const galleryItems = [
  {
    id: "1",
    title: "Professional Grooming",
    category: "Grooming",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=85",
    description: "Explore grooming and coat-care techniques.",
  },
  {
    id: "2",
    title: "Happy Dogs",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
    description: "Celebrating happy, healthy companions.",
  },
  {
    id: "3",
    title: "Training Time",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
    description: "Discover positive training principles.",
  },
  {
    id: "4",
    title: "Puppy Care",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85",
    description: "Learn about gentle and responsible pet care.",
  },
  {
    id: "5",
    title: "Care & Wellbeing",
    category: "Grooming",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85",
    description: "Put comfort, hygiene and animal welfare first.",
  },
  {
    id: "6",
    title: "Learning with Animals",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=85",
    description: "Build knowledge through practical learning.",
  },
];

const categories = ["All", "Grooming", "Training", "Pets"];

const navItems = [
  { label: "Home", icon: "⌂", route: "/HomeScreen" },
  { label: "About", icon: "♡", route: "/AboutScreen" },
  { label: "Courses", icon: "▤", route: "/CoursesScreen" },
  { label: "Fees", icon: "R", route: "/FeesScreen" },
  { label: "Contact", icon: "✉", route: "/ContactScreen" },
];

export default function OurGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

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
          {/* Hero */}
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>LIFE AT PAWSITIVE</Text>
            <Text style={styles.heading}>Our Gallery</Text>
            <Text style={styles.intro}>
              A closer look at the wonderful world of pet care, grooming,
              training and the bond we share with animals.
            </Text>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85",
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />

          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Explore the gallery</Text>
            <Text style={styles.sectionDescription}>
              Browse photos by category.
            </Text>
          </View>

          {/* Category filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterList}
          >
            {categories.map((category) => {
              const selected = activeCategory === category;

              return (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.filterButton,
                    selected && styles.filterButtonActive,
                  ]}
                  onPress={() => setActiveCategory(category)}
                >
                  <Text
                    style={[
                      styles.filterText,
                      selected && styles.filterTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Gallery cards */}
          <View style={styles.galleryGrid}>
            {filteredItems.map((item) => (
              <View key={item.id} style={styles.galleryCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />

                <View style={styles.galleryCardBody}>
                  <Text style={styles.categoryLabel}>
                    {item.category.toUpperCase()}
                  </Text>
                  <Text style={styles.galleryTitle}>{item.title}</Text>
                  <Text style={styles.galleryDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Call to action */}
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>
              Want to learn more about pet care?
            </Text>
            <Text style={styles.ctaDescription}>
              Explore our courses and discover the learning path that suits
              your interests.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigate("/CoursesScreen")}
            >
              <Text style={styles.primaryButtonText}>
                Explore our courses →
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigate("/StudentLifeScreen")}
            >
              <Text style={styles.secondaryButtonText}>
                Student Life & Training
              </Text>
            </TouchableOpacity>
          </View>

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
  hero: {
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
    fontSize: 31,
    lineHeight: 38,
    fontWeight: "800",
    marginBottom: 9,
  },
  intro: {
    color: "#68756E",
    fontSize: 14,
    lineHeight: 22,
  },
  heroImage: {
    width: "100%",
    height: 185,
    borderRadius: 18,
    marginBottom: 25,
    backgroundColor: "#E5EAE7",
  },
  sectionHeading: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#18392A",
    fontSize: 20,
    fontWeight: "800",
  },
  sectionDescription: {
    color: "#78847D",
    fontSize: 13,
    marginTop: 5,
  },
  filterList: {
    paddingBottom: 18,
    gap: 8,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#DCE5DF",
    borderRadius: 22,
    paddingVertical: 9,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  filterButtonActive: {
    backgroundColor: GREEN,
    borderColor: GREEN,
  },
  filterText: {
    color: "#52645A",
    fontSize: 12,
    fontWeight: "700",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  galleryCard: {
    width: "48.5%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4EAE6",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 13,
  },
  galleryImage: {
    width: "100%",
    height: 125,
    backgroundColor: "#E5EAE7",
  },
  galleryCardBody: {
    padding: 10,
  },
  categoryLabel: {
    color: GREEN,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 6,
  },
  galleryTitle: {
    color: "#18392A",
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "800",
    marginBottom: 5,
  },
  galleryDescription: {
    color: "#68756E",
    fontSize: 11,
    lineHeight: 16,
  },
  ctaCard: {
    marginTop: 14,
    padding: 18,
    backgroundColor: "#F1F7F2",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#DDE9E0",
  },
  ctaTitle: {
    color: "#18392A",
    fontSize: 19,
    lineHeight: 25,
    fontWeight: "800",
    marginBottom: 8,
  },
  ctaDescription: {
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
    marginTop: 9,
  },
  secondaryButtonText: {
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