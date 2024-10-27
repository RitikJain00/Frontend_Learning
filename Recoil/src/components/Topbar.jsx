import { useRecoilValue } from "recoil";
import {
  activity,
  jobsAtom,
  messangingAtom,
  networkAtom,
  notificationAtom,
} from "../store/atoms/count";

export const Topbar = () => {
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const notification = useRecoilValue(notificationAtom);
  const message = useRecoilValue(messangingAtom);

  const total = useRecoilValue(activity);

  return (
    <>
      <button>Home</button>
      <button>My Network {network}</button>
      <button>Jobs {jobs}</button>
      <button>Messanging {message} </button>
      <button>Notification {notification}</button>
      <button>Me {total}</button>
    </>
  );
};
