import {ID} from '@datorama/akita';

export interface Snack {
  id: ID;
  name: string;
  description: string;
  category: ID;
}
