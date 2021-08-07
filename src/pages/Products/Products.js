import React from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import { API_URL } from "@env";
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading.';
import Error from '../../components/Error/Error';
const Products = ({navigation}) => {

    const {loading, data , error} = useFetch(API_URL)

    const handleProductSelect = (id) => {
        navigation.navigate("DetailPage",{id});
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() =>handleProductSelect(item.id)} />

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error/>
    }
    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Products;
