import React from './node_modules/react'
import { connect } from './node_modules/react-redux'
import AnimeSearchBar from '../../components/animeSearchBar/AnimeSearchBar'
import { change as changeCondition } from '../../store/action/anime/searchCondition'
import { fetchAnimeData } from '../../store/action/anime/searchResult'
import AnimeList from '../../components/animeList/AnimeList'
import PagerLimit from '../../components/Pager/PagerLimit'
import store from '../../store/index'

//连接searchBar
let mapStateToProps = state => {
  return {
    defaultValue: {
      q: state.anime.searchCondition.q,
      genre: state.anime.searchCondition.genre
    }
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onSearch: (newCondition) => {
      //重新设置条件
      dispatch(changeCondition(newCondition))
      //触发获取动漫数据的action
      dispatch(fetchAnimeData())
    }
  }
}

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(AnimeSearchBar);

//连接Pager
mapStateToProps = state => {
  return {
    defaultValue: {
      page: state.anime.searchCondition.page,
      limit: state.anime.searchCondition.limit
    }
  }
}

mapDispatchToProps = dispatch => {
  return {
    onSearch: (newCondition) => {
      //重新设置条件
      dispatch(changeCondition(newCondition))
      //触发获取动漫数据的action
      dispatch(fetchAnimeData())
    }
  }
}

const Pager = connect(mapStateToProps, mapDispatchToProps)(PagerLimit);

//连接animeList
mapStateToProps = state => ({
  status: state.anime.searchResult.status
})

const Table = connect(mapStateToProps)(AnimeList);

export default class AnimeSearch extends React.Component {

  //根据最初的条件先渲染数据
  componentDidMount() {
    store.dispatch(fetchAnimeData())
  }

  render() {
    return (
      <>
        <SearchBar />
        <Table />
        <Pager />
      </>
    )
  }
}







