import { useState, useEffect } from "react"

type ProductType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    availabilityStatus: string;
    brand: string;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    discountPercentage: number;
    images: string[];
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    minimumOrderQuantity: number;
    rating: number;
    returnPolicy: string;
    reviews: {
        comment: string;
        date: string;
        rating: number;
        reviewerEmail: string;
        reviewerName: string;
      }[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    warrantyInformation: string;
    weight: number;
};
  

const Effect = () => {
    const url: string = 'https://dummyjson.com/products/1';
    const [data, setData] = useState<null | ProductType>(null);

    const productList = async () => {
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error("Something occurred during fetching the products")
            }
            const dataJson = await res.json()
            setData(dataJson)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        productList()
    }, [])

    return (
        <div>
      {data ? (
        <>
          <p>id: {data.id}</p>
          <p>title: {data.title}</p>
          <p>description: {data.description}</p>
          <p>category: {data.category}</p>
          <p>price: ${data.price}</p>
          <p>availabilityStatus: {data.availabilityStatus}</p>
          <p>brand: {data.brand}</p>
          <p>dimensions: {`${data.dimensions.width} x ${data.dimensions.height} x ${data.dimensions.depth}`}</p>
          <p>discountPercentage: {data.discountPercentage}%</p>
          <p>rating: {data.rating}</p>
          <p>returnPolicy: {data.returnPolicy}</p>
          <p>shippingInformation: {data.shippingInformation}</p>
          <p>sku: {data.sku}</p>
          <p>stock: {data.stock}</p>
          <p>tags: {data.tags.join(", ")}</p>
          <p>warrantyInformation: {data.warrantyInformation}</p>
          <p>weight: {data.weight}kg</p>
          <img src={data.thumbnail} alt={data.title} width="150" />
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
    )
}

export default Effect