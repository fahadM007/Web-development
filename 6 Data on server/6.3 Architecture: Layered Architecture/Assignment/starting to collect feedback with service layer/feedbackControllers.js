
import * as feedback from "./feedback.js" 


const getFeedback =  async (c) => {
  const id = c.req.param("id");
 return  c.text(`Feedback 1: ${ (await feedback.getFeedback(id))}`)
}

const incrementAndGetFeedback = async (c) => {
  const id = c.req.param("id");
  await feedback.incrementFeedback(id);
  
  return c.text();

}

export {getFeedback,incrementAndGetFeedback}