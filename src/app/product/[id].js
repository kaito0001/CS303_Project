import Product from '../../screens/product/Product';
import { useLocalSearchParams } from 'expo-router';
const Page = () => {
    const { id } = useLocalSearchParams();

    return (
       <Product id={id}/>
    )
}

export default Page;