import React from 'react'
import { Button } from 'reactstrap'

export default function MyButton({ value, onIncrement }) {
  return (
    <Button
      color={value < 0 ? "danger" : "primary"}
      className="mr-3"
      onClick={() => onIncrement(value)} >
      {value < 0 ? "Decrease" : "Increase"} by {Math.abs(value)}
    </Button>
  )
}
