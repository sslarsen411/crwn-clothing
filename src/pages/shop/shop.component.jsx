import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
// import CollectionPage from '../collections/collection.component'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    <CollectionsOverview />
  </div>
)

// const ShopPage = ({ match }) => (
//   <div className='shop-page'>
//     <Routes>
//       <Route path='/hats' element={<CollectionsOverview />} />
//       {/* <Route path='hats/:collectionId' element={<CollectionPage />} /> */}
//     </Routes>
//     {/* <Routes>
//       <Route path={`${match.path}`} element={<CollectionsOverview />} />
//       <Route path={`${match.path}/:collectionId`} element={<CollectionPage />} />
//     </Routes> */}
//   </div>
// )

export default ShopPage
