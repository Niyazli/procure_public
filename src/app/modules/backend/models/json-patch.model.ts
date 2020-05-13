import { JsonPatchType } from '../types/json-patch.type';

export class JsonPatchModel<T, R> {
  op: JsonPatchType;
  path: string;
  value: R;
  public buildPatch<T>(path: keyof T) {
    this.path = '/' + path;
  }
}
