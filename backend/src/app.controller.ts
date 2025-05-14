import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthRes } from './shared/types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'; // Import Swagger decorators

@ApiTags('Default') // Grouping the endpoints by the 'Health' tag
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  @ApiOperation({ summary: 'Check the health status of the API' }) // Description of the endpoint
  @ApiResponse({
    status: 200,
    description: 'Returns the health status of the API',
  })
  health(): HealthRes {
    return this.appService.health();
  }
}
