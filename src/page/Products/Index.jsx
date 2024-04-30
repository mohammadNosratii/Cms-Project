import React from 'react'
import ErrorBox from '../../components/Module/ErrorBox/ErrorBox'
import AddNewProduct from '../../components/Template/AddNewProduct/AddNewProduct'

export default function Products() {
  return (
    <div className='space-y-5'>
      <AddNewProduct />
      <ErrorBox errMessage="Product" />
    </div>
  )
}
