import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from './item.service';

@Injectable()
export class ConditionService extends ItemService {
  requireItems(locale: string): Item[] {
    return require(`Assets/items/conditions.${locale}.json`);
  }
}
