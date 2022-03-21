import React from 'react'
import Flex from '../UI/Flex'
import Todo from './Todo'
import AddCard from './AddCard'

const Main = () => {
  return (
    <div>
      <Flex>
        <Todo />
        <AddCard />
      </Flex>
    </div>
  )
}

export default Main;