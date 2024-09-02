import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({currentPage, itemsPerPage, sortPriceVal}) => {
    const axiosPublic = useAxiosPublic()

    const { data: products = [], isPending: isProductLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?page=${currentPage}&size=${itemsPerPage}&sort=${sortPriceVal}`);
            return res.data;
        }
    });

    useEffect(() => {
        refetch();
    }, [refetch, currentPage, itemsPerPage, sortPriceVal])

    return [products, isProductLoading];
};

export default useProducts;