//Define a simple in-memory "database" to store the count

// In-memory object to store feedback counts store data in memory 
const feedbackCounts = {
  1: 0,
  2: 0,
  3: 0
};


const getFeedBackCount = (id) => {
  return feedbackCounts[id]
}


const incrementFeedBack = (id) => {
  feedbackCounts[id] = feedbackCounts[id] + 1;
};

export {getFeedBackCount , incrementFeedBack}