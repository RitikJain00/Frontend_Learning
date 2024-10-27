import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const networkAtom = atom({
  key: "networkAtom",
  default: 5,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 1,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 102,
});

export const messangingAtom = atom({
  key: "messangingAtom",
  default: 2,
});

export const activity = selector({
  key: "activity",
  get: ({ get }) => {
    const message = get(messangingAtom);
    const jobs = get(jobsAtom);
    const notification = get(notificationAtom);
    const network = get(networkAtom);

    return message + jobs + notification + network;
  },
});

export const evenSelector = selector({
  key: "evenSelector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2 == 0;
  },
});
