import image from "../../image/freepik__upload.png";

const Navbar = () => {
  return (
    <div className="text-white fixed top-0 left-0 w-full z-50 flex justify-center mt-5">
      <div className="bg-black container mx-auto px-2 py-2 flex justify-between items-center rounded-full border border-gray-700 box-border">
        <div>
          <img src={image} className="h-12" alt="Logo" />
        </div>
        <div className="border border-gray-700 rounded-full px-4 py-1 flex items-center gap-4 cursor-pointer">
          <button className="text-[16px] px-4 py-2 rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
