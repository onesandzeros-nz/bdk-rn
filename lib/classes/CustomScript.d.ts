import { NativeLoader } from './NativeLoader';
/**
 * Address methods
 */
export declare class CustomScript extends NativeLoader {
    id: string;
    /**
     * Create Address instance from address string
     * @param address
     * @returns {Promise<Address>}
     */
    create(addressid: string): Promise<CustomScript>;
    toBytes(): Promise<Array<number>>;
}
