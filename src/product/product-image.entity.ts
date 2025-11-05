import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryColumn({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;
}
