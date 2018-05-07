export const getChatId = (userid, targetid) => {
  return [userid, targetid].sort().join('_')
}