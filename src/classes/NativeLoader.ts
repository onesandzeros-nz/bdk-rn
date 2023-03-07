import { NativeModules } from 'react-native';
import { Script } from 'vm';
import { Network, WordCount, AddressIndex, KeychainKind } from '../lib/enums';
import { AddressInfo, Balance, LocalUtxo, OutPoint, ScriptAmount, TransactionDetails } from './Bindings';
import { Blockchain } from './Blockchain';
import { PartiallySignedTransaction } from './PartiallySignedTransaction';

export interface NativeBdkRn {
  generateSeedFromWordCount(wordCount: WordCount): string;
  generateSeedFromString(mnemonic: string): string;
  generateSeedFromEntropy(entropy: number): string;

  createDerivationPath(path: string): string;

  createDescriptorSecret(network: Network, mnemonic: string, password?: string): string;
  descriptorSecretDerive(id: string, derivationPathId: string): string;
  descriptorSecretExtend(id: string, derivationPathId: string): string;
  descriptorSecretAsPublic(id: string): string;
  descriptorSecretAsSecretBytes(id: string): Array<number>;
  descriptorSecretAsString(id: string): string;

  createDescriptorPublic(id: string): string;
  descriptorPublicDerive(id: string, derivationPathId: string): string;
  descriptorPublicExtend(id: string, derivationPathId: string): string;
  descriptorPublicAsString(id: string): string;

  initElectrumBlockchain(url: string, retry: string, timeout: string, stopGap: string): string;
  initEsploraBlockchain(url: string, proxy: string, concurrency: string, timeout: string, stopGap: string): string;
  getBlockchainHeight(id: string): number;
  getBlockchainHash(id: string, height: number): string;
  broadcast(id: string, signedPsbtBase64: string): boolean;

  memoryDBInit(): boolean;
  sledDBInit(path: string, treeName: string): boolean;
  sqliteDBInit(path: string): boolean;

  walletInit(descriptor: string, network: Network): any;
  getAddress(id: string, addressIndex: AddressIndex): AddressInfo;
  getBalance(id: string): Balance;
  getNetwork(id: string): string;
  sync(blockchain: string, id: string): boolean;
  sign(id: string, psbtBase64: string): string;

  listUnspent(id: string): Array<LocalUtxo>;
  listTransactions(id: string): Array<TransactionDetails>;

  initAddress(address: string): string;
  addressToScriptPubkeyHex(id: string): string;

  createTxBuilder(): string;
  addRecipient(id: string, scriptId: string, amount: number): string;
  finish(id: string, walletId: string): PartiallySignedTransaction;

  addUnspendable(id: string, outPoint: OutPoint): boolean;
  addUtxo(id: string, outPoint: OutPoint): boolean;
  addUtxos(id: string, outPoints: Array<OutPoint>): boolean;
  doNotSpendChange(id: string): boolean;
  manuallySelectedOnly(id: string): boolean;
  onlySpendChange(id: string): boolean;
  unspendable(id: string, outPoints: Array<OutPoint>): boolean;

  feeRate(id: string, feeRate: number): boolean;
  feeAbsolute(id: string, feeRate: number): boolean;
  drainWallet(id: string): boolean;
  drainTo(id: string, scriptId: string): boolean;
  enableRbf(id: string): boolean;
  enableRbfWithSequence(id: string, nsequence: number): boolean;
  addData(id: string, data: Array<number>): boolean;
  setRecipients(id: string, recipients: Array<ScriptAmount>): boolean;

  createDescriptor(descriptor: string, network: string): string;
  descriptorAsString(id: string): string;
  descriptorAsStringPrivate(id: string): string;

  newBip44(id: string, keychain: KeychainKind, network: Network): any;
  newBip49(id: string, keychain: KeychainKind, network: Network): any;
  newBip84(id: string, keychain: KeychainKind, network: Network): any;
}

export class NativeLoader {
  protected _bdk: NativeBdkRn = NativeModules.BdkRnModule;

  constructor() {
    this._bdk = NativeModules.BdkRnModule;
  }
}
