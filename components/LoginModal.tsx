import Modal from './Modal';

const LoginModal = ({ }) => {
    return (
        <Modal idModal='login-modal' width='600px'>
            <div className='flex justify-center	flex-col items-center'>
                <img src='/logo.jpg' className='w-[100px] h-[100px]' />
                <h1 className='text-[#292929] font-bold	text-[30px] pb-[20px]'>Đăng nhập vào SUY Official</h1>
                <button className="relative font-medium px-[100px] py-[5px] border-solid border-[2px] border-[#dce0e3] rounded-full">
                    <i className=" absolute left-[10px] top-[50%] translate-y-[-50%] fa-brands fa-facebook text-[20px]"></i>
                    Đăng nhập
                </button>
            </div>
        </Modal>
    );
};

export default LoginModal;