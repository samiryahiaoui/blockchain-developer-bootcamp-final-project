const ssABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "loanClose",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "LogBorrowerRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "LogLenderRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "LogLoanHasNewBid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "LogLoanStateChange",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_loanAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rate",
				"type": "uint256"
			}
		],
		"name": "makeBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lein",
				"type": "string"
			}
		],
		"name": "registerBorrower",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lein",
				"type": "string"
			}
		],
		"name": "registerLender",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "requestLoan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "retire",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bids",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "bidAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "yieldAsked",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "bidder",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "getBids",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "bidAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "yieldAsked",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "bidder",
						"type": "string"
					}
				],
				"internalType": "struct Syndication.Bid[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "getLoanAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "getLoanBorrower",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "getLoanCommittedTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanID",
				"type": "uint256"
			}
		],
		"name": "getLoanState",
		"outputs": [
			{
				"internalType": "enum Syndication.loanState",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "loanCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "loans",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "loanID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "borrower",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "loanAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "committedTotal",
				"type": "uint256"
			},
			{
				"internalType": "enum Syndication.loanState",
				"name": "state",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const ssAddress = '0xa07B98ebB43248206E7C5268B2437E4717A1e9fF';

console.log("Hello dapp developer");
window.addEventListener("load", function(){
    if(typeof window.ethereun !== undefined){
        console.log("metamask detected");
        let mmDetected = document.getElementById("mm-detected");
        mmDetected.innerHTML = "Metamask has been detected!";
    }
    else{
        console.log("metamask not availabel");
        alert("You need to install metamask");

    }
});

const mmEnable = document.getElementById("mm-connect");
mmEnable.onclick = async() => {
    await ethereum.request({method:'eth_requestAccounts'});

let mmCurrentAccount = document.getElementById("mm-current-account");
console.log("accounts: "+ mmCurrentAccount)
mmCurrentAccount.innerHTML = "Your current account is "+ethereum.selectedAddress;
console.log("Selected address "+ ethereum.selectedAddress);
}

//Register Borrower
const registerBorrower = document.getElementById("registerBorrower");
registerBorrower.onclick = async() => {
    await ethereum.request({method:'eth_requestAccounts'});

let borrowerAccount = document.getElementById("Borrower's address");
console.log("accounts: "+ borrowerAccount)
borrowerAccount.innerHTML = "Your current account is "+ethereum.selectedAddress;
console.log("Selected address "+ ethereum.selectedAddress);

const bName = document.getElementById("borrower-name-box").value;
console.log(bName);

var web3 = new Web3(window.ethereum);

const syndication = new web3.eth.Contract(ssABI, ssAddress);

syndication.setProvider(window.ethereum);

await syndication.methods.registerBorrower(bName).send({from: ethereum.selectedAddress});

}

// Borrower Submit loan request
const ssSubmit = document.getElementById("ss-input-button");

ssSubmit.onclick = async() => {
    const ssValue = document.getElementById("ss-input-box").value;
    console.log(ssValue);

    var web3 = new Web3(window.ethereum);

    const syndication = new web3.eth.Contract(ssABI, ssAddress);

    syndication.setProvider(window.ethereum);

    await syndication.methods.requestLoan(ssValue).send({from: ethereum.selectedAddress});
}

//Register Lender
const registerLender = document.getElementById("registerLender");
registerLender.onclick = async() => {
    await ethereum.request({method:'eth_requestAccounts'});

let lenderAccount = document.getElementById("Lender's address");
console.log("accounts: "+ lenderAccount)
lenderAccount.innerHTML = "Your current account is "+ethereum.selectedAddress;
console.log("Selected address "+ ethereum.selectedAddress);

const lName = document.getElementById("Lender-name-box").value;
console.log(lName);

var web3 = new Web3(window.ethereum);

const syndication = new web3.eth.Contract(ssABI, ssAddress);

syndication.setProvider(window.ethereum);

await syndication.methods.registerLender(lName).send({from: ethereum.selectedAddress});

}

// Lender checks for available loans
const checkLoans = document.getElementById("checkAvailableLoans");
checkLoans.onclick = async() => {
    await ethereum.request({method:'eth_requestAccounts'});

var web3 = new Web3(window.ethereum);

const syndication = new web3.eth.Contract(ssABI, ssAddress);

syndication.setProvider(window.ethereum);

let loanCnt = await syndication.methods.loanCount().call({from: ethereum.selectedAddress});

let loanCntMessage = document.getElementById("Check available loans");
loanCntMessage.innerHTML = "Available loans are from 0 to " + loanCnt;

}

// Lender make bid on a loan
const lenderSubmit = document.getElementById("lender-bid-button");

lenderSubmit.onclick = async() => {
    const loanID = document.getElementById("loanID-box").value;
	const loanCommitment = document.getElementById("loanCommitment-box").value;
	const loanYield = document.getElementById("loanYield-box").value;

    var web3 = new Web3(window.ethereum);

    const syndication = new web3.eth.Contract(ssABI, ssAddress);

    syndication.setProvider(window.ethereum);

    await syndication.methods.makeBid(loanID, loanCommitment, loanYield).send({from: ethereum.selectedAddress});
}

// Any user checking on a lonn's status
const statusCheck = document.getElementById("checkLoanStatus");

statusCheck.onclick = async() => {
    const laonID = document.getElementById("loan-status-box").value;

    var web3 = new Web3(window.ethereum);

    const syndication = new web3.eth.Contract(ssABI, ssAddress);

    syndication.setProvider(window.ethereum);

    let loanState = await syndication.methods.getLoanState(laonID).call({from: ethereum.selectedAddress});

	let state = '';
	if(loanState == 0){
		state = 'Initinated, no subscribers';
	}
	else if(loanState == 1){
		state = 'Subscribed, at least one lender willing to lend but not covering the full requested amount';
	}
	else if(loanState == 2){
		state = 'fulfilled, sufficient lenders subscribed to fulfill the full loan amount';
	}
	else if(loanState == 3){
		state = 'Closed';
	}
	else{
		state = 'Unknown State';
	}
	console.log(state);

	let status = document.getElementById("Loan Status");
	status.innerHTML = state;
	status = '';
}
