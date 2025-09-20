import { Controller, Get } from '@nestjs/common';
import { NavigationService } from './navigation.service';
@Controller('api/navigation')
export class NavigationController {
  constructor(private readonly svc: NavigationService){}
  @Get()
  async list(){
    // returns cached seed navigation; replace with DB integration and scraping
    return this.svc.list();
  }
}
