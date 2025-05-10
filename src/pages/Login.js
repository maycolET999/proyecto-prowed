function Login(){
    return(
    <div className="d-flex align-center justify-content-center" style={(height="100vh")}>
    <div className="card p-4" style={{width:"300px"}}>
    <h2 className="text">Iniciar Sesion</h2>
    <form onSubmit={()=>{}}>
            <input 
            type="email" 
            className="form-control nb-3"
            placeholder="Ingrese su correo"
            value={gmail}
            onChange={(e)=>{}}/>
    
            <button
            className="btn btn-primary w-100"
            type="submit">
                Ingresar
            </button>
    </form>
    </div>
    </div>
    )
    }

    export default Login()
