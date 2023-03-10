import React, { useEffect, useState } from 'react'
import ENSName from '../../components/ensName'
import NavBar from '../../components/navBar'

// eslint-disable-next-line react/function-component-definition, arrow-body-style
const LeaderboardPage = () => {
  const title = 'Leaderboard'
  const connectedWallet = 'alex.eth'

  const [names] = useState<string[]>(['poop.eth', 'lol.eth', 'haha.eth', 'lmao.eth', 'gm.eth'])
  const [votesBudget, setVotesBudget] = useState<{ [name: string]: number }>({})
  const [votesRecieved, setVotesRecieved] = useState<{ [name: string]: number }>({})

  // Load the local storage
  useEffect(() => {
    const votesBudgetData = localStorage.getItem('votesBudget')
    console.log(`votesBudgetData: ${votesBudgetData}`)
    if (votesBudgetData) {
      if (Object.keys(JSON.parse(votesBudgetData)).length === 0) {
        localStorage.setItem('votesBudget', JSON.stringify({ 'alex.eth': 3 }))
        setVotesBudget({ 'alex.eth': 3 })
      } else {
        setVotesBudget(JSON.parse(votesBudgetData))
      }
    }
    const votesCastedData = localStorage.getItem('votesRecieved')
    if (votesCastedData) {
      setVotesRecieved(JSON.parse(votesCastedData))
    }
  }, [])

  // Update the local storage
  useEffect(() => {
    localStorage.setItem('votesBudget', JSON.stringify(votesBudget))
  }, [votesBudget])
  useEffect(() => {
    localStorage.setItem('votesRecieved', JSON.stringify(votesRecieved))
  }, [votesRecieved])

  const canWalletVote = votesBudget[connectedWallet] > 0

  return (
    <>
      <NavBar name={connectedWallet} votesRemaining={votesBudget[connectedWallet]} />
      <div className="container mx-auto py-16">
        <h1 className="mb-12 mt-12">{title}</h1>
        <div className="flex flex-col space-y-3">
          {names.map((name) => {
            const votes = votesRecieved[name] ? votesRecieved[name] : 0
            return (
              <ENSName
                name={name}
                votes={votes}
                handleClick={() => {
                  if (canWalletVote) {
                    setVotesRecieved({
                      ...votesRecieved,
                      [name]: name in votesRecieved ? votesRecieved[name] + 1 : 1,
                    })
                    setVotesBudget({
                      ...votesBudget,
                      [connectedWallet]: votesBudget[connectedWallet] - 1,
                    })
                  }
                }}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LeaderboardPage
