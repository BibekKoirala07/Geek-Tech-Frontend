import EachCard from "./EachCard";

function CartDisplay({
  products,
  onAddToCart,
}: {
  product: any;
  onAddToCart: any;
}) {
  return (
    <div className="grid gap-3 grid-cols-2 rounded-lg bg-gray-200 p-0 px-5 pb-3  sm:grid-cols-2 lg:grid-cols-3">
      {products.map((each: any, index: number) => {
        return <EachCard each={each} key={index} onAddToCart={onAddToCart} />;
      })}
    </div>
  );
}

export default CartDisplay;
