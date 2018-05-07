export const getRedirectPath = ({identity, avatar}) => {
  let url = identity === 'boss' ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }

  return url
}
