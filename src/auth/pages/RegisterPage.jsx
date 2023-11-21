// Importaciones de bibliotecas y componentes necesarios
import { Link as RouterLink } from 'react-router-dom'; // Importa el componente Link de react-router-dom con el nombre RouterLink
import { Button, Grid, Link, TextField, Typography } from '@mui/material'; // Importa componentes de Material-UI
import { AuthLayout } from '../layout/AuthLayout'; // Importa un layout de autenticación desde un directorio llamado 'layout'
import { useState, useEffect } from "react";
import React from "react";

// Definición del componente RegisterPage como una función de flecha
export const RegisterPage = () => {


  const [posts, setPosts] = useState([]);
  const [cargar, setCargar] = useState(true);
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const cargarPost = async () => {
      const response = await fetch("http://localhost:3006/api/v1/users/");
      const { data } = await response.json();
      const desestructura = data;
      setPosts(desestructura);
    };

    if (cargar) {
      cargarPost();
      setCargar(false);
    }
  }, [cargar]);

  const borrarUsuario = async (id) => {
    let response = await fetch(`http://localhost:3006/api/v1/users/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      setPosts(posts.filter((post) => post.id !== id));
    } else {
      return;
    }
  };

  const agregarUsuario = async (nombre, lastname, correo, password, phone) => {
    let response = await fetch("http://localhost:3006/api/v1/users/  ", {
      method: "POST",
      body: JSON.stringify({
        name: nombre,
        last_name: lastname,
        email: correo,
        password: password,
        phone_number: phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
  };

  const controladorDelEnvio = (e) => {
    e.preventDefault();
    agregarUsuario(name, last_name, email, password, phone);
  };


  return (
    // Usa el componente AuthLayout con un título específico para la página de registro
    <AuthLayout title='Crear una cuenta'>

      <div className="row p-2 mt-2">
        <button
          type="button"
          onClick={() => setCargar(true)}
        >
          Cargar Usuarios

        </button>


      </div>

      <form onSubmit={controladorDelEnvio} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Ingresa Usuario"
              fullWidth
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Last name"
              type="text"
              placeholder="Ingresa Nombre"
              fullWidth
              name="last_name"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Ingresa Email"
              fullWidth
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Elige una Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Phone Number"
              type="number"
              placeholder="Ingresa Numero"
              fullWidth
              name="phone_number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant='contained'
                fullWidth>
                Registrarme
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </form>

      <Grid container direction='row' justifyContent='end'>
        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
        <Link component={RouterLink} color='inherit' to="/auth/login">
          Ingresar
        </Link>
      </Grid>

      <div>
        {Array.isArray(posts) ? (
          posts.map(post => {
            return (
              <div className="card mt-2 p-3" key={post.id}>
              <h2 className="card-title">{post.name}</h2>
              <h2 className="card-title">{post.email}</h2>
              <h2 className="card-title">{post.password}</h2>
              <h2 className="card-title">{post.phone_number}</h2>
              <div className="d-grid d-sm-flex justify-content-sm-end">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => borrarUsuario(post.id)}
                >
                  Borrar Usuario
                </button>
                </div>
                </div>
              
             );
          })
        ) : (
          <p>No hay datos de usuario disponibles</p>
        )
        }
      </div>

      
    </AuthLayout>
    
  );
};
