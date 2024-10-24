function Report(){
    return(
        <div className="bg-zinc-900">
            <div className="flex flex-col justify-center items-center p-12 gap-4">
                <p className="text-5xl text-white font-medium">Report Now</p>
                <p className="text-lg text-white mb-6">If you want to report a website, do it using the given form</p>
                <div className="flex flex-col items-center bg-white h-160 w-128 rounded-xl shadow-md p-8">
                    <div className="text-3xl mb-1 flex gap-2 font-medium">
                        <p>Leave a</p>
                        <p className="text-purple-700">message</p>
                    </div>
                    <p>Fill up form below, our team will get back soon</p>
                    <input type="text" placeholder="Your Name" className="border-2 w-96 mt-8 p-4 font-medium rounded-xl border-purple-400"></input>
                    <input type="email" placeholder="Your Email" className="border-2 w-96 mt-8 p-4 font-medium rounded-xl border-purple-400"></input>
                    <input type="tel" placeholder="Website Url" className="border-2 w-96 mt-8 p-4 font-medium rounded-xl border-purple-400"></input>
                    <textarea className="border-2 w-96 h-28 mt-8 p-4 font-medium rounded-xl border-purple-400" placeholder="Your Report"></textarea>
                    <button className="bg-purple-700 text-white p-4 rounded-3xl mt-auto w-48 font-medium">SEND REPORT</button>
                </div>
            </div>
        </div>
        
    )
}

export default Report;