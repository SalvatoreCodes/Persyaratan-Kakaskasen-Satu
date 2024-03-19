import firebase from "./firebase";

// Get a Firestore instance
const firestore = firebase.firestore();

// Function to submit form data to Firestore
export async function submitForm(formData) {
  try {
    // Add a new document with a generated ID
    await firestore.collection("submissions").add({
      Nama: formData.Nama,
      Alamat: formData.Alamat,
      Tujuan: formData.Tujuan,
      submissionDate: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; // Propagate the error to the caller
  }
}
