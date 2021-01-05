import React from 'react'
import { Button } from 'reactstrap'

export default function MyButton({ value, onIncrement }) {
  return (
    <Button color="primary"
      className="mr-3"
      onClick={() => onIncrement(value)}>
      Increase by {value}
    </Button>
  )
}
