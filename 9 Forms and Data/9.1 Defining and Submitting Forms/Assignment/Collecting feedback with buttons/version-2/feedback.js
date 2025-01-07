let count = 0;

let data = {
  feedback: {
    "1": { count: 0 },
    "2": { count: 0 },
    "3": { count: 0 },
  },
};

//function that returns the data from the variable 

const getFeedbackCount = (id) => {
  const feedback = data.feedback[id];
  return feedback;
}



const incrementFeedbackCount = (id) => {
  const feedback = data.feedback[id];
  feedback.count++
  return feedback.count;
}


export {getFeedbackCount,incrementFeedbackCount}