import axios from "axios"

export default axios.create({
  
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer rYqDj7EBww_03t0ZVE3HQWQ_lYfeiTIQAVWIGeyWSTqYJWkPxbhj_f4LUyYsEBrWlmrndyBIcIDZaL9yUyapidtSQ8jW8ugi9KOaywXHIGbkThxdqcnLRzPJMUqPX3Yx"
  }
})