import React from 'react'
import AnimeSearchBar from '../../components/animeSearchBar/AnimeSearchBar'
import AnimeList from '../../components/animeList/AnimeList'
import { searchAnime } from '../../data/anime'
import { useState, useEffect } from 'react'
import qs from 'query-string'
import PagerLimit from '../../components/pager/PagerLimit'
import './anime.css'

//获取地址栏参数中提供的查询条件，如果某些条件缺失，该函数使用默认值
function getQuery(search) {
  const defaultQuery = {
    q: 'fate',
    genre: 1,
    page: 1,
    limit: 7
  }
  let query = qs.parse(search);
  query = {
    ...defaultQuery,
    ...query
  }
  query.genre = +query.genre;
  query.page = +query.page;
  query.limit = +query.limit;
  return query;
}

//查询条件改变反应到地址栏参数中
function changeLocation(query, history) {
  let search = qs.stringify(query)
  history.push("?" + search);
}

//获取服务器的单页响应结果
function useStatus(query) {
  let [status, setStatus] = useState([]);
  useEffect(() => {
    searchAnime(query.q, query.genre, query.page, query.limit).then(r => {
      setStatus(r)
    })
  }, [query.q, query.genre, query.page, query.limit]);
  return status;
}

export default function Anime(props) {
  let query = getQuery(props.location.search);
  let status = useStatus(query);

  if (status.length === 0) {
    return (<div>没有搜索到相关数据</div>)
  }

  return (
    <div className='animeWrapper'>
      <AnimeSearchBar defaultValue={{
        q: query.q,
        genre: query.genre
      }} onSearch={cod => {
        const newQuery = {
          ...query,
          q: cod.q,
          genre: cod.genre,
          page: 1
        }
        changeLocation(newQuery, props.history);
      }}>
      </AnimeSearchBar>

      <AnimeList status={status} />
      <div>
        <PagerLimit defaultValue={{
          page: query.page,
          limit: query.limit
        }} onSearch={cod => {
          const newQuery = {
            ...query,
            page: cod.page,
            limit: cod.limit
          }
          changeLocation(newQuery, props.history);
        }
        }
        />
      </div>
    </div>
  )
}


