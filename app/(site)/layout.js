import Header from '@/components/Layout/header';

const ShopLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default ShopLayout