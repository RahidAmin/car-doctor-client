import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const { user } = useContext(AuthContext);

    const handleBookeService = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const email = event.target.email.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)

        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('Service book successfully')
            }
        }
        )
    }


    return (
        <div>
            <h3>Book Sevice:{title}</h3>


            <form onSubmit={handleBookeService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;