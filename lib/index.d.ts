import { BroadcastTransactionRequest, CreateDescriptorRequest, GenSeedRequest, InitWalletRequest, Response } from './lib/interfaces';
declare class BdkInterface {
    _bdk: any;
    constructor();
    /**
     * Gen seed of 12 words
     * @return {Promise<Response>}
     */
    genSeed(args: GenSeedRequest): Promise<Response>;
    /**
     * Create descriptor from seed and password
     * @return {Promise<Response>}
     */
    createDescriptor(args: CreateDescriptorRequest): Promise<Response>;
    /**
     * Init wallet
     * @return {Promise<Response>}
     */
    initWallet(args: InitWalletRequest): Promise<Response>;
    /**
     * Get new address
     * @return {Promise<Response>}
     */
    getNewAddress(): Promise<Response>;
    /**
     * Get wallet balance
     * @return {Promise<Response>}
     */
    getBalance(): Promise<Response>;
    /**
     * Broadcast Transaction
     * @return {Promise<Response>}
     */
    broadcastTx(args: BroadcastTransactionRequest): Promise<Response>;
    /**
     * Get pending transactions
     * @return {Promise<Response>}
     */
    getPendingTransactions(): Promise<Response>;
    /**
     * Get pending transactions
     * @return {Promise<Response>}
     */
    getConfirmedTransactions(): Promise<Response>;
}
declare const BdkRn: BdkInterface;
export default BdkRn;
