import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useState, useEffect } from "react";



export const LoginPage = () => {


  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 


  const ValidarUsuario = async (nombre, password) => {
    let response = await fetch(`http://localhost:3006/api/v1/users/${nombre}/${password}`, {
      method: "POST",
    });
    if (response.status === 200) {
     
      alert("inicie sesion");
      window.location.href = '/';
      

    } else {
      alert("usuario o contraseña incorrecta");
     
      /*  <Router>
            
              <Routes>
              <Route path="/" component={AppUser} />
              </Routes>
      </Router>*/
      
    }
   
  };

  const controladorDelEnvio = (e) => {
    e.preventDefault();
    ValidarUsuario(name, password);
  };

  return (
    
    <AuthLayout title='Bienvenido a LookStyle'>
      <form onSubmit={controladorDelEnvio} >
      <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre" 
                type="text" 
                placeholder="Ingresa Usuario"
                fullWidth
                name="name"
                value={ name }
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Ingresa Contraseña"
                fullWidth
                name="password"
                value={ password }
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  type="submit" 
                  variant='contained' 
                  fullWidth>
                  Iniciar Sesion
                </Button>
              </Grid>
           </Grid>
            
        </Grid>
      </form>


      <Grid container direction='row' justifyContent='end'>
      <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
      <Link component={RouterLink} color='inherit' to="/auth/register">
        Crear una cuenta
      </Link>
      </Grid>


    </AuthLayout>




  )
}
