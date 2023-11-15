import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Bienvenido a LookStyle'>
      <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type='email'
                placeholder='correo@gmail.com'
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder='Contraseña'
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }} mt={2}>

              <Grid item xs={12} >
                <Button variant='contained' fullWidth>
                  Iniciar Sesion
                </Button>

              </Grid>
              <Grid item xs={12} >
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}> Google</Typography>
                </Button>

              </Grid>


            </Grid>


            

            

            
            
            
            <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1}}>
              ¿No tienes cuenta?
            </Typography>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta 
              </Link>

              </Grid>


          </Grid>


        </form>

    </AuthLayout>

        

      
  )
}
