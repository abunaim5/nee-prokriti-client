import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useEffect } from "react";
import { debounce } from "lodash";

const useSearchProducts = ({searchText}) => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isPending: isProductLoading, refetch } = useQuery({
        queryKey: ['searchProducts'],
        queryFn: async () => {
            if (searchText === '') {
                return [];
            }
            const res = await axiosPublic.get(`/searchProducts?search=${searchText}`);
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
        }
    }, [refetch, searchText]);

    return [products, isProductLoading];
};

export default useSearchProducts;