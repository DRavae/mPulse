//mPulse Messenger Application


//Messenger Under-the-Hood



//Base message class.

/*
class Message {
    constructor(sendID, receiveID, data) {
        this._send = sendID;
        this._receive = receiveID;
        this._data = data;
        this._timestamp = timestamp();
           
        messageThread.push(this);
    }
}
*/

let createMessage = function (sendID, receiveID, data) {
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
}


let findConversation = function (person1, person2) {
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


/*



Just a space to break up the two mPulse properties.



*/


//Basic indexes for accounts and messages.
const accountIndex = [];
const messageThread = [];
const _memberships = [];


//Base mPulse ID Profile class.


let createMPulseID = function (nickname, pass){
    let mPulseID = {
        _nickname: nickname,
        _pass: pass,
        _age: undefined,
        _email: undefined,
        _walletID: undefined,
        _isOnline: false,
        _memberships:[],

        addMembership: function (membership) {this._memberships[this._memberships.length] = membership;},
    };
    
    let index = mPulseID;
    accountIndex.push(index);
    return mPulseID;
}


/*
class MPulseID extends Message {
    constructor(nickname, pass)  {
        super();
        this._nickname = nickname;
        this._pass = pass;
        this._age = undefined;
        this._email = undefined;
        this._walletID = undefined;
        this._isOnline = false;
        this._memberships = [];
        
        let myProfile = this;
        accountIndex.push(myProfile);
        //accountIndex.push(this.nickname);
    }

    get wallet() {
        return this._walletID;
    }

    get mPulseID() {
        return this._nickname;
    }

    set mPulseAge(num) {
        this._age = num;
    }

    set mPulseEmail(address) {
        this._email = address;
    }

    set changePass(newPass) {
        this._pass = newPass;
    }

    set wallet(newWallet) {
        this._walletID = newWallet;
    }
}
*/


const AmunRa = createMPulseID("D'Amun~Ra", 'R3d_Crus@de');
AmunRa._age = 28;
AmunRa._email = 'Dlittlejohn@GenetixMedia.org';


let Josh = createMPulseID('JHagins', 'josh');
Josh._age = 25;
Josh._email = 'joshuakhagins@gmail.com';


let message1 = createMessage(AmunRa, Josh,'Hello! This is a test message!');
let message2 = createMessage(Josh, AmunRa,'This is awesome. I can\'t wait to see the finihed product!');


console.log(findConversation(AmunRa, Josh));
console.log(accountIndex);
