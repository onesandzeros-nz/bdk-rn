import { NativeLoader } from './NativeLoader';

/**
 * Address methods
 */
export class CustomScript extends NativeLoader {
  id: string = '';

  /**
   * Create Address instance from address string
   * @param address
   * @returns {Promise<Address>}
   */
  async create(addressid: string): Promise<Address> {
    this.id = await this._bdk.initScript(addressid);
    return this;
  }

  async toBytes(): Promise<Script> {
    const script = await this._bdk.toBytes(this.id);
    script.data = (script.data).replace('[', '').replace(']', '').split(', ').map(function (x) { 
      return parseInt(x, 10); 
    });
    return script.data;
  }

}
