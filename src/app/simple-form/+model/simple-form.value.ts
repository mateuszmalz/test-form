import { Gender } from './gender';

export interface SimpleFormValue {
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly gender: Gender | null;
  readonly place: string | null;
}
