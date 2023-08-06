const acc1={
   fullName: 'Saroj Kumar',
   email: 'sarojkum822@gmail.com',
   address: 'Chakdah',
   city: 'Madhubani',
   state: 'Bihar',
   zipCode: 847211,

   nameOnCard: 'Saroj Kumar',
   creditCardNo: 1111222233334444,
   expMonth: 'September',
   expYear: 2024,
   cvv: 822
};

let userAcc={
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: 0,

    nameOnCard: '',
    creditCardNo: 0,
    expMonth: '',
    expYear: 0,
    cvv: 0
};

const subBtn=document.getElementById('subBtn');
subBtn.addEventListener('click',()=>{
    userAccCreation();
    if(userAcc=acc1){
        alert(`Nice Mr. ${acc1.fullName}, you can proceed.`);
    }
    else{
        alert(`Details mismatch. Check the entered details`);
    }
});

function auth(){
    
    window.location.assign("sucess.html");
    
}

function userAccCreation(){
    userAcc.fullName=document.getElementById('fn').value;
    userAcc.email=document.getElementById('em').value;
    userAcc.address=document.getElementById('add').value;
    userAcc.city=document.getElementById('ct').value;
    userAcc.state=document.getElementById('st').value;
    userAcc.zipCode=parseInt(document.getElementById('zc').value);
    userAcc.nameOnCard=document.getElementById('noc').value;
    userAcc.creditCardNo=parseInt(document.getElementById('ccn').value);
    userAcc.expMonth=document.getElementById('em').value;
    userAcc.expYear=parseInt(document.getElementById('ey').value);
    userAcc.cvv=parseInt(document.getElementById('cv').value);
}
