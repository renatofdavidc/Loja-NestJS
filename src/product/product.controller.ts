import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { randomUUID } from 'crypto';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ProductRepository } from './product.repository';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly productService: ProductService,
  ) {}

  @Post()
  async createNew(@Body() data: CreateProductDTO) {
    const product = new ProductEntity();

    product.id = randomUUID();
    product.name = data.name;
    product.userId = data.userId;
    product.value = data.value;
    product.amount = data.amount;
    product.description = data.description;
    product.category = data.category;
    // product.features = data.features;
    // product.images = data.images;

    const registeredProduct = this.productService.createProduct(product);
    return registeredProduct;
  }

  @Get()
  async listAll() {
    return this.productRepository.listAll();
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    const updatedProduct = await this.productRepository.update(id, data);
    return {
      message: 'Produto atualizado com sucesso!',
      product: updatedProduct,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const removedProduct = await this.productRepository.remove(id);

    return {
      message: 'Produto removido com sucesso!',
      product: removedProduct,
    };
  }
}
