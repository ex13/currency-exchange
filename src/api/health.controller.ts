import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(HttpStatus.OK)
  healthCheck(): void {
    // Do nothing.
    // The server health check is passed when it successfully executes
  }
}
