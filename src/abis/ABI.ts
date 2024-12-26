export const ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newActivePoolAddress",
        "type": "address"
      }
    ],
    "name": "ActivePoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newBorrowerOperationsAddress",
        "type": "address"
      }
    ],
    "name": "BorrowerOperationsAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newCommunityIssuanceAddress",
        "type": "address"
      }
    ],
    "name": "CommunityIssuanceAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newDefaultPoolAddress",
        "type": "address"
      }
    ],
    "name": "DefaultPoolAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_P",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_S",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_G",
        "type": "uint256"
      }
    ],
    "name": "DepositSnapshotUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_ETH",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_LUSDLoss",
        "type": "uint256"
      }
    ],
    "name": "ETHGainWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "_currentEpoch",
        "type": "uint128"
      }
    ],
    "name": "EpochUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "EtherSent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_kickbackRate",
        "type": "uint256"
      }
    ],
    "name": "FrontEndRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_P",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_G",
        "type": "uint256"
      }
    ],
    "name": "FrontEndSnapshotUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_newFrontEndStake",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      }
    ],
    "name": "FrontEndStakeChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      }
    ],
    "name": "FrontEndTagSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_G",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "_epoch",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "_scale",
        "type": "uint128"
      }
    ],
    "name": "G_Updated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_LQTY",
        "type": "uint256"
      }
    ],
    "name": "LQTYPaidToDepositor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_LQTY",
        "type": "uint256"
      }
    ],
    "name": "LQTYPaidToFrontEnd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newLUSDTokenAddress",
        "type": "address"
      }
    ],
    "name": "LUSDTokenAddressChanged",
    "type": "event"
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_P",
        "type": "uint256"
      }
    ],
    "name": "P_Updated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newPriceFeedAddress",
        "type": "address"
      }
    ],
    "name": "PriceFeedAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_S",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "_epoch",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "_scale",
        "type": "uint128"
      }
    ],
    "name": "S_Updated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "_currentScale",
        "type": "uint128"
      }
    ],
    "name": "ScaleUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newSortedTrovesAddress",
        "type": "address"
      }
    ],
    "name": "SortedTrovesAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_newBalance",
        "type": "uint256"
      }
    ],
    "name": "StabilityPoolETHBalanceUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_newBalance",
        "type": "uint256"
      }
    ],
    "name": "StabilityPoolLUSDBalanceUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newTroveManagerAddress",
        "type": "address"
      }
    ],
    "name": "TroveManagerAddressChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_newDeposit",
        "type": "uint256"
      }
    ],
    "name": "UserDepositChanged",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BORROWING_FEE_FLOOR",
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
    "inputs": [],
    "name": "CCR",
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
    "inputs": [],
    "name": "DECIMAL_PRECISION",
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
    "inputs": [],
    "name": "LUSD_GAS_COMPENSATION",
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
    "inputs": [],
    "name": "MCR",
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
    "inputs": [],
    "name": "MIN_NET_DEBT",
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
    "inputs": [],
    "name": "NAME",
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
    "inputs": [],
    "name": "P",
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
    "inputs": [],
    "name": "PERCENT_DIVISOR",
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
    "inputs": [],
    "name": "SCALE_FACTOR",
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
    "inputs": [],
    "name": "_100pct",
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
    "inputs": [],
    "name": "activePool",
    "outputs": [
      {
        "internalType": "contract IActivePool",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "borrowerOperations",
    "outputs": [
      {
        "internalType": "contract IBorrowerOperations",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "communityIssuance",
    "outputs": [
      {
        "internalType": "contract ICommunityIssuance",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentEpoch",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentScale",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultPool",
    "outputs": [
      {
        "internalType": "contract IDefaultPool",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "depositSnapshots",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "S",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "P",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "G",
        "type": "uint256"
      },
      {
        "internalType": "uint128",
        "name": "scale",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "epoch",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "deposits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "initialValue",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "frontEndTag",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "name": "epochToScaleToG",
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
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "name": "epochToScaleToSum",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "frontEndSnapshots",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "S",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "P",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "G",
        "type": "uint256"
      },
      {
        "internalType": "uint128",
        "name": "scale",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "epoch",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "frontEndStakes",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "frontEnds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "kickbackRate",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "registered",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      }
    ],
    "name": "getCompoundedFrontEndStake",
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
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      }
    ],
    "name": "getCompoundedLUSDDeposit",
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
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      }
    ],
    "name": "getDepositorETHGain",
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
        "internalType": "address",
        "name": "_depositor",
        "type": "address"
      }
    ],
    "name": "getDepositorLQTYGain",
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
    "inputs": [],
    "name": "getETH",
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
    "inputs": [],
    "name": "getEntireSystemColl",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "entireSystemColl",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEntireSystemDebt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "entireSystemDebt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_frontEnd",
        "type": "address"
      }
    ],
    "name": "getFrontEndLQTYGain",
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
    "inputs": [],
    "name": "getTotalLUSDDeposits",
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
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lastETHError_Offset",
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
    "inputs": [],
    "name": "lastLQTYError",
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
    "inputs": [],
    "name": "lastLUSDLossError_Offset",
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
    "inputs": [],
    "name": "lusdToken",
    "outputs": [
      {
        "internalType": "contract ILUSDToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_debtToOffset",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_collToAdd",
        "type": "uint256"
      }
    ],
    "name": "offset",
    "outputs": [],
    "stateMutability": "nonpayable",
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
  },
  {
    "inputs": [],
    "name": "priceFeed",
    "outputs": [
      {
        "internalType": "contract IPriceFeed",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_frontEndTag",
        "type": "address"
      }
    ],
    "name": "provideToSP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_kickbackRate",
        "type": "uint256"
      }
    ],
    "name": "registerFrontEnd",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_borrowerOperationsAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_troveManagerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_activePoolAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lusdTokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_sortedTrovesAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_priceFeedAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_communityIssuanceAddress",
        "type": "address"
      }
    ],
    "name": "setAddresses",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sortedTroves",
    "outputs": [
      {
        "internalType": "contract ISortedTroves",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "troveManager",
    "outputs": [
      {
        "internalType": "contract ITroveManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_upperHint",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lowerHint",
        "type": "address"
      }
    ],
    "name": "withdrawETHGainToTrove",
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
    "name": "withdrawFromSP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;
