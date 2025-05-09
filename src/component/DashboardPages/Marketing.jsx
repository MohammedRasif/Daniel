"use client"

import { useState, useEffect, useRef } from "react"
import { FaEdit, FaTrash, FaSearch, FaEllipsisV, FaChevronRight, FaArrowLeft } from "react-icons/fa"

const Marketing = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeMenu, setActiveMenu] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [showCreatePoster, setShowCreatePoster] = useState(false)

  // Refs for click outside detection
  const menuRef = useRef(null)

  // Sample data for the marketing table
  const [marketingData, setMarketingData] = useState([
    { id: 1, appNo: "username1335", appTitle: "46593292", dateCreation: "46593292", poster: "View", category: "Tags" },
    {
      id: 2,
      appNo: "username1563",
      appTitle: "28474562",
      dateCreation: "28474562",
      poster: "View",
      category: "General info",
    },
    {
      id: 3,
      appNo: "username1128",
      appTitle: "74895487",
      dateCreation: "74895487",
      poster: "View",
      category: "Price list",
    },
    {
      id: 4,
      appNo: "username1422",
      appTitle: "62621762",
      dateCreation: "62621762",
      poster: "View",
      category: "General info",
    },
    {
      id: 5,
      appNo: "username1001",
      appTitle: "81919847",
      dateCreation: "81919847",
      poster: "View",
      category: "Price list",
    },
    {
      id: 6,
      appNo: "username1123",
      appTitle: "25757262",
      dateCreation: "25757262",
      poster: "View",
      category: "Price list",
    },
    {
      id: 7,
      appNo: "username1232",
      appTitle: "19384746",
      dateCreation: "19384746",
      poster: "View",
      category: "Price list",
    },
    {
      id: 8,
      appNo: "username1893",
      appTitle: "23446333",
      dateCreation: "23446333",
      poster: "View",
      category: "General info",
    },
    {
      id: 9,
      appNo: "username1893",
      appTitle: "23446333",
      dateCreation: "23446333",
      poster: "View",
      category: "General info",
    },
  ])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle search functionality
  const filteredData = marketingData.filter((item) =>
    item.appNo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Toggle action menu
  const toggleMenu = (id, e) => {
    e.stopPropagation()
    setActiveMenu(activeMenu === id ? null : id)
  }

  // Handle edit action
  const handleEdit = (id, e) => {
    e.stopPropagation()
    console.log("Edit item with id:", id)
    setActiveMenu(null)
    // Add your edit logic here
  }

  // Handle delete confirmation
  const handleDeleteClick = (id, e) => {
    e.stopPropagation()
    setItemToDelete(id)
    setShowDeleteConfirm(true)
    setActiveMenu(null)
  }

  // Handle actual deletion
  const handleDelete = () => {
    if (itemToDelete) {
      setMarketingData(marketingData.filter((item) => item.id !== itemToDelete))
      setShowDeleteConfirm(false)
      setItemToDelete(null)
    }
  }

  // Cancel deletion
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false)
    setItemToDelete(null)
  }

  // Toggle create poster form
  const toggleCreatePoster = () => {
    setShowCreatePoster(!showCreatePoster)
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-gray-700">Marketing</h1>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={toggleCreatePoster}
          className="bg-white border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
        >
          Create Poster +
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by App No."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">App No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                App title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of creation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poster</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category <FaChevronRight className="inline ml-1" />
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.appNo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.appTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.dateCreation}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-pink-500 hover:text-pink-700 cursor-pointer">
                    {item.poster}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <div className="relative inline-block">
                    <button
                      onClick={(e) => toggleMenu(item.id, e)}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <FaEllipsisV />
                    </button>
                    {activeMenu === item.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                        <div className="py-1">
                          <button
                            onClick={(e) => handleEdit(item.id, e)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                          >
                            <FaEdit className="mr-2" /> Edit
                          </button>
                          <button
                            onClick={(e) => handleDeleteClick(item.id, e)}
                            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left cursor-pointer"
                          >
                            <FaTrash className="mr-2" /> Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 backdrop-blur-[3px] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Poster Modal */}
      {showCreatePoster && (
        <div className="fixed inset-0 backdrop-blur-[3px] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg max-w-md w-full">
            <div className="mb-4">
              <button
                onClick={toggleCreatePoster}
                className="text-gray-500 hover:text-gray-700 cursor-pointer flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl font-medium text-gray-800">Poster Creation</h2>
              <div className="mt-2 flex justify-center">
                <div className="bg-pink-500 text-white px-3 py-1 rounded-md flex items-center">
                  <span className="font-bold mr-1">We</span>
                  <span>Pro</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select custom app</label>
                <div className="relative">
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md appearance-none cursor-pointer">
                    <option value="" disabled selected>
                      Choose one
                    </option>
                    <option value="app1">App 1</option>
                    <option value="app2">App 2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <FaChevronRight className="transform rotate-90" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (Max 60-70 Word)</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter here"
                  rows={4}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Poster Image</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md bg-gray-100 text-gray-500"
                    value="Choose file"
                    readOnly
                  />
                  <label className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-gray-500 cursor-pointer">
                    Browse
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Maximum Height:100 Width:600px</p>
              </div>

              <button className="w-full bg-[#EB5A8E] text-white py-2 rounded-md hover:bg-pink-600 transition-colors cursor-pointer mt-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Marketing