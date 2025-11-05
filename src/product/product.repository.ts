import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  listAll() {
    return this.products;
  }

  save(data: ProductEntity) {
    this.products.push(data);
    return data;
  }

  private findById(id: string) {
    const potentialProduct = this.products.find((product) => product.id === id);

    if (!potentialProduct) {
      throw new Error('Produto não existe');
    }

    return potentialProduct;
  }

  async update(id: string, data: Partial<ProductEntity>) {
    const nonUpdatableData = ['id', 'userId'];

    const product = this.findById(id);
    Object.entries(data).forEach(([key, value]) => {
        if (nonUpdatableData.includes(key)) {
            return;
        }
        product[key] = value;
    })

    return product;
  }

  async remove(id: string) {
    const removedProduct = this.findById(id);
    this.products = this.products.filter((product) => product.id === id);
    return removedProduct
  }
}
