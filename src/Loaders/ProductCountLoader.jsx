
const ProductCountLoader = async ({params, request}) => {
    const url = new URL(request.url);
    const searchText = url.searchParams.get('search') || '';
    const res = await fetch(`http://localhost:5000/productCount?search=${searchText}&filter=${params.collection}`);
    const data = await res.json();

    return data;
};

export default ProductCountLoader;