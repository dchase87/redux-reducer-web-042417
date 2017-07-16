export function manageFriends (state, action) {
  var currentFriends = state.friends
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...currentFriends, action.friend]}
    case 'REMOVE_FRIEND':
      var newList = state.friends.filter(friend => friend.id !== action.id)
      return {friends: newList}
    default:
      return state
  }
}
