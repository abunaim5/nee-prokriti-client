import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic()

    const { data: products = [], isPending: isProductLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    });

    // useEffect(() => {

    // }, [])

    return [products, isProductLoading];
};

export default useProducts;