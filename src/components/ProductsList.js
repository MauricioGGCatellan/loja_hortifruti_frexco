import ProductItem from './ProductItem';

function ProductsList(props) {
    console.log(props.fruits);

  return (  
     <div className="fruits-container"> 
     
    {props.fruits.map((fruit) => { 
        console.log(fruit); 
       return (
        <div>
            <ProductItem name = {fruit.name} family = {fruit.family}
             order = {fruit.order} genus = {fruit.genus}/> 
        </div>
       );
    })}
    </div>
  );
}

export default ProductsList;