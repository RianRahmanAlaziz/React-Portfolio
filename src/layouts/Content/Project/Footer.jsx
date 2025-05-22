import React from 'react'

function Footer() {
    return (
        <div className="flex justify-center items-center flex-col  overflow-hidden min-h-[12vh] -mt-12"
            style={{
                backgroundImage: "url('/image/top.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}>

            <footer className="flex justify-center items-center flex-col mt-5 self-start]">
                <p className="text-[#fdfcfb] text-sm">
                    {/* &copy; {" "} {new Date().getFullYear()} {" "} */}
                    <span className="text-[#fdfcfb] text-lg font-sora ">Rian Rahman Al-Aziz</span>
                </p>
            </footer>
        </div>
    )
}

export default Footer