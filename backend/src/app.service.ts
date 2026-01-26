import { Injectable } from '@nestjs/common';

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): HealthResponse {
    return {status: 'ok',
      message: 'Server is running',
      timestamp: new Date().toISOString(),
    }
  }
}
