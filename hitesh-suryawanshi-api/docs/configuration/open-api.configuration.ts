export class OpenApiConfiguration {
  static getApiTitle(): string {
    return process.env.API_TITLE || 'Hitesh-NestJS-Server';
  }

  static getApiDescription(): string {
    return (
      process.env.API_DESCRIPTION ||
      'API for Hitesh Suryawanshi NestJS Application Public API Using Swagger'
    );
  }

  static getPackageVersion(): string {
    return process.env.npm_package_version || '';
  }

  static getEnvironmentUrl(): string {
    const prefix = 'api/';
    switch (process.env.ENV) {
      case 'local':
        return `http://localhost:${process.env.PORT || 3000}`;
      case 'prod':
        return `https://hitesh-server/${prefix}`;
      default:
        return `http://localhost:3000`;
    }
  }
}
