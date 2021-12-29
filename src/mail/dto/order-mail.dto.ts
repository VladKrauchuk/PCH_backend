export type Order = {
  id: string;
  picture: string;
  title: string;
  price: number;
  select: string | null;
  radio: string | null;
  addiction: string[] | null;
  sizes: string;
  count: number;
  totalPrice: number;
};

export class OrderMailDto {
  data: Array<Order>;
  email: string;
  fullName: string;
}
