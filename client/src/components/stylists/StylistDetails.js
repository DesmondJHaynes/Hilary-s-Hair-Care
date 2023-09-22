import { useParams } from "react-router-dom";

export const StylistDetails = () => {
  const { id } = useParams();
  return <>Stylist view: {id}</>;
};
