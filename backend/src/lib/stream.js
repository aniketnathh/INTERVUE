import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Keys and secret apis are missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertStreamUser(userData);
    console.log("Stream user was upserted Successfully:", userData);
  } catch (error) {
    console.error("Error upserting the Stream user:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted Successfully:", userId);
  } catch (error) {
    console.error("Error deleteing the Stream user:", error);
  }
};

//another method to generateTokens
