import React from 'react';
import pic from '../../../../public/mahmudul.jpg'

const Card = () => {
  return (
    <div >
      <div className='grid grid-cols-3 overflow-hidden'>
        <div className="card w-52 bg-base-100 shadow-xl">
          <figure><img src={pic} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>


        <div className="card w-52 bg-base-100 shadow-xl">
          <figure><img src={pic} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="card w-52 bg-base-100 shadow-xl">
          <figure><img src={pic} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>


            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;