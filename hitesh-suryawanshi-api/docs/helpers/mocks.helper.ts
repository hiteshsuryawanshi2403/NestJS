import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

export function autoMockProvider(services: any[]): Provider[] {
  return services.map(service => ({
    provide: service,
    useValue: {},
  }));
}
