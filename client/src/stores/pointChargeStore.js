import { atom } from 'recoil';

const pointSelected = atom({
  key: 'pointSelected',
  default: 0,
});

const paymentOptionCheck = atom({
  key: 'paymentOption',
  default: false,
});

export { pointSelected, paymentOptionCheck };
