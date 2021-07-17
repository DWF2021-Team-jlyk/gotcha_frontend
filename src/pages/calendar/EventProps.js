export default (event, start, end, isSelected) => {
  const isDone = event.card.card_isdone;
  console.log(event);
  console.log(new Date(end))
  if (isDone === "1") {
    return {
      style:{backgroundColor: '#00e676'},
    };
  }
  else if(isDone === "0" && new Date(end).getTime() > new Date().getTime()){
    return {
      style: { backgroundColor: '#4fc3f7' },
    }
  }
  else{
    return {
      style: {backgroundColor: '#ff3d00'},
    }
  }
};
