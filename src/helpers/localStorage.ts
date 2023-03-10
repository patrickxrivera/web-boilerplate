// eslint-disable-next-line consistent-return
export const getVotesBudgetLocalStorage = () => {
  const data = localStorage.getItem('votesRecieved')
  if (data) {
    return JSON.parse(data)
  }
  return {}
}

// eslint-disable-next-line consistent-return
export const getVotesRecievedLocalStorage = () => {
  const data = localStorage.getItem('votesBudget')
  if (data) {
    return JSON.parse(data)
  }
  return {}
}

// eslint-disable-next-line consistent-return
export const updateVotesRecievedLocalStorage = (data: { [name: string]: number }) => {
  localStorage.setItem('votesRecieved', JSON.stringify(data))
}

// eslint-disable-next-line consistent-return
export const updateVotesBudgetLocalStorage = (data: { [name: string]: number }) => {
  localStorage.setItem('votesBudget', JSON.stringify(data))
}
