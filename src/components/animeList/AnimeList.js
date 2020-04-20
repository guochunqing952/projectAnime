import React from 'react'
import './animeList.css'

export default function AnimeList(props) {
  const arr = props.status.map((item, id) => <tr key={id} >
    <td>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img src={item.image_url} alt="漫画图片" />
      </a>
    </td>
    <td>{item.title}</td>
    <td>{item.score}</td>
    <td>{item.episodes}</td>
    <td>{item.members}</td>
    <td>{item.type}</td>
  </tr>)
  return (
    <table className='tab'>
      <thead>
        <tr>
          <th>Img</th>
          <th>Title</th>
          <th>Score</th>
          <th>Episodes</th>
          <th>Members</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {arr}
      </tbody>
    </table>
  )
}