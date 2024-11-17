export default function NotFound(){
    return(
        <div className="items-center justify-center flex flex-col width-full h-screen p-20">
            <div className="flex items-center justifu-center text-center flex-col p-2">
                <h1 className="text-rose-500 font-bold text-2xl">Opps! You have found <br />
                 the lost world!
                </h1>

                <p className="text-green-500 ">Home is just a click away .Let's go back and continue our regular life</p>
                

            </div>

            <button className="p-2 bg-blue-500 rounded-md ">Go To Home</button>
        </div>
    )
}