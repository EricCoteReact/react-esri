import React from 'react'
import { Button } from 'reactstrap'

export default function MyButton({ increment, onIncrement }) {
  return (
    <Button color="primary"
      className="mr-3"
      onClick={() => onIncrement(increment)}>
      Increase by {increment}
    </Button>
  )
}
