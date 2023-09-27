const API_KEY = "c800640326d24b22ab17a1ab64f620f8"

export async function getNews(page = 1, pageSize = 20){
  
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=br&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`)

  const jsonData = await response.json()

  return jsonData.articles || []
}