//mPulse Messenger Application

//Basic indexes for accounts and messages.
const accountIndex = [];
const messageThread = [];
const _memberships = [];


//Messenger Under-the-Hood
//Base mPulse ID Profile function.
let createMPulseID = (nickname, pass) => {
    let mPulseID = {
        _nickname: nickname,
        _pass: pass,
        _age: undefined,
        _email: undefined,
        _walletID: undefined,
        _isOnline: false,
        _memberships:[],

        addMembership: (membership) => {this._memberships[this._memberships.length] = membership;},
        
        get wallet() {return this._walletID;},
    
        get mPulseID() {return this._nickname;},
    
        set mPulseAge(num) {this._age = num;},
    
        set mPulseEmail(address) {this._email = address;},
    
        set changePass(newPass) {this._pass = newPass;},
    
        set wallet(newWallet) {this._walletID = newWallet;}
    };
    
    let index = mPulseID;
    accountIndex.push(index);
    return mPulseID;
}


/*
Just a space to break up the two mPulse properties.
*/


//Messenger Profile Function.
let createMessengerProfile = () => {
    let messengerProfile = {
        mID: id,
        mPass: pass,
        mIsOnline: isOnline,

        changePassword: (mPassword) => {this.mPass = mPassword;}
    };
}


//Base message function.
let createMessage = (sendID, receiveID, data) => {
    //Date and Time stamp function.
    let timestamp = function () {
        let today =  new Date();
        const date = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const stamp = date + ' ' + time;

        return stamp;
    }


    //Message object.
    let message = {
        _send: sendID,
        _receive: receiveID,
        _data : data,
        _timestamp: timestamp()
    }

    let mIndex = message;
    messageThread.push(mIndex);

    return message;
}

//Locate and create thread of conversation.
let findConversation = (person1, person2) => {
    let convo = new Array();


    for(let message of messageThread) {
        if ((person1  == message._receive || message._send) && (person2 == message._receive || message._send)) {
            convo.push(message);
            console.log('Conversation found.');
        } else{
            console.log('Conversation not found.');
        }
    }


    return convo;
}


const AmunRa = createMPulseID("D'Amun~Ra", 'R3d_Crus@de');
AmunRa._age = 28;
AmunRa._email = 'Dlittlejohn@GenetixMedia.org';


let Josh = createMPulseID('JHagins', 'josh');
Josh._age = 25;
Josh._email = 'joshuakhagins@gmail.com';


createMessage(AmunRa, Josh,'Hello! This is a test message!');
createMessage(Josh, AmunRa,'This is awesome. I can\'t wait to see the finihed product!');


console.log(findConversation(AmunRa, Josh));
console.log(accountIndex);
