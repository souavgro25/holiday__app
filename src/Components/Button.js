function Button({name,selected}) {
    return (
        <div>
            <button className={selected? "text-sm text-blue-500 bg-blue-200 font-normal mx-5 pl-4 pr-14 py-1 rounded-sm":
            "text-sm text-black font-normal mx-5 pl-4 pr-14 py-1 rounded-sm "
            }>
                {name}</button>
        </div>
    )
}

export default Button
