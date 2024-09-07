import { databases } from "@/lib/appwrite.config"; 
import * as sdk from "node-appwrite";
import { DATABASE_ID, APPOINTMENT_COLLECTION_ID } from "./appwrite.config";
import { AppointmentDocument } from "@/types/appwrite.types";
export async function getPatientAppointments(patientId: string): Promise<AppointmentDocument[]> {
    try {
      const response = await databases.listDocuments<AppointmentDocument>(
        DATABASE_ID!,
        APPOINTMENT_COLLECTION_ID!,
        [
          sdk.Query.equal("patientId", patientId),
          sdk.Query.orderDesc("appointmentDate"),
        ]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching patient appointments:", error);
      return [];
    }
  }
  