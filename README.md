

# blockchain-developer-bootcamp-final-project
# Loan syndication platform
The goal is to create a platform for syndicated loans. The platform should allow borrowers and lenders to connect and a bidding process to take place.

A full working platform is too ambitious as there are strong legal and regulatory implications in any lending operation. Therefore, this project will aim to only solve the bidding part. The other requirements (KYC, AML, etc) should still happen off chain. MOre precisely, this project provides a simulation of the borrowing/lending process so no funds are exchanged, only the desired loan amount provided from a borrower, the amounts that lenders are willing to commit to the loan, and the yields (interest rates) that the lenders are willing to accept for their commitments.

Syndicated loans are usually offered by large financial companies (such as banks, pension funds, insurance companies) and is often a tedious process where lots of convention channels communications take place to set up a syndicate. So thsi project solves the information exchange part only.

# Workflow example
There should be two different workflows, one for the borrower and one for the lender
### Borrower workflow
The borrowers simply first register as borrowers, then enter some characteristics of the loan they are seeking (for now, only the loan amount. But can be extended to enter other characteristics such as tenure, collateral type, ...).

### Lender workflow
The lenders first register as lenders.

lenders specify the amount they want to commit as well as the yield (interest rate) they are willing to accept.

In future extensions, the lenders can provide further information such as whther they are willing to be the arranger of the loan or just a participant. The can enter different bids on a given loan depending on the commitment amounts and on their specific roles (arrangers, participants, whether they are willing to underwrite the loan, ...)

### Other aspects
Anyone can check the system to see what loans are available in the system and the loans statuses (whether the loan was just initiated by a borrower, whether it is subscribed by any lender at all, whether it received sufficient bidding for the full amount requested by the borrower, whether the borrower accepted the bids and closed the biddign process)

### End of Workflow
When the borrower receives sufficient bids that cover their desired borrowing amount, they can close the loan and that will end the bidding process. The on-chain workflow is ended and the rest of the workflow moves off-chain.

# ScreenCast
https://www.youtube.com/watch?v=QtnfWhs47Rk

# Possible extensions
The project can be extended in one of two directions:
1) Require that the borrower post collateral for the loan and set up margin requirements.
2) Solve the identity management issue so that the borrowers and lenders can be legally identified.
In all cases, a full syndication system will require also setting a documentation exchange workflow (maybe through IPFS) as this is a manual process in the centralized finance systems and takes tedious and very inefficient work that takes many weeks to close a loan.

# Directory structure
1) contracts folder: This is where the contract syndication.sol is located
2) migration folder: Where the migration files are located
3) test folder     : Contains the unit test for the contract
4) build folder    : Contains json files for the build.

# Design pattern decisions
1) Inheritance from the Openzeppelin Ownable contract
2) Restrict access through modifiers and access control for specific storage variables.
3) Upgradibility: The contract can be taken out of service by the owner through a short-circuit mechanism.

# Dependencies and instructions:
1) npm install @openzeppelin/Contracts
2) truffle test
3) PORT: 8545

# Front end location:
https://samiryahiaoui.github.io/BC_FrontEnd/

# Public address
0x22e2d49d721db7c9c56fae83b535af1e18d10068

