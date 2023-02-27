export function LoginSignUp() {

    function onSubmitLogin(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        console.log(ev);

    }

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        let { value, type, name: field } = ev.target

    }

    return (
        <section className='login-signup'>
            <div className="login-container">
                <div className="login-txt">Login</div>

                <form className="inputs-container" onSubmit={onSubmitLogin}>

                    <div className="input-container">
                        <label htmlFor="" >User Name</label>
                        <input type="text" name="username" id="username" onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} />
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        </section>
    )
}