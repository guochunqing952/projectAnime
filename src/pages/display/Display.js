import React from 'react'
import { Route } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import Anime from '../main/Anime'
// import AnimeSearch from '../main/AnimeSearch'


export default function Display() {
  return (
    <Layout header={<Header />} category={<Category />}>
      <Route path="/anime" exact component={Anime}></Route>
    </Layout>
  )
}
