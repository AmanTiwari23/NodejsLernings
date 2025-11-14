import { useState, useEffect } from "react";
import axios from "axios";


const Display = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [authid, setAuthid] = useState("");
  const [bookname, setBookname] = useState("");
  const [price, setPrice] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setAuthid(id);
    setShow(true);
  };

  const loadData = async () => {
     const api = `${import.meta.env.VITE_BASE_URL}/students/display`;
    const response = await axios.get(api);
    console.log(response);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitBook = async (e) => {
    e.preventDefault();
  const api = `${import.meta.env.VITE_BASE_URL}/students/booksave`;

    const response = await axios.post(api, { authid, bookname, price });
    console.log(response);

    // After submitting, close the modal and reset fields
    handleClose();
    setBookname("");
    setPrice("");
    // Optionally, reload data to see the change immediately
    loadData();
  };

  const ans = mydata.map((key) => {
    return (
      <tr key={key._id} className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-5 py-3"> {key.authorname} </td>
        <td className="px-5 py-3"> {key.email} </td>
        <td className="px-5 py-3">
          {key.booksid.map((key1) => {
            return (
              <p key={key1._id} className="text-sm">
                <span className="font-medium">Title:</span> {key1.bookname},
                <span className="font-medium"> Price:</span> {key1.price}
              </p>
            );
          })}
        </td>
        <td className="px-5 py-3">
          <button
            onClick={() => {
              handleShow(key._id);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
          >
            Add More Book
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Display Record</h1>
      <hr className="mb-6" />

      <div className="overflow-x-auto">
        <table className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Author Name
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Books
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </div>

    
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
      
          <div
            className="fixed inset-0 bg-black bg-opacity-1"
            onClick={handleClose}
          ></div>

         
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md m-4 z-10">
           
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h3 className="text-2xl font-semibold">Add New Book</h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              >
                &times;
              </button>
            </div>

            
            <div className="p-6">
              <form onSubmit={submitBook}>
                <div className="mb-4">
                  <label
                    htmlFor="bookname"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Enter Book Name
                  </label>
                  <input
                    type="text"
                    id="bookname"
                    value={bookname}
                    onChange={(e) => {
                      setBookname(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Enter Book Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default Display;
