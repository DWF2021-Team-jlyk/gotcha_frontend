export default (event, start, end, isSelected) => {
  const isDone = event.card.card_isdone;
  console.log(event);
  console.log(new Date(end))
  if (isDone === "1") {
    return {
      style:{backgroundColor: '#b4e6b3'}, 
    };
  }
  else if(isDone === "0" && new Date(end).getTime() > new Date().getTime()){
    return {
      style: { backgroundColor: '#bed8f3' }, 
    }
  }
  else if(isDone === "" && new Date(end).getTime() > new Date().getTime()){
    return {
      style: { backgroundColor: '#bed8f3' },
    }
  }
  else{
    return {
      style: {backgroundColor: '#f47174'},
    }
  }
};
