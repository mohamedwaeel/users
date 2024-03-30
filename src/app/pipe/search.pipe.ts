import { Pipe, PipeTransform } from '@angular/core';
import { details } from 'src/shared/interfaces/users';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: details[], term: number): details[] {
    if (!term) {
      return users;
    }
    return users.filter((user) => user.id === term);
  }
}
