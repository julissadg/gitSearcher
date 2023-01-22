import React from 'react'
import { useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search'
import { getRepo } from '../services/api.repos'

const Repositories = () => {
  const [data, setData] = useState('');
  
  return (
    <div className="container mt-4">
      <Search request={getRepo} setData={setData} repoSearch title="Search a repository" />
      { data && <Card data= {data} />}
    </div>
    
  )
}

export default Repositories