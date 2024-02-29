import { Timestamp } from 'firebase/firestore';

export interface FileItem {
  title: null | string;
  file?: null | File;
  path: null | string;
  createdAt?: null | Timestamp;
  user?: null | any;
}
