import {HttpClient} from '@angular/common/http';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {UserService} from './user.service';
import {FactoryProvider} from '@angular/core';
import { ReflectiveInjector } from '@angular/core';
import { InjectionToken } from '@angular/core';



let heroServiceFactory = (http:HttpClient, messageService: MessageService, userService: UserService)=>{
  return new HeroService(http, messageService, userService.isAuthorized);
}
export let heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [HttpClient, MessageService, UserService]
  };
