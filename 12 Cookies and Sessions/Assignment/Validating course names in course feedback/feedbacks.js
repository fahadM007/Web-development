// feedbacks.js

// Import Deno KV module for persistence
const kv = await Deno.openKv();

// Function to get the feedback count for a specific course and feedback ID
const getFeedbackCount = async (course, id) => {
  const store = await kv.get(["feedbacks", course, id]);
  return store?.value ?? 0; // Return current count or 0 if not found
};

// Function to increment the feedback count for a specific course and feedback ID
const incrementFeedbackCount = async (course, id, incrementBy = 1) => {
  // Get the current count
  const currentCount = await getFeedbackCount(course, id);
  
  // Increment the feedback count
  const newCount = currentCount + incrementBy;

  // Save the new count to Deno KV
  await kv.set(["feedbacks", course, id], newCount);
};

// Function to manage session feedback count
const getSessionFeedbackCount = async (sessionId) => {
  const store = await kv.get(["sessionFeedbacks", sessionId]);
  return store?.value ?? 0; // Return current session count or 0 if not found
};

const incrementSessionFeedbackCount = async (sessionId, incrementBy = 1) => {
  // Get the current session feedback count
  const currentCount = await getSessionFeedbackCount(sessionId);
  
  // Increment the session feedback count
  const newCount = currentCount + incrementBy;

  // Save the new session count to Deno KV
  await kv.set(["sessionFeedbacks", sessionId], newCount);
};

// Export functions to be used in app.js
export { getFeedbackCount, incrementFeedbackCount, getSessionFeedbackCount, incrementSessionFeedbackCount };
