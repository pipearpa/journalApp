// Importaciones de bibliotecas y componentes necesarios
import { Link as RouterLink } from 'react-router-dom'; // Importa el componente Link de react-router-dom con el nombre RouterLink
import { Button, Grid, Link, TextField, Typography } from '@mui/material'; // Importa componentes de Material-UI
import { AuthLayout } from '../layout/AuthLayout'; // Importa un layout de autenticación desde un directorio llamado 'layout'

// Definición del componente RegisterPage como una función de flecha
export const RegisterPage = () => {
  return (
    // Usa el componente AuthLayout con un título específico para la página de registro
    <AuthLayout title='Crear una cuenta'>
      <form>
        <Grid container>
          {/* Primer campo de entrada: Nombre Completo */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type='text'
              placeholder='Ingresa nombre'
              fullWidth
            />
          </Grid>

          {/* Segundo campo de entrada: Correo */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
            />
          </Grid>

          {/* Tercer campo de entrada: Contraseña */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
            />
          </Grid>

          {/* Botón para crear cuenta */}
          <Grid container spacing={2} sx={{ mb: 2 }} mt={2}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          {/* Enlace para iniciar sesión */}
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>
              ¿Ya tienes cuenta?
            </Typography>
            {/* Enlace usando RouterLink para redirigir a la página de inicio de sesión */}
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
