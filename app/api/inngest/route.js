import { serve } from "inngest/next";
import { inngest } from "@/config/inngest"; // ✅ import your Inngest client
import {
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "@/config/inngest";

// Serve your Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});
