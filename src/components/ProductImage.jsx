import { productUrl } from '../utils/assets'

function ProductImage({ title, compact = false }) {
  return (
    <div className={`relative grid place-items-center bg-white ${compact ? 'h-28 w-24' : 'h-72'}`}>
      <div className="absolute bottom-5 h-6 w-28 rounded-full bg-slate-300/50 blur-xl" />
      <img
        src={productUrl}
        alt={`${title} bottle`}
        className={`${compact ? 'h-24' : 'h-64'} relative w-auto object-contain drop-shadow-xl`}
      />
    </div>
  )
}

export default ProductImage
