import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categories } from '../categories';
import { Category } from '../category';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Categories> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Category> {
    return this.categoriesService.find(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body('category') category: Category) {
    this.categoriesService.create(category);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  updateCategory(@Body('category') category: Category) {
    this.categoriesService.update(category);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    this.categoriesService.detele(id);
  }
}
