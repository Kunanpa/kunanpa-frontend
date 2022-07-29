import { ResponseFlowers } from '../../types/models'
import AsideProducts from './AsideProducts'
import CardProduct from './CardProduct'
import FooterProducts from './FooterProducts'
import NavAspectList from './NavAspectList'
import NavFilter from './NavFilter'
type Props={
  flowers:ResponseFlowers,
  category:string,
  id:string
}
export default function ListProducts ({ flowers, category, id }:Props) {
  return (
        <>
        <div className='flex pt-6 justify-between items-center' >
                <h1 className='font-bold text-3xl capitalize ' >{category}</h1>
                <NavAspectList total={flowers.total} />
              </div>
              <div className='py-6' >
                <NavFilter/>
              </div>
              <div className='mt-8 grid gap-4 min-h-screen grid-cols-4 grid-flow-row' >
                <AsideProducts/>
                <div className='col-end-5 col-start-2 row-start-1 row-end-6' >
                  {flowers.data.map((flower) => (
                    <CardProduct key={flower.id} flower={flower} />
                  ))
                  }
                </div>
                <FooterProducts category={category} id={id} flowers={flowers} />
              </div>
        </>
  )
}
