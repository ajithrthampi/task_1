import React, {useEffect, useState} from 'react'
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';


const Table = () => {

    const [showDropDown, setShowDropDown] = useState("false")
    const [selectedClient,setSelectedClient] = useState("New");
    const [showModal, setShowModal] = useState("false")

    const navigate = useNavigate()


    // show dropDown
    const showDropDownBar = () => {
        setShowDropDown(!showDropDown)
    }

    const handleSelectChange = (e) => {
        setSelectedClient(e.target.value);
    }

    useEffect(() => {
        if(selectedClient === "Following"){
            setShowModal(true)
        }
    },[selectedClient])

 

   const showEdit = () => {
    navigate("/edit")
   }


    return (
        <div>

            <div className="relative overflow-x-auto pt-20 px-5 h-screen">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-[#005c4b] ">
                    <thead className="text-xs text-white ">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Basic Details
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Numbers
                            </th>

                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Services
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Comments
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Other Details
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Actions
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 relative">

                                <button 
                                    id="dropdownHoverButton"
                                    data-dropdown-toggle="dropdownHover"
                                    data-dropdown-trigger="hover"
                                    
                                    type="button">
                                    <select 
                                    value={selectedClient}
                                     onChange={handleSelectChange}
                                    className=" focus:outline-none focus:to-blue-600 border border-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  w-32 ">
                                        <option className=''  value="New">New</option>
                                        <option className='' value="Following">Following</option>
                                    </select>

                                </button>
                            </td>
                            <td className="px-6 py-4 flex gap-5">
                               <button className='bg-orange-500 px-5 py-2 text-white rounded-md' onClick={showEdit}>EDIT</button>
                               <button className='bg-blue-500 px-5 py-2 text-white rounded-md'>FOLLOWUP</button>
                            </td>
                        </tr>


                    </tbody>

                </table>
            </div>

{
 showModal === true &&  <Modal/>
}
           

        </div>
    )
}

export default Table
