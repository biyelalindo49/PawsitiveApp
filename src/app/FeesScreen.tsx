
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function FeesScreen() {
  const [paymentPlan, setPaymentPlan] = useState<"full" | "monthly">(
    "full"
  );

  const tuitionFee = 4200;
  const registrationFee = 350;
  const total = tuitionFee + registrationFee;

  const calculateAndApply = () => {
    Alert.alert(
      "Fee Estimate",
      paymentPlan === "full"
        ? `Your estimated total is R${total.toLocaleString("en-ZA")}. You selected full payment.`
        : `Your estimated total is R${total.toLocaleString("en-ZA")}. Please contact us to confirm monthly instalments.`
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Calculate Your Fees</Text>

          <Text style={styles.subtitle}>
            Customise multiple selections and payment terms.
          </Text>

          <Text style={styles.label}>Select Professional Course</Text>

          <View style={styles.selector}>
            <Text style={styles.selectorText}>
              Professional Pet Grooming
            </Text>
            <Ionicons name="chevron-down" size={17} color="#777" />
          </View>

          <Text style={styles.label}>Select Modules</Text>

          <View style={styles.selector}>
            <Text style={styles.selectorText}>All Modules Included</Text>
            <Ionicons name="chevron-down" size={17} color="#777" />
          </View>

          <Text style={styles.label}>Payment Plan</Text>

          <View style={styles.paymentRow}>
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentPlan === "full"
                  ? styles.selectedPayment
                  : styles.monthlyPayment,
              ]}
              onPress={() => setPaymentPlan("full")}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.paymentText,
                  paymentPlan === "full"
                    ? styles.selectedPaymentText
                    : styles.monthlyText,
                ]}
              >
                Full Payment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentPlan === "monthly"
                  ? styles.selectedPayment
                  : styles.monthlyPayment,
              ]}
              onPress={() => setPaymentPlan("monthly")}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.paymentText,
                  paymentPlan === "monthly"
                    ? styles.selectedPaymentText
                    : styles.monthlyText,
                ]}
              >
                Monthly Plan
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.breakdown}>
            <Text style={styles.breakdownTitle}>Fee Breakdown</Text>

            <Row label="Tuition Fee" value="R4,200" />
            <Row label="Registration" value="R350" />
            <Row
              label="Materials & Grooming Tools"
              value="Included"
            />

            <View style={styles.divider} />

            <Row
              label="Total Estimate"
              value={`R${total.toLocaleString("en-ZA")}`}
              bold
            />

            {paymentPlan === "monthly" && (
              <Text style={styles.paymentNote}>
                Monthly instalment amounts will be confirmed by the academy.
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={styles.calculateButton}
            onPress={calculateAndApply}
            activeOpacity={0.85}
          >
            <Text style={styles.calculateText}>Calculate & Apply</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFF" />
          </TouchableOpacity>
        </ScrollView>

        <BottomNavigation />
      </View>
    </View>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <View style={styles.row}>
      <Text style={[styles.rowLabel, bold && styles.bold]}>
        {label}
      </Text>
      <Text
        style={[
          styles.rowValue,
          bold && styles.boldGreen,
        ]}
      >
        {value}
      </Text>
    </View>
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
        active
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
  active,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon}
        size={20}
        color={active ? "#17623F" : "#777"}
      />
      <Text
        style={[
          styles.navText,
          active && styles.activeNavText,
        ]}
      >
        {label}
      </Text>
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
    padding: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 23,
    fontWeight: "800",
    color: "#174F35",
  },

  subtitle: {
    fontSize: 11,
    lineHeight: 17,
    color: "#777",
    marginTop: 5,
    marginBottom: 20,
  },

  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#333",
    marginBottom: 7,
    marginTop: 12,
  },

  selector: {
    minHeight: 44,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectorText: {
    fontSize: 12,
    color: "#333",
  },

  paymentRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 1,
  },

  paymentOption: {
    flex: 1,
    minHeight: 43,
    paddingVertical: 11,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedPayment: {
    backgroundColor: "#17623F",
    borderWidth: 1,
    borderColor: "#17623F",
  },

  selectedPaymentText: {
    color: "#FFF",
    fontWeight: "700",
  },

  monthlyPayment: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  monthlyText: {
    color: "#333",
    fontWeight: "500",
  },

  paymentText: {
    fontSize: 11,
  },

  breakdown: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 22,
    borderWidth: 1,
    borderColor: "#E2E7E4",
  },

  breakdownTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#333",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },

  rowLabel: {
    flex: 1,
    fontSize: 11,
    lineHeight: 16,
    color: "#777",
  },

  rowValue: {
    fontSize: 11,
    color: "#333",
    textAlign: "right",
  },

  bold: {
    fontWeight: "800",
    color: "#333",
  },

  boldGreen: {
    color: "#17623F",
    fontWeight: "800",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginTop: 1,
    marginBottom: 13,
  },

  paymentNote: {
    fontSize: 10,
    lineHeight: 15,
    color: "#777",
    marginTop: 3,
  },

  calculateButton: {
    backgroundColor: "#17623F",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },

  calculateText: {
    color: "#FFF",
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