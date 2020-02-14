import { Injectable } from '@nestjs/common';
import { Categories } from '../categories';
import { Category } from '../category';

@Injectable()
export class CategoriesService {
  private categories: Categories = {
    1: {
      id: 1,
      name: 'Car',
      image: 'none',
    },
    2: {
      id: 2,
      name: 'House',
      image: 'none',
    },
  };

  findAll() {
    return this.categories;
  }

  create(category: Category) {
    const id = new Date().valueOf();
    this.categories[id] = { ...category, id };
  }

  find(id: number): Category {
    const category: Category = this.categories[id];

    if (category) {
      return category;
    }

    throw new Error('No record found');
  }

  update(updatedCategory: Category) {
    if (this.categories[updatedCategory.id]) {
      this.categories[updatedCategory.id] = updatedCategory;
      return;
    }

    throw new Error('No record found to update');
  }

  detele(id: number) {
    const category: Category = this.categories[id];

    if (category) {
      delete this.categories[id];
      return;
    }

    throw new Error('No record found to delete');
  }
}
