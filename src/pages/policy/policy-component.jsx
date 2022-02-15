import React from 'react'
import { useParams } from 'react-router'

import axios from 'axios'

import './policy-component.styles.scss'

const PolicyPage = () => {
  const [policy, setPolicy] = React.useState(null)
  const params = useParams()
  const baseUrl = 'https://www.mojoimpact.net/php_scripts/ajax_getContent.php'

  axios.get(baseUrl, {
    params: {
      inPolicy: params.policyId,
      site: 'Crown Clothing LTD'
    }
  })
    .then(response => {
      setPolicy(response.data)
      document.getElementById('policy').innerHTML = policy
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <div className='policy-page'>
      <div id='policy' className='policy-text' />
    </div>
  )
}

export default PolicyPage
