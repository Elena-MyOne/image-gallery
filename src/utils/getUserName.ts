export const getUserName = (currentUser?: string) => {
  const userFullName = currentUser ? currentUser.split(' ').join('') : '';
  return userFullName;
};
