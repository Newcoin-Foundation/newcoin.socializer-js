/**
 * Construct a new payout given the account and the percentage x/100.
 *
 * @param account - Payout account
 * @param precision - Percentage of total to payout
 */
interface Payout {
    account: string;
    percentage: number;
}

export interface Payouts {
    Payouts: Payout[];
}

/**
 * Construct a new symbol given a symbol_code and a uint8_t precision.
 *
 * @param sc - The symbol_code
 * @param precision - The number of decimal places used for the symbol
 */
interface Symbol {
    sc: string;
    precision: number;
}

/**
 * Construct a new symbol_code object initialising symbol and contract with the passed in symbol and name
 *
 * @param sym - The symbol
 * @param con - The name of the contract
 */
interface ExtendedSymbol {
    symbol: Symbol;
    name: string;
}

export interface ExtendedSymbols {
    ExtendedSymbols: ExtendedSymbol[];
}