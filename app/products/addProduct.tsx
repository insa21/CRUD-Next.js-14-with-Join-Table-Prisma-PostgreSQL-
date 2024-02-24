"use client"
import { useState } from 'react'
import type { Brand } from '@prisma/client'

const AddProduct = ({brands} : {brands : Brand[]}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleModal = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button className='btn btn-success text-white' onClick={handleModal}>Add  Product</button>
        <div className={isOpen ? 'modal modal-open ' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    Add New Product
                </h3>
                <form>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                            Product Name
                        </label>
                        <input type="text" className="input input-bordered" placeholder='Enter product name' />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                            Price
                        </label>
                        <input type="text" className="input input-bordered" placeholder='Enter Price' />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                            Brand
                        </label>
                        <select className='select select-bordered' name='brand'>
                            <option value=""disabled>Select a Brand</option>
                            {brands.map((brand) => (
                                <option value={brand.id} key={brand.id}>{brand.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-action">
                        <button type='button' className='btn' onClick={handleModal} >Close</button>
                        <button type='submit' className='btn btn-primary' >Save</button>
                    </div>
                </form> 
            </div>
        </div>

    </div>
  )
}

export default AddProduct