import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  /*
PrismaModule をインポートしたモジュールは PrismaService にアクセスできるようになり、
独自のコンポーネント/サービスにインジェクトできるようになります。
PrismaService は PrismaClient を拡張している
 */
  exports: [PrismaService],
})
export class PrismaModule {}
