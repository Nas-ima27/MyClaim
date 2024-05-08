import { DataSource } from 'typeorm';
import { Complaint } from './entities/complaint.entity';
import { Claim } from './entities/claim.entity';
import { Request } from './Requests/dao/requests.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'NAS-ima@2002',
        database: 'myclaim',
        entities: [Request, Complaint, Claim],
        synchronize: true,
        migrations: ['src/migrations'],
        migrationsTableName: 'migration2',
      });

      return dataSource.initialize();
    },
  },
];
