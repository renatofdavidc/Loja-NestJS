import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(productEntity: ProductEntity) {
    await this.productRepository.save(productEntity)
  }

  async updateProduct(id: string, productEntity: ProductEntity) {
    await this.productRepository.update(id, productEntity)
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id)
  }

  async listProducts() {
    const savedProducts = await this.productRepository.find()
    
  }
}
