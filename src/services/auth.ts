import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "./axios";
import { API_URL } from ".";
import { toast } from "sonner";

export const useGoogleSignin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (code: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        axios
          .post(API_URL.GOOGLE_SIGN_IN, { code })
          .then((res) => {
            queryClient
              .invalidateQueries({
                queryKey: ["session"],
              })
              .finally(() => {
                resolve(res.data?.message ?? "Welcome to oauth flow!");
              });
          })
          .catch((err) => {
            reject(
              err?.response?.data?.message ?? "Failed to signin, Try Again!",
            );
          });
      });
    },
    onSuccess: (msg) => toast.success(msg),
    onError: (msg: string) => toast.success(msg),
  });
};
