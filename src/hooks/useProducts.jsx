import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { debounce } from "lodash";

const useProducts = ({ currentPage, itemsPerPage, sortPriceVal, collection }) => {
    const axiosPublic = useAxiosPublic()

    const { data: products = [], isPending: isProductLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?page=${currentPage}&size=${itemsPerPage}&filter=${collection}&sort=${sortPriceVal}`);
            return res.data;
        }
    });

    useEffect(() => {
        const debouncedNavigate = debounce(() => {
            refetch();
        }, 500);
        debouncedNavigate();
        return () => {
            debouncedNavigate.cancel();
        };
    }, [refetch, currentPage, itemsPerPage, sortPriceVal, collection])

    return [products, isProductLoading];
};

export default useProducts;