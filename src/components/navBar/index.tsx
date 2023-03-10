import React, { FC } from 'react'

// eslint-disable-next-line react/function-component-definition, arrow-body-style
const NavBar: FC<{
  // eslint-disable-next-line react/require-default-props
  name?: string
  // eslint-disable-next-line react/require-default-props
  votesRemaining?: number
  // eslint-disable-next-line react/function-component-definition
}> = ({ name = 'Join', votesRemaining }) => (
  <div className="h-16 px-8 bg-opacity-50 items-center bg-gray-500 fixed z-10 w-full top-0 left-0 flex justify-between">
    <div className="flex space-x-4">
      <div>{name}</div>
      {(votesRemaining || votesRemaining === 0) && <div>votes remaining {votesRemaining}</div>}
    </div>
    <button type="button">Submit your ENS name</button>
  </div>
)

export default NavBar
