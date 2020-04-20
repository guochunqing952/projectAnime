//获取动漫的查询结果
export async function searchAnime(q = 'fate', genre = 1, page = 1, limit = 7) {
  return await fetch(`https://api.jikan.moe/v3/search/anime?q=${q}&genre=${genre}&page=${page}&limit=${limit}`)
    .then(resp => resp.json()).then(resp => resp.results);
}

