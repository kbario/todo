import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'signIn',
  standalone: true,
})
export class SignInPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null
  }
}
