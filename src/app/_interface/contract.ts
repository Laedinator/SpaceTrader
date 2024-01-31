export interface Contract {
  id: String;
  factionSymbol: string;
  type: string;
  terms: {
    deadline: Date;
    paymeny: {
      onAccepted: string;
      onFulfilled: string;
    };
    deliver: [
      {
        tradeSymbol: string;
        destinationSymbol: string;
        unitsRequired: number;
        unitsFulfilled: number;
      }
    ];
  };
  accepted: boolean;
  fulfilled: boolean;
  expiration: string;
  deadlineToAccept: string;
}
