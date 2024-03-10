import { FileItem } from '../models/interfaces';

export const setCartItems = (items: FileItem[]) => {
  const defaultTitle = 'Image One';
  const defaultPath = 'https://picsum.photos/id/1006/200/200';
  const defaultUser = 'anonymous';

  if (!items.length) return [];

  return items.map((item: FileItem) => ({
    title: item.title ?? defaultTitle,
    path: item.path ?? defaultPath,
    createdAt: item.createdAt ?? '',
    user: item.user ?? defaultUser,
    id: item.id ?? '',
  }));
};
