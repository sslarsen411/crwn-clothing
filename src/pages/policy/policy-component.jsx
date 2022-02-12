import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import './policy-component.styles.scss'

const PolicyPage = () => {
  const [policy, setPolicy] = React.useState(null)
  const params = useParams()

  const fetchData = () => {
    axios.get('https://www.mojoimpact.net/php_scripts/ajax_getContent.php?site=Crown%20Clothing&inPolicy=' + params.policyId)
      .then(response => {
        setPolicy(response.data)
        document.getElementById('policy').innerHTML = policy
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchData()
  return (
    <div className='policy-page'>
      <div id='policy' className='policy-text' />
    </div>
  )
}

export default PolicyPage
