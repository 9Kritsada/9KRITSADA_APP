function Button(props) {
  const {name, link, icon} = props
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-4 py-1 bg-[#DCD6F7] text-[#424874] mx-[0.25em] rounded shadow-md md:text-[14px] text-[12px] hover:opacity-80">
      <i class={`font-semibold ${icon}`}></i> {name.toUpperCase()}
    </a>
  )
}

export default Button;