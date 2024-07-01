import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const MobileDetails = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [todo, setTodo] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleDetails=(e)=>{
    setDetails(e.target.value)
  }
  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) {
      return null;
    }
    setTodo([...todo, { name, price, quantity  ,details }]);
    // Clear the input field
    setName("");
    setPrice("");
    setQuantity("");
    setFormVisible(false);
    setDetails("")
  };

  const handleFormVisible = () => {
    setFormVisible(!isFormVisible);
  };
  return (
    <div className="rounded-xl px-6 py-6 my-9    ">
  
      <div className="flex justify-between">
        <h1 className="font-bold text-[12px] sm:text-[12px] md:text-[1.3rem] lg:text-[1.5rem] text-gray-700 mb-5 ">
          Mobile Details
        </h1>

        <button
          className="  w-12 h-12 rounded-full bg-blue-500 text-white items-center  mr-5 hover:bg-blue-700 duration-300"
          onClick={handleFormVisible}
        >
          <IoMdAdd size={40} className="m-1" />
        </button>
      </div>
 {/* form */}
      <div  className="overflow-y-auto  h-[500px] px-2 rounded-md ">
        
        {isFormVisible && (
          <div className="  fixed inset-0 z-50 h-[100%]  bg-black/80 overflow-x-hidden text-white">
         
            
            <form
              action=""
              className="border-2 text-black font-bold w-[400px] mt-32 block px-8 py-4 space-y-4 bg-blue-700 ml-[33rem] rounded-2xl h-[400px] overflow-y-auto"
              onSubmit={submitForm}
            >
              <p className="text-xl font-semibold text-center">enter mobile details</p>
              <div>
                <input
                  type="text"
                  className=" w-full  h-[40px] px-3"
                  placeholder="Mobile Name"
                  onChange={handleName}
                  value={name}
                />
              </div>

              <div>
                <input
                  type="text"
                  className="  w-full  h-[40px] px-3"
                  placeholder="Quantiy "
                  onChange={handleQuantity}
                  value={quantity}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="  w-full h-[40px] px-3"
                  placeholder="Price "
                  onChange={handlePrice}
                  value={price}
                />
              </div>
              <div>
                <textarea
                  type="text"
                  className="  w-full h-[40px] px-3"
                  placeholder="Details"
                  onChange={handleDetails}
                  value={details}
                  cols={10}
                  rows={34}
         
                />
              </div>

              <button type="submit" className="bg-green-700 w-[70px] p-3">
                add
              </button>
            </form>
          </div>
        )}

        <div className="  grid grid-cols-3 gap-4 ">
          {todo.map((item, index) => (
            <div key={index} className="bg-blue-400 text-white px-4 py-4 rounded-xl h-[280px] space-y-1 ">
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <h2 className="font-semibold">{item.price}</h2>
              <h2>{item.quantity}</h2>
              <p className="h-[160px] overflow-y-auto  ">{item.details}</p>
            </div>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default MobileDetails;
