import {pick} from 'lodash';
import {v4 as uuidv4} from 'uuid';
import BaseModel from 'bh-modelbase';

interface WithId {
  id: string;
}

export default class MBaseModelWithId<T extends WithId> extends BaseModel<T> {
  override create(obj: Partial<T>, trx = this.db): Promise<T> {
    return super.create(
      {
        ...obj,
        id: obj.id ?? uuidv4(),
      },
      trx,
    );
  }

  async fetchOrCreate(where: Partial<T>, trx = this.db): Promise<T> {
    const fetched = await this.fetchOne(where, trx);
    if (fetched != null) {
      return fetched;
    }
    return this.create(where, trx);
  }
}
