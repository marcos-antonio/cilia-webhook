import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.token;
    if (
      token ===
      'ef936288542737e26105ab28e415c9bc5b2f834dba178c170a5b8522a62a9e0f'
    ) {
      return true;
    }
    throw new UnauthorizedException();
  }
}
