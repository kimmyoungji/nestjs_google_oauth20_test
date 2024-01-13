import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    super({
      clientID:
        '136437875811-8giktjt7bkrt73hfvfd31o9j8bha3bf9.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5001/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken', accessToken);
    console.log('refreshToken ', refreshToken);
    console.log('profile', profile);
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}