import { db } from "@/firebaseConfig";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

type OperationResponse<T> = {
  success: boolean;
  id: string | null;
  message: string | null;
  data: T | null;
};

export const addToWaitList = async (userData: {
  email: string;
}): Promise<OperationResponse<{ email: string }>> => {
  try {
    const waitListData = {
      ...userData,
      createdAt: serverTimestamp(),
    };
    const docREf = await addDoc(collection(db, "waitlist"), waitListData);
    return {
      success: true,
      id: docREf.id,
      message: "User added to waitlist",
      data: null,
    };
  } catch (error) {
    console.error("Error adding user to waitlist", error);
    return {
      success: false,
      id: null,
      message: (error as Error).message,
      data: null,
    };
  }
};
