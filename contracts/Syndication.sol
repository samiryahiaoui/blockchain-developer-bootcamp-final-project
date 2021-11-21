// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title SyndicatedLoan
 * @dev Request a loan for a given ETH amount and allow a syndicate of borrowers to bid on the loan
 */
contract Syndication {

    // owner doesn't need to change ever after constructor is called
    address private owner; 
    // flag to retire contract. Can only be reset by an internal function call from the contract owner.
    bool internal contractRetired;  
    // keeps count of the number of loans in any state
    uint public loanCount;
    // loan state during the lifetime of the loan
    enum loanState {initiated, subscribed, fulfilled, closed} loanState state;

    struct Loan{
        uint loanID;
        string borrower;
        uint loanAmount;
        uint committedTotal;
        loanState state;
    }
    struct Bid{
        uint bidAmount;
        uint yieldAsked;
        string bidder;
    }
    // borrowers list. Borrowers can register only through function registerBorrower
    mapping(address => string)  borrowers;
    // lender list. Lenders can register as a lender only through function registerLender
    mapping(address => string)  lenders;
    // List of loans available. Must be public so that borrowers and lenders and others (for instance an auditor) can inspect the list
    mapping(uint => Loan) public loans;
    // For each loan, the list of bids from lenders is available so that the borrower can pick the best combination of bidders
    mapping(uint => Bid[]) public bids;
    
    constructor(){
        owner = msg.sender;
        loanCount = 0;
        contractRetired = false;
    }

    /* 
     * Events
     */

    // <LogLoanStateChange event: _loanID arg>
    event LogLoanStateChange(uint _loanID);

    // <LogLoanHasNewBid event: _loanID arg>
    event LogLoanHasNewBid(uint _loanID);

    // <LogBorrowerRegistered event _address arg>
    event LogBorrowerRegistered(address _address);

    // <LogLenderRegistered event _address arg>
    event LogLenderRegistered(address _address);

    /*
     * Modifiers
     */
    // <modifier: isRegisteredAsBorrower
    modifier isRegisteredAsBorrower(){
        _;
        require(getLength(borrowers[msg.sender])>0, "Is not a registered borrower");
    }
    // <modifier: isRegisteredAsLender
    modifier isRegisteredAsLender(){
        _;
        require(getLength(lenders[msg.sender])>0, "Is not a registered lender");
    }
    // <modifier: nameNotEmpty
    modifier nameNotEmpty(string memory _name){
        require(getLength(_name)>0, "Name is not significant");
        _;
    }
    // <modifier: contractNotRetired
    modifier contractNotRetired(){
        require(contractRetired == false,  "Ncontract retired by owner");
        _;
    }

    /**
     * @dev set flag to retire the contract
     * @param _address address that must be that of the contract owner
     */
    function retire(address _address) public {
        require(_address == owner);
        // TODO in the finalized version of the contract, return all amounts sent by lenders before retiring the contract.
        contractRetired = true;
    }

    /**
     * @dev register borrower
     * @param _lein Legal Entity Identifier of borrower or borrower's name
     */
    function registerBorrower(string memory _lein) public contractNotRetired() nameNotEmpty(_lein) isRegisteredAsBorrower() returns(string memory) {
        borrowers[msg.sender] = _lein;
        emit LogBorrowerRegistered(msg.sender);
        return(borrowers[msg.sender]);
    }

    /**
     * @dev register lender
     * @param _lein Legal Entity Identifier of lender or lender's name
     */
    function registerLender(string memory _lein) public contractNotRetired() nameNotEmpty(_lein) isRegisteredAsLender() returns(string memory){
        lenders[msg.sender] = _lein;
        emit LogLenderRegistered(msg.sender);
        return(lenders[msg.sender]);
    }

    /**
     * @dev borrower request a loan (amount required to be positive)
     * @param _amount loan amount
     */
     function requestLoan(uint _amount) public contractNotRetired(){
        address sender = msg.sender;
        require(getLength(borrowers[sender])> 0);
        loans[loanCount] = Loan(loanCount, borrowers[sender], _amount, 0, loanState.initiated);
        loanCount++;
     }

     function getLoanBorrower(uint _loanID) public view returns(string memory){
         return loans[_loanID].borrower;
     }
     function getLoanAmount(uint _loanID) public view returns(uint){
         return loans[_loanID].loanAmount;
     }
     function getLoanCommittedTotal(uint _loanID) public view returns(uint){
         return loans[_loanID].committedTotal;
     }
     function getLoanState(uint _loanID) public view returns(loanState){
         return loans[_loanID].state;
     }

     /**
      * @dev Lender makes a bid on a loan
      * @param _loanAmount is the amount the lender is willing to lend. This is required to be positive.
      * @param _rate is the rate at which the lender is willing to lend
      */
      function makeBid(uint _loanID, uint _loanAmount, uint _rate) public contractNotRetired(){
          require(getLength(lenders[msg.sender]) > 0);  // lender must first register themself
          require(_loanAmount > 0); // lender can make only positive bids
          require(loans[_loanID].loanAmount > 0); // lender can only bid for existing loans
          require(loans[_loanID].state < loanState.closed); // closed loans no longer accept bids
          bids[_loanID].push(Bid(_loanAmount, _rate, lenders[msg.sender]));
          if(loans[_loanID].state == loanState.initiated){
            loans[_loanID].state = loanState.subscribed;
            loans[_loanID].committedTotal = _loanAmount;
          }
          else if((loans[_loanID].state == loanState.subscribed) && (loans[_loanID].committedTotal + _loanAmount < loans[_loanID].loanAmount)){
              loans[_loanID].committedTotal = loans[_loanID].committedTotal + _loanAmount;
              loans[_loanID].state = loanState.subscribed;
          }
          else{
              loans[_loanID].committedTotal = loans[_loanID].committedTotal + _loanAmount;
              loans[_loanID].state = loanState.fulfilled;
          }
      }

    /**
     * @dev function to get the list of bids on a given loan
     * @param _loanID loan for which the user want to see the bids
     */
    function getBids(uint _loanID) public view returns(Bid[] memory){
        return bids[_loanID];
    }

    /**
    * @dev Borrower can close a loan when the loan got enough bids or simply withdraw the loan request
    * @param _loanID the loan to which the bid is being made
    */
    function loanClose(uint _loanID) public contractNotRetired(){
        require(getLength(borrowers[msg.sender])>0); // borrower must have registered
        require(compareStrings(borrowers[msg.sender], loans[_loanID].borrower)); // borrower can only close loans that they initiated
        loans[_loanID].state = loanState.closed;
    }
     
     /**
      * @dev helper function to get the length of a string from storage
      * @param str a string
      */
    function getLength(string memory str) internal pure returns(uint) {
        return bytes(str).length;
    }
     /**
      * @dev helper function to compare two strings from storage
      * @param a first string
      * @param b second string
      */
    function compareStrings(string memory a, string memory b) internal pure returns (bool) 
    {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    /**
     * @dev fallback function to handle wrong contract usage
     */
    fallback() external payable {
        revert();
    }
}