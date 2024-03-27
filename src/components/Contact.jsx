

const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font bold flex justify-center my-10 w-full">Contact us</h1>
            <div className="flex justify-center">
            <form className="space-y-4 w-1/2 p-4 lg:p-10 bg-gray-300 rounded-lg">
                <input className="input input-bordered join-item w-full" placeholder="Name" />
                <br />
                <input className="input input-bordered join-item w-full" placeholder="Email" />
                <br />
                <textarea className="textarea w-full" placeholder="Details"></textarea>
                <br />
                <button className="btn btn-accent flex justify-center mx-auto text-white text-xl">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;