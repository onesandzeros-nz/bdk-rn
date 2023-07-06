import { PartiallySignedTransaction } from './PartiallySignedTransaction';
/**
 * A derived address and the index it was found at For convenience this automatically derefs to Address
 */
export declare class AddressInfo {
    /**
     * Child index of this address
     */
    index: number;
    /**
     * Address
     */
    address: string;
    constructor(index: number, address: string);
}
/**
 * A reference to a transaction output.
 */
export declare class OutPoint {
    /**
     * The referenced transaction's txid.
     */
    txid: string;
    /**
     * The index of the referenced output in its transaction's vout.
     */
    vout: number;
    constructor(txid: string, vout: number);
}
/**
 * A transaction output, which defines new coins to be created from old ones.
 */
export declare class TxOut {
    /**
     * The value of the output, in satoshis.
     */
    value: number;
    /**
     * The address script of the output.
     */
    script: Script;
    constructor(value: number, script: Script);
}
/**
 * Unspent outputs of this wallet
 */
export declare class LocalUtxo {
    /**
     * Reference to a transaction output
     */
    outpoint: OutPoint;
    /**
     * Transaction output
     */
    txout: TxOut;
    /**
     * Whether this UTXO is spent or not
     */
    isSpent: boolean;
    constructor(outpoint: OutPoint, txout: TxOut, isSpent: boolean);
}
export declare class Balance {
    /**
     * Unconfirmed UTXOs generated by a wallet tx
     */
    trustedPending: number;
    /**
     * Unconfirmed UTXOs received from an external wallet
     */
    untrustedPending: number;
    /**
     * Confirmed and immediately spendable balance
     */
    confirmed: number;
    /**
     * Get sum of trusted_pending and confirmed coins
     */
    spendable: number;
    /**
     * Get the whole balance visible to the wallet
     */
    total: number;
    constructor(trustedPending: number, untrustedPending: number, confirmed: number, spendable: number, total: number);
}
/**
 * Block height and timestamp of a block
 */
export declare class BlockTime {
    /**
     * Confirmation block height
     */
    height: number | undefined;
    /**
     * Confirmation block timestamp
     */
    timestamp: number | undefined;
    constructor(height: number | undefined, timestamp: number | undefined);
}
/**
 * A wallet transaction
 */
export declare class TransactionDetails {
    /**
     * Transaction id.
     */
    txid: string;
    /**
     * Received value (sats)
     * Sum of owned outputs of this transaction.
     */
    received: number;
    /**
     * Sent value (sats)
     * Sum of owned inputs of this transaction.
     */
    sent: number;
    /**
     * Fee value (sats) if confirmed.
     * The availability of the fee depends on the backend. It's never None with an Electrum
     * Server backend, but it could be None with a Bitcoin RPC node without txindex that receive funds while offline.
     */
    fee?: number | undefined;
    /**
     * If the transaction is confirmed, contains height and timestamp of the block containing the
     * transaction, unconfirmed transaction contains `None`.
     */
    confirmationTime?: BlockTime;
    constructor(txid: string, received: number, sent: number, fee: number | undefined, confirmationTime: BlockTime);
}
/**
 * Address script class
 */
export declare class Script {
    id: string;
    constructor(id: string);
}
/**
 * A output script and an amount of satoshis.
 */
export declare class ScriptAmount {
    script: Script;
    amount: number;
    constructor(script: Script, amount: number);
}
/**
 * Fee Rate class
 */
export declare class FeeRate {
    _feeRate: number;
    constructor(_feeRate: number);
    asSatPerVb(): number;
}
/**
 * The value returned from calling the .finish() method on the [TxBuilder] or [BumpFeeTxBuilder].
 */
export declare class TxBuilderResult {
    psbt: PartiallySignedTransaction;
    txDetails: TransactionDetails;
    constructor(psbt: PartiallySignedTransaction, txDetails: TransactionDetails);
}
export declare class PubkeyHash {
    pubkeyHash: Array<number>;
    constructor(hash: Array<number>);
}
export declare class ScriptHash {
    scriptHash: Array<number>;
    constructor(hash: Array<number>);
}
export declare class WitnessProgram {
    program: Array<number>;
    version: string;
    constructor(program: Array<number>, version: string);
}
