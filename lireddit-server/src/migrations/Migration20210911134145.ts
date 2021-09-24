import { Migration } from '@mikro-orm/migrations';

export class Migration20210911134145 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `update_at` datetime not null, `username` varchar(30) not null, `password` text not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `post` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `update_at` datetime not null, `title` text not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('alter table `user` add unique `user_username_unique`(`username`);');
  }

}