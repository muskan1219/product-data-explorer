import { Injectable } from '@nestjs/common';
@Injectable()
export class NavigationService {
  async list(){
    // sample seed data
    return [
      { id: 1, title: 'Books', slug: 'books' },
      { id: 2, title: "Children's Books", slug: 'childrens-books' },
    ];
  }
}
