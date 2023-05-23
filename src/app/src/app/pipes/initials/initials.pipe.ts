import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'initials',
  standalone: true,
})
export class InitialsPipe implements PipeTransform {
  transform(value: string | null): string | undefined {
    return value
      ?.split(' ')
      .map((x) => x.charAt(0))
      .join('')
      .toUpperCase()
  }
}
