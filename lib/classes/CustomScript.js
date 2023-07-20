import { NativeLoader } from './NativeLoader';
/**
 * Address methods
 */
export class CustomScript extends NativeLoader {
    constructor() {
        super(...arguments);
        this.id = '';
    }
    /**
     * Create Address instance from address string
     * @param address
     * @returns {Promise<Address>}
     */
    async create(addressid) {
        this.id = await this._bdk.initScript(addressid);
        return this;
    }
    async toBytes() {
        const script = await this._bdk.scriptsToBytes(this.id);
        const byteArr = script.replace('[', '').replace(']', '').split(', ').map(function (x) {
            return parseInt(x, 10);
        });
        return byteArr;
    }
}
//# sourceMappingURL=CustomScript.js.map