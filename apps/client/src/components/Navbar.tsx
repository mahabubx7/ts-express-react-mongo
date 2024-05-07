interface INavbarProps {
  addNewTopic: (topic: string) => void
}

const Navbar = ({ addNewTopic }: INavbarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const search = formData.get('search') as string

    if (search) addNewTopic(search)
  }

  return (
    <nav>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="w-full ml-auto mt-12 mb-8 flex items-center justify-end"
        >
          <input
            type="search"
            className="border-[2px] border-gray-100 rounded-md p-2 pl-4 w-1/2 mr-2"
            autoComplete="off"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="capitalize bg-sky-500 hover:bg-sky-600 p-2 px-4 font-semibold rounded-md text-white"
          >
            add topic
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
