export class CpvCodeModel {
  id: number;
  categoryId?: number;
  name: string;
  cpvCode: string;
  hasChild: boolean;
  collapsed = false;
  checked = false;
  cpvCodes: CpvCodeModel[];
  subCategories: CpvCodeModel[];
  organizationsCount: number;
  static getChildes(category: CpvCodeModel): number[] {
    return this.getChildesHelper(category);
  }
  static getChildesHelper(category: CpvCodeModel): number[] {
    let array: number[] = [];
    const childArray: number[] = [];
    if (category.subCategories && category.subCategories.length > 0) {
      category.subCategories.forEach(c => childArray.push(...this.getChildesHelper(c)));
      array = [...category.subCategories.map(c => c.id), ...childArray];
    }
    array.push(category.id);
    return array;
  }
  static removeDuplicates(ids: number[]) {
    return Array.from(new Set(ids));
  }
  static indicateIfExists(ids: number[], category: CpvCodeModel) {
    const childesIds = this.getChildes(category);
    if (ids.includes(category.id)) {
      ids = ids.filter(c => !childesIds.includes(c));
    } else {
      ids.push(category.id);
    }
    return this.removeDuplicates(ids);
  }
}
