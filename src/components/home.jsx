function Home(){
    return(
        <div className="bg-zinc-900 flex flex-col items-center p-5 text-white gap-5 rounded-xl">
            <p className="text-6xl mt-24">One Tool For Preventing It All</p>
            <p className="text-lg mb-32 w-5/12">Harnessing the Power of AI to Provide Uninterrupted Protection, Detect Scams in Real-Time, and Keep You Safe Across Every Website, Wherever You Browse.</p>
            <div className="flex gap-10">
                <button className="text-black bg-white p-3 rounded-xl text-lg w-36 h-14">Get Started</button>
                <button className="text-white bg-zinc-800 p-3 rounded-xl text-lg w-36 h-14">View Trends</button>
            </div>
        </div>
    )
}

export default Home;