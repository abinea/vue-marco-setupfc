export interface IProps {
  name: string;
}

export type IEmits = {
  changeName: (value: string) => void;
};

export type ISlots = {
  default: () => any;
  bottom: (props: { foo: 1 }) => any;
};
