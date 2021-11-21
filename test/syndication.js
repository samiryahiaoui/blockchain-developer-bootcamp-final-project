//const Syndication = artifacts.require("Syndication");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
let BN = web3.utils.BN;

var Syndication = artifacts.require("./Syndication.sol");

contract("Syndication", function (accounts) {
  const [contractOwner, bestBuy, JPM, BofA, Citi] = accounts;

  before(async () => {
    instance = await Syndication.new();
  });

  describe("Set up accounts and verify variables", () => {
    it("Borrower bestBuy has a account!", async() => {
      const eth100 = 100e18;
      assert.equal(await web3.eth.getBalance(bestBuy), eth100.toString());
    });
    it("lender JPM has an account (and funds to lend)!", async() => {
      const eth100 = 100e18;
      assert.equal(await web3.eth.getBalance(JPM), eth100.toString());
    });
    it("lender BofA has an account (and funds to lend)!", async() => {
      const eth100 = 100e18;
      assert.equal(await web3.eth.getBalance(BofA), eth100.toString());
    });
    it("lender Citi has an account (and funds to lend)!", async() => {
      const eth100 = 100e18;
      assert.equal(await web3.eth.getBalance(Citi), eth100.toString());
    });

    it("contract has a loan count variable!", async() => {
      const eth100 = 100e18;
      assert.equal(await typeof instance.loanCount, 'function');
    });
  });

  describe("Borrower and lender registration", () => {
    it("should emit a LogBorrowerRegistered event when bestBuy register as borrower", async () => {
      let eventEmitted = false;
      const tx = await instance.registerBorrower('bestBuy', { from: bestBuy });

      if (tx.logs[0].event == "LogBorrowerRegistered") {
        eventEmitted = true;
      }

      assert.equal(
        eventEmitted,
        true,
        "No borrower has registered",
      );
    });

    it("should ensure that first registered borrower name is bestBuy", async () => {
      await instance.registerBorrower('bestBuy', { from: bestBuy });

      await instance.registerBorrower.call('bestBuy');
      const registerBorrowerValue = await instance.registerBorrower.call('bestBuy');

      assert.equal(
        registerBorrowerValue,
        'bestBuy',
        "First registered borrower is NOT bestBuy",
      );
        
    });

    it("should emit a LogLenderRegistered event when JPM register as lender", async () => {
      let eventEmitted = false;
      const tx = await instance.registerLender('JPM', { from: JPM });

      if (tx.logs[0].event == "LogLenderRegistered") {
        eventEmitted = true;
      }

      assert.equal(
        eventEmitted,
        true,
        "No borrower has registered",
      );
    });

    it("should ensure that first registered lender name is JPM", async () => {
      await instance.registerLender('JPM', { from: JPM });

      await instance.registerLender.call('JPM');
      const registerLenderValue = await instance.registerLender.call('JPM');

      assert.equal(
        registerLenderValue,
        'JPM',
        "First registered lender is NOT JPM",
      );
        
    });

    it("should emit a LogLenderRegistered event when BofA register as lender", async () => {
      let eventEmitted = false;
      const tx = await instance.registerLender('BofA', { from: BofA });

      if (tx.logs[0].event == "LogLenderRegistered") {
        eventEmitted = true;
      }

      assert.equal(
        eventEmitted,
        true,
        "No borrower has registered",
      );
    });

    it("should ensure that second registered lender name is BofA", async () => {
      await instance.registerLender('BofA', { from: BofA });

      await instance.registerLender.call('BofA');
      const registerLenderValue = await instance.registerLender.call('BofA');

      assert.equal(
        registerLenderValue,
        'BofA',
        "Second registered lender is NOT BofA",
      );
      });

      it("should emit a LogLenderRegistered event when Citi register as lender", async () => {
        let eventEmitted = false;
        const tx = await instance.registerLender('Citi', { from: Citi });
  
        if (tx.logs[0].event == "LogLenderRegistered") {
          eventEmitted = true;
        }
  
        assert.equal(
          eventEmitted,
          true,
          "No borrower has registered",
        );
      });
  
      it("should ensure that third registered lender name is Citi", async () => {
        await instance.registerLender('Citi', { from: Citi });
  
        await instance.registerLender.call('Citi');
        const registerLenderValue = await instance.registerLender.call('Citi');
  
        assert.equal(
          registerLenderValue,
          'Citi',
          "Third registered lender is NOT Citi",
        );
        
      });

  });

  describe("Use cases", () => {
    it("Should allow bestBuy to apply for a loan AND loan amount is 50 ETH", async () => {
      await instance.requestLoan(50, {from : bestBuy});
      const registeredLoan = await instance.loans.call(0);

      let borrower = registeredLoan[1].toString();
      let requestedLoanAmount = new BN(registeredLoan[2]).toString();

      assert.equal(
        borrower,
        'bestBuy',
        'bestBuy did not request the loan',
      );
      assert.equal(
        requestedLoanAmount,
        50,
        'requested loan is not for 50 ethers',
      );
    });

    it("Should allow JPM to bid 20 ETH for besBuy's loan with a rate of 5%", async () => {
      await instance.makeBid(0, 20, 5, {from : JPM});
      const firstBid = await instance.bids.call(0,0);

      let bidAmount = new BN(firstBid[0]).toString();
      let bidRate = new BN(firstBid[1]).toString();
      let bidder = firstBid[2];

      assert.equal(
        bidAmount,
        20,
        'bid amount by JPM is not 20 ETH',
      );
      assert.equal(
        bidRate,
        5,
        'loan interest rate proposed by JPM is not 5%',
      );
      assert.equal(
        bidder,
        'JPM',
        'first bidder is not JPM',
      );

    });

    it("Should allow BofA to bid 20 ETH for besBuy's loan with a rate of 4%", async () => {
      await instance.makeBid(0, 20, 4, {from : BofA});
      const secondBid = await instance.bids.call(0,1);

      let bidAmount = new BN(secondBid[0]).toString();
      let bidRate = new BN(secondBid[1]).toString();
      let bidder = secondBid[2];

      assert.equal(
        bidAmount,
        20,
        'bid amount by BofA is not 20 ETH',
      );
      assert.equal(
        bidRate,
        4,
        'loan interest rate proposed by BofA is not 4%',
      );
      assert.equal(
        bidder,
        'BofA',
        'second bidder is not BofA',
      );
    });

    it("Should allow Citi to bid 15 ETH for besBuy's loan with a rate of 3%", async () => {
      await instance.makeBid(0, 15, 3, {from : Citi});
      const thirdBid = await instance.bids.call(0,2);

      let bidAmount = new BN(thirdBid[0]).toString();
      let bidRate = new BN(thirdBid[1]).toString();
      let bidder = thirdBid[2];

      assert.equal(
        bidAmount,
        15,
        'bid amount by Citi is not 15 ETH',
      );
      assert.equal(
        bidRate,
        3,
        'loan interest rate proposed by Citi is not 3%',
      );
      assert.equal(
        bidder,
        'Citi',
        'third bidder is not Citi',
      );
    });

    it("Loan state should move to fulfilled after enough funds were committed by lenders", async () => {
      await instance.getLoanState(0, {from : bestBuy});
      const bestBuyLoanState = await instance.getLoanState.call(0);

      state = new BN(bestBuyLoanState).toString();
      // loan state is an enum with the values {initiated, subscribed, fulfilled, closed}
      // after the loan is over subscribed, the state should move to fulfilled (enough funds were committed by lenders)
      assert.equal(
        state,
        2,
        "best buy loan is not in the correct state",
      );

    });

  });
});
