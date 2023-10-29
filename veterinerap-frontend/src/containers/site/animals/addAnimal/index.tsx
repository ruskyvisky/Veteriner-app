import React from 'react'
import AnimalInfoFields from './components/animalInfoFields'
import { Button } from 'antd'

const AddAnimals = () => {
  return (
    <>    
      <AnimalInfoFields/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button type='primary' style={{ backgroundColor: 'green', margin: '10px' }}>Kaydet</Button>
</div>    </>

  )
}

export default AddAnimals