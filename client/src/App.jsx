import { useState } from 'react'
import { useQuery, useQueryClient  } from 'react-query'
import axios from "axios"

function App() {
  const queryClient = useQueryClient();
  const { data: notes } = useQuery('notes', async () => {
    const response = await axios.get('http://localhost:5000');
    return response.data;
  });
  
  const [name, setName] = useState('')
  console.log(notes)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const addNote = async(e) => {
    e.preventDefault()

    const newNote = {
      name: name
    }
    await axios.post('http://localhost:5000', newNote)
    queryClient.invalidateQueries('notes');
    setName('')
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input onChange={handleNameChange} type="text" />
        <button type='submit'>Add</button>
      </form>
      <div>
        {notes?.map(note => (
          <ul key={note._id}>
            <li>{note.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default App
