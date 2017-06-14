import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', tasks:["hello","testing","tryme"] },
      { id: 20, name: 'Tornado' , tasks:["hello1","testing1","tryme1"]}
    ];
    return {heroes};
  }
}