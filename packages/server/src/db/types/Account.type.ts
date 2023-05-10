interface IAccount{
    accountId: String;
    accountName: String;
    accountType: String;
    accountDescription: String;
    accountPicture: String;
    accountBarnner: String;
    accountLocation: String;
    accountAddress: String;
    managerName: String;
    managerContact: String;
    genre?: String
}
export default IAccount;