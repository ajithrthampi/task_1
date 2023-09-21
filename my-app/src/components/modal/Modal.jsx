import React from 'react'

const Modal = () => {
    return (
        <>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed 'mx-auto  bg-opacity-50 bg-gray-900 z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md  ">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 px-10">

                        <div className="flex items-start justify-between pt-10 border-b rounded-t dark:border-gray-600 ">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add Status Change Comment
                            </h3>
                            <div className=''>
                                <hr class="h-px w-full pt-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <input type="text" name="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Status Change Comment" required/>
                        </div>
                        <div className="flex items-end justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-[#207c22] hover:bg-[#2f692f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                UPDATE COMMENTS
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal
