import React from 'react'

function Footer() {
    return (
        <div className="flex justify-center items-center flex-col mt-5 overflow-hidden">
            <div className=" min-h-[10vh] border-b-2 min-w-[80vw]  border-[#101400]">

            </div>
            <footer className="flex justify-center items-center flex-col my-5 self-start]">
                <p className="text-[#101400] text-sm">
                    {/* &copy; {" "} {new Date().getFullYear()} {" "} */}
                    <span className="text-[#101400] text-lg font-sora ">Rian Rahman Al-Aziz</span>
                </p>
            </footer>
        </div>
    )
}

export default Footer