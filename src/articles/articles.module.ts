import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  /*
  Articles モジュール内で PrismaClient にアクセスするには
  PrismaModule を import として追加する
  PrismaModule は PrismaService を export していて、
  PrismaServiceは PrismaClient を拡張している
  */
  imports: [PrismaModule],
})
export class ArticlesModule {}
