import { Injectable } from '@angular/core';

@Injectable()


export class UsersService {

getUsers():object{

return [
      {id:'1',
      name:'Rithesh'
    },
    {id:'2',
      name:'Saba'
    },
    {id:'3',
      name:'Manish'
    },
    {id:'4',
      name:'Samir'
    },
    {id:'5',
      name:'Ajay'
    }
    ];
}

}
 