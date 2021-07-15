export default (event, start, end, isSelected) => {
  const isDone = event.card.card_isdone;
  console.log(event);
  console.log(new Date(end))
  if (isDone === "0" && new Date(end).getTime() < new Date().getTime()) {
    return {
      style:{backgroundColor: '#888888'},
    };
  }
  else if(isDone === "0" && new Date(end).getTime() > new Date().getTime()){
    return {
      style: { backgroundColor: '#157347' },
    }
  }
  else{
    return {
      style: {backgroundColor: '#000000'},
    }
  }
};
