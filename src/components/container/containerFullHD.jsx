

const ContainerFullHD = ({ children }) => {
    return (
        <div className="w-full flex flex-col items-center overflow-hidden dark:bg-black">
            <div className="lg:max-w-fullHD overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default ContainerFullHD