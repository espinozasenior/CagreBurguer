import { BsPlus } from "react-icons/bs";
import FloatingActionButton from "../../../shared/components/FloatingActionButton";
import useDispatchModalToCreateOrder from "../../CurrentOrderMenu/hooks/useDispatchModalToCreateOrder";

const ButtonCreateNewOrder = () => {
  const { activeCreatingOrder } = useDispatchModalToCreateOrder();
  return (
    <FloatingActionButton onClick={activeCreatingOrder}>
      <BsPlus size={40} />
    </FloatingActionButton>
  );
};

export default ButtonCreateNewOrder;
