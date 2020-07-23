const initState = {
    posts: [
        {id: '1', title: 'Account 1', bank: 'Bank 1', ballance: 1200},
        {id: '2', title: 'Account 2', bank: 'Bank 2', ballance: 700},
        {id: '3', title: 'Account 3', bank: 'Bank 3', ballance: 500}
    ],
    transfers: [
      {sender: 'Account 3', receiver: 'Account 2', amount: 50, date: '07/21/2020'},
      {sender: 'Account 1', receiver: 'Account 3', amount: 200, date: '07/21/2020'},
      {sender: 'Account 2', receiver: 'Account 1', amount: 77, date: '07/20/2020'},
      {sender: 'Account 3', receiver: 'Account 1', amount: 54, date: '07/20/2020'},
      {sender: 'Account 1', receiver: 'Account 2', amount: 300, date: '07/20/2020'},
      {sender: 'Account 2', receiver: 'Account 3', amount: 20, date: '07/20/2020'},
      {sender: 'Account 1', receiver: 'Account 2', amount: 40, date: '07/19/2020'},
      {sender: 'Account 2', receiver: 'Account 1', amount: 130, date: '07/19/2020'},
    ],
    bills: [
      {name: 'Uottawa Fees', amount: 200},
      {name: 'Car Insurance', amount: 500},
      {name: 'House Rent', amount: 900}
    ],
    budget: [
      {name: 'Food', amount: 1000},
      {name: 'Cloths', amount: 400},
      {name: 'School', amount: 900},
      {name: 'Rent', amount: 700}
    ],
    events: [
      {title: 'Rent due', date: '2020-07-22'},
      {title: 'Pay hydro', date: '2020-07-21'},
      {title: 'School', date: '2020-07-24'},
      {title: 'Hair cut', date: '2020-07-23'}
    ]
}

const rootReducer = (state = initState, action) => {

  if(action.type === 'SUBTRACT_BALLANCE') {
    let newPost = state.posts.map(post => {
      if(action.id === 'Account ' + post.id) {
        post.ballance = post.ballance - action.amount;
      }
      return post;
    });
    return {
      ...state, 
      posts: newPost
    }
  }

  if(action.type === 'SUBTRACT_BILL') {
    let tmpBill = state.bills.map(bill => {
      // alert(action.id === bill.name)
      if(action.id === bill.name) {
        bill.amount = bill.amount - action.amount;
      }
      return bill;
    });
    
    let newBill = tmpBill.filter(bill => {
      // alert(bill.amount);
      return bill.amount > 0;
    });
    // alert(newBill.length);
    return {
      ...state, 
      bills: newBill
    }

  }

  if(action.type === 'ADD_BALLANCE') {
    let newPost = state.posts.map(post => {
      if(action.id === 'Account ' + post.id) {
        post.ballance = Number(post.ballance) + Number(action.amount);
      }
      return post;
    });
    return {
      ...state, 
      posts: newPost
    }
  }



  if(action.type === 'ADD_TRANSFER') {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var newTransfer = [{sender: action.acc, receiver: action.rec, amount: action.amount, date: dd + '/' + mm + '/' + yyyy}];
    for (let i = 0; i < state.transfers.length; i++) {
      newTransfer.push(state.transfers[i]); 
    }
    return {
      ...state, 
      transfers: newTransfer
    }
  }


  if(action.type === 'DELETE_ITEM') {

    let newBudget = state.budget.filter(tmp => {
      return action.id !== tmp.name;
    });
    // alert(newBudget[0].name);
    return {
      ...state, 
      budget: newBudget
    }
  }

  if(action.type === 'ADD_ITEM') {

    var newBudget = [{name: action.id, amount: action.amount}];
    for (let i = 0; i < state.budget.length; i++) {
      newBudget.push(state.budget[i]); 
    }
    return {
      ...state, 
      budget: newBudget
    }
  }

  if(action.type === 'ADD_DATE') {

    var newEvent = [{title: action.name, date: action.date}];
    for (let i = 0; i < state.events.length; i++) {
      newEvent.push(state.events[i]); 
    }
    return {
      ...state, 
      events: newEvent
    }
  }





















  return state;
}

export default rootReducer