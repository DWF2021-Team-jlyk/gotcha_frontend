const AvatarIcon = (id) => {
  let returnStr = id.charAt(0);
  for (let i = 1; i < id.length; i++) {
    if (id.charAt(i) === '@') break;
    if (id.charAt(i) === id.charAt(i).toUpperCase())
      returnStr += id.charAt(i);
  }
  return returnStr;
};

export default AvatarIcon;