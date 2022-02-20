class Support {
    name;
    designation = 'Support Wev dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
    startSesson() {
        console.log(this.name, 'start a sesson');
    }
}

const aamir = new Support("Aamir Khan",'sri');
// console.log(aamir);
aamir.startSesson();