import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import './shop.styles.scss'
const ShopPage = () => (
  <div className='shop-page'>
    <h1>Shop Our Fine Selections</h1>
    <Routes>
      <Route path='/' element={<CollectionsOverview />} />
      <Route exact path=':collectionId' element={<CollectionPage />} />
    </Routes>
  </div>
)

export default ShopPage
