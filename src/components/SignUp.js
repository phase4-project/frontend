import React, {useState} from 'react'


function SignUp ({URL}){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [signedUp, setSignedUp] = useState(false)
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleClick(){
        setSignedUp(!signedUp)
    }

    function handleUserPost(event){
        
        event.preventDefault()
        fetch(`${URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' 
        },
        body: JSON.stringify(formData)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setFormData({
                username: '',
                password: ''
            })
        })
    }



    return(
        <div>
        <form onSubmit={handleUserPost} className={"signUp-form"}>
        <label>SignUp Form</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        <button type="submit" onClick={handleClick}/>
        </form>
        {signedUp?<span>Thank you!</span>:null}

        </div>
    )
}

export default SignUp;