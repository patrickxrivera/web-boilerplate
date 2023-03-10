import React, { FC } from 'react'

// eslint-disable-next-line react/function-component-definition, arrow-body-style
const ENSName: FC<{
  votes: number
  name: string
  // eslint-disable-next-line react/require-default-props, no-unused-vars
  handleClick?: (name: string) => void
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  showSelectedState?: boolean
  // eslint-disable-next-line react/function-component-definition
}> = ({ votes = 0, name = 'example.eth', handleClick, showSelectedState }) => (
  <button
    type="button"
    className={`${
      showSelectedState ? 'border-2 border-blue-700' : ''
    } transform hover:scale-105 transition-all px-6 py-4 hover:py-6 inline-flex justify-between space-x-4 items-center rounded-full bg-gray-400 text-white`}
    onClick={() => {
      if (handleClick) {
        handleClick(name)
      }
    }}
  >
    <div>{name}</div>
    <div>{votes}</div>
  </button>
)

export default ENSName
