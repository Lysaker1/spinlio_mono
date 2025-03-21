declare module 'express-oauth2-jwt-bearer' {
    import { Request } from 'express';
    
    export interface AuthResult {
      payload: {
        sub: string;
        [key: string]: any;
      };
      token: string;
    }
    
    export function auth(options: {
      audience?: string;
      issuerBaseURL?: string;
      tokenSigningAlg?: string;
    }): (req: Request, res: any, next: any) => void;
    
    export = { auth, AuthResult };
  }