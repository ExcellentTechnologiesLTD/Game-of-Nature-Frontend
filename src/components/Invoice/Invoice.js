import React from "react";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Define your invoice data (e.g., customer details, order items, total, etc.)
const invoiceData = {
  customerName: "John Doe",
  orderItems: [
    { description: "Product A", quantity: 2, price: 10 },
    { description: "Product B", quantity: 1, price: 15 },
  ],
  total: 35,
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

function Invoice() {
  return (
    <Text>hello</Text>
    // <PDFViewer style={{ width: "100%", height: "500px" }}>
    // <Document>
    //   <Page size="A4" style={styles.page}>
    //     <View style={styles.section}>
    //       <Text style={styles.text}>Invoice</Text>
    //       <Text style={styles.text}>Customer: {invoiceData.customerName}</Text>
    //     </View>
    //     <View style={styles.section}>
    //       <Text style={styles.text}>Order Items:</Text>
    //       {invoiceData.orderItems.map((item, index) => (
    //         <View key={index} style={styles.text}>
    //           <Text>{item.description}</Text>
    //           <Text>Quantity: {item.quantity}</Text>
    //           <Text>Price: ${item.price}</Text>
    //         </View>
    //       ))}
    //     </View>
    //     <View style={styles.section}>
    //       <Text style={styles.text}>Total: ${invoiceData.total}</Text>
    //     </View>
    //   </Page>
    // </Document>
    // </PDFViewer>
  );
}

export default Invoice;
