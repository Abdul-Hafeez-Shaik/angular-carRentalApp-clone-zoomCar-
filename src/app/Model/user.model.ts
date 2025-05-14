export class  userRegister{
    userId: number
    name: string
    userRole: string
    emailId: string
    mobileNo: string
    password: string
    createdOn: string

    constructor(){
        this.userId = 0;
        this.name = 'aj';
        this.userRole = 'customer';
        this.emailId = 'amai@gmail.com';
        this.mobileNo = '65456';
        this.password = 'password@1';
        this.createdOn = new Date().toISOString();
    }
}