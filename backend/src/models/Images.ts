import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Orphanage from './Orphanage';

export const imageTableName = 'images';

@Entity(imageTableName)
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  path: string;
  @ManyToOne(() => Orphanage, Orphanage => Orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
