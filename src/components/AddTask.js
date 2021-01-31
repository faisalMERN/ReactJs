import { useState } from 'react'



function AddTask({ onAdd }) {

    const [text, setText] = useState('')
    const [city, setCity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add Name')
            return
        }

        onAdd({ text, city })

        setText('')
        setCity('')

    }



    return (
        <div>

            <form onSubmit={onSubmit}>
                <div className="form-group" style={{ width: '50%', marginLeft: '30%' }}>
                    <label>Name: </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control" />
                    <label>city: </label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" />
                    <button type="submit" className="form-control text-white mt-4 btn btn-block bg-dark" >Save</button>

                </div>
            </form>


        </div>

    );


}



export default AddTask