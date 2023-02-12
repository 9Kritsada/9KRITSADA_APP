function Button(props) {
  const {name, link, icon} = props
  return (
    <div className="bg-[#DCD6F7] drop-shadow-lg hover:opacity-80 rounded px-2 py-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className=" text-[#424874] text-[12px] ">
        <i class={`font-semibold ${icon}`}></i> {name.toUpperCase()}
      </a>
    </div>
  )
}

export default Button;