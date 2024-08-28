

const ContainerFullHD = ({ children }) => {
    return (
        <div className="w-full flex flex-col items-center overflow-hidden bg-gray-200 dark:bg-black">
            <div className="w-full lg:max-w-fullHD overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default ContainerFullHD