import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// class ProductFeatures {
//   name: string;
//   description: string;
// }

// class ProductImage {
//   url: string;
//   description: string;
// }

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', length: 100, nullable: false })
  userId: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'value', nullable: false })
  value: number;

  @Column({ name: 'amount', nullable: false })
  amount: number;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'category', length: 100, nullable: false })
  category: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAd: string;

  // features: ProductFeatures[];
  // images: ProductImage[];
}
