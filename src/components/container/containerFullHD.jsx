

const ContainerFullHD = ({ children }) => {
    return (
        <div className="w-screen flex flex-col items-center overflow-hidden">
            <div className="lg:max-w-fullHD overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default ContainerFullHD