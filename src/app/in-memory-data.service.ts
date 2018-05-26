import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes =[
        {id: 11, name: 'Mr.Nice', imgURL: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/09/narcos_press_1000-920x603.jpg'},
        {id: 12, name: 'Narco', imgURL:'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/09/narcos_press_1000-920x603.jpg'},
        {id: 13, name: 'Bombasto', imgURL: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/09/narcos_press_1000-920x603.jpg'},
        {id: 14, name: 'Cleritas', imgURL: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/09/narcos_press_1000-920x603.jpg'},
        {id: 15, name: 'Magneta', imgURL:'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/09/narcos_press_1000-920x603.jpg'}
    ];
    return {heroes};
  }
}
