export default function InputSearch() {
    return (
        <div className="select-none border-[2px] border-solid border-[#e8ebed] rounded-full p-[5px] min-w-[400px] flex gap-[10px] justify-content-center items-center">
            <button className="ml-[10px] text-[20px]"><i className="fa-solid fa-magnifying-glass"></i></button>
            <input className="w-full focus:outline-none" placeholder="Tìm kiếm..." />
        </div>
    );
}
