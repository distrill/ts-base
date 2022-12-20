import {v4 as uuidv4} from 'uuid';
import BaseModel, {TBaseModelConfig} from 'bh-modelbase';

interface WithId {
  id: string;
}

export default class MBaseModelWithId<T extends WithId> extends BaseModel<T> {
  override create(
    obj: Partial<T>,
    cfg: TBaseModelConfig = {trx: this.db},
  ): Promise<T> {
    return super.create(
      {
        ...obj,
        id: obj.id ?? uuidv4(),
      },
      cfg,
    );
  }

  async fetchOrCreate(
    where: Partial<T>,
    cfg: TBaseModelConfig = {trx: this.db},
  ): Promise<T> {
    const fetched = await this.fetchOne(where, cfg);
    if (fetched != null) {
      return fetched;
    }
    return this.create(where, cfg);
  }
}
