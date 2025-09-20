import { Module } from '@nestjs/common';
import { NavigationModule } from './navigation/navigation.module';
@Module({
  imports: [NavigationModule],
})
export class AppModule {}
