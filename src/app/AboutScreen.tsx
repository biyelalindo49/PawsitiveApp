
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

export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* Main Content */}
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
                <Text style={styles.subBrand}>PET ACADEMY</Text>
              </View>
            </View>

            <TouchableOpacity
              accessibilityLabel="Go to Home"
              onPress={() => router.push("/HomeScreen")}
            >
              <Ionicons
                name="person-outline"
                size={21}
                color="#17623f"
              />
            </TouchableOpacity>
          </View>

          {/* Page Title */}
          <Text style={styles.pageTitle}>About Pawsitive</Text>

          {/* Hero Image */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900",
            }}
            style={styles.image}
            resizeMode="cover"
          />

          {/* Mission */}
          <Text style={styles.heading}>Our Living Mission</Text>

          <Text style={styles.body}>
            To empower and qualify Africa's next generation of
            professional pet carers through scientifically-proven,
            empathetic, and expert practical methodologies.
          </Text>

          {/* Features */}
          <Text style={styles.heading}>Why Choose Us</Text>

          <View style={styles.grid}>
            <Feature
              icon="ribbon-outline"
              title="Certified Experts"
              text="SAVA-aligned trainers."
            />

            <Feature
              icon="school-outline"
              title="Hands-On Learning"
              text="Real pets, real situations."
            />

            <Feature
              icon="paw"
              title="Our Core Values"
              text="Uncompromising Animal Welfare"
            />

            <Feature
              icon="book-outline"
              title="Science-Based"
              text="Evidence-led training."
            />
          </View>

          {/* Founder */}
          <View style={styles.officer}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#fff"
              />
            </View>

            <View style={styles.officerInfo}>
              <Text style={styles.officerName}>
                Dr. Sarah Naidoo
              </Text>

              <Text style={styles.officerRole}>
                Founder & Chief Academic Officer
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Fixed Bottom Navigation */}
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
        const active = item.label === "About";

        return (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityState={{ selected: active }}
            onPress={() => {
              if (!active) {
                router.push(item.route);
              }
            }}
          >
            <Ionicons
              name={item.icon}
              size={19}
              color={active ? "#17623f" : "#777"}
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

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.feature}>
      <Ionicons
        name={icon as any}
        size={19}
        color="#17623f"
      />

      <Text style={styles.featureTitle}>{title}</Text>

      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Browser background */
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#eef2ef",
  },

  /* App-sized container */
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
    paddingBottom: 25,
  },

  /* Header */
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

  subBrand: {
    fontSize: 8,
    color: "#777",
    letterSpacing: 1,
  },

  /* Page heading */
  pageTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#174f35",
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 14,
  },

  heading: {
    fontSize: 15,
    fontWeight: "800",
    color: "#174f35",
    marginTop: 16,
    marginBottom: 6,
  },

  body: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },

  /* Feature cards */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 8,
  },

  feature: {
    width: "48.5%",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 11,
  },

  featureTitle: {
    fontSize: 11,
    fontWeight: "700",
    marginTop: 5,
    color: "#333",
  },

  featureText: {
    fontSize: 9,
    color: "#888",
    marginTop: 3,
  },

  /* Founder card */
  officer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f4f7f5",
    marginBottom: 5,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#17623f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  officerInfo: {
    flex: 1,
  },

  officerName: {
    fontWeight: "800",
    fontSize: 12,
    color: "#333",
  },

  officerRole: {
    fontSize: 9,
    color: "#777",
    marginTop: 2,
  },

  /* Fixed bottom navigation */
  bottomNav: {
    height: 65,
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
    backgroundColor: "#fff",
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