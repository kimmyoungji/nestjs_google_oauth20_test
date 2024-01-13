import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  // api/auth/google/login
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'google authentification' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }

  @Get('/google/logout')
  @UseGuards(GoogleAuthGuard)
  logout(@Req() req: any) {
    console.log('로그아웃 요청', req?.headers);
    req.logout();
    return { msg: 'logout' };
  }

  @Get('status')
  user(@Req() request: any) {
    console.log(request);
    console.log(request.user);
    if (request.user) {
      return { msg: 'Authenticated', user: request.user };
    } else {
      return { msg: 'No Authenticated' };
    }
  }
}
