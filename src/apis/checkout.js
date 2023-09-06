//结算页接口
import httpInstance from "@/utils/http";

export const getCheckoutInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};
