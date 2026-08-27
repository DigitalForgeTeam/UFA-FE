export type Coach = {
  id: string
  image: string
  nameKey: string
  roleKey: string
}

const base = () => import.meta.env.BASE_URL

export const coaches: Coach[] = [
  {
    id: '1',
    image: 'images/coaches/coach-1.svg',
    nameKey: 'coaches.list.0.name',
    roleKey: 'coaches.list.0.role',
  },
  {
    id: '2',
    image: 'images/coaches/coach-2.svg',
    nameKey: 'coaches.list.1.name',
    roleKey: 'coaches.list.1.role',
  },
  {
    id: '3',
    image: 'images/coaches/coach-3.svg',
    nameKey: 'coaches.list.2.name',
    roleKey: 'coaches.list.2.role',
  },
  {
    id: '4',
    image: 'images/coaches/coach-4.svg',
    nameKey: 'coaches.list.3.name',
    roleKey: 'coaches.list.3.role',
  },
  {
    id: '5',
    image: 'images/coaches/coach-5.svg',
    nameKey: 'coaches.list.4.name',
    roleKey: 'coaches.list.4.role',
  },
]

export function coachImageSrc(path: string) {
  return `${base()}${path}`
}
