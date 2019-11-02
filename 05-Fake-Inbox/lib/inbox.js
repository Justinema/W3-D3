const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.

  if (Math.random()<=0.3){
    return true;
  }else{
    return false;
  }
};


// let mail = [
//   {
//     sender: 'GitHub Team',
//     subject: 'Welcome to GitHub'
//   },
//   {
//     sender: 'Arnold Schwarzenegger',
//     subject: "I'm Back"
//   },
//   {
//     sender: 'zebra',
//     subject: "I'm Home"
//   }
// ];

const newMessage = async () => {
  let data =  await fetch("https://fml.shanghaiwogeng.com/api/v1/stories")
  return await data.json()   // This will return a **Promise** object
};


//  const newset =()=>{newemail().then((msgs)=>{
//       console.log(msgs);
//   });
// }
// const newMessage = () => {
//   // TODO: return a random message as an object with two keys, subject and sender
//   return newset[Math.floor(Math.random()*newset.length)];

// };

const appendMessageToDom = async() => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)

  let d1 = document.getElementById("inbox");
  const msgs = await newMessage();
  let numberOfMails = Math.floor(Math.random()*msgs.length)+1;
  for (let i =0; i<numberOfMails;i++){
     let info =msgs[Math.floor(Math.random()*msgs.length)];
    d1.insertAdjacentHTML('afterbegin', `<div class="row message unread"><div class="col-3">${info.name}</div><div class="col-9">${info.text}</div></div>`);
  }

  // msgs.forEach((info)=>{
  //   d1.insertAdjacentHTML('afterbegin', `<div class="row message unread"><div class="col-3">${info.name}</div><div class="col-9">${info.text}</div></div>`);
  // })

};

  // let newnum = 1;
  let newcount = document.getElementById("count");
  // let mailtitle = document.title;
  const refresh = async () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if(hasNewMessage()){
    await appendMessageToDom();
    const unread =document.querySelectorAll(".unread").length;
    document.title = `Inbox(${unread})`;
    newcount.innerText = `(${unread})`;
    }


  // if (hasNewMessage()==true){
  //   newnum ++;
  //   newcount.innerText = `(${newnum})`;
  //   document.title = `Inbox${newcount.innerText}`;
  //   return appendMessageToDom();
  // }
};

//new mission!!!!
// const newemail = async () => {
//   let data =  await fetch("https://fml.shanghaiwogeng.com/api/v1/stories")
//   return await data.json()   // This will return a **Promise** object

// };
//  const newset =()=>{newemail().then((msgs)=>{
//       console.log(msgs);
//   });
// }


















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

