import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContest="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}

        >
            <Grid item
                className='box-shadow'
                xs={3}
                sx={{
                    width: {sm: 500},
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}>



                <Typography variant='h5' sx={{ mb: 1 }}  ><h1 className=''>{title}</h1></Typography>


                <p className=''>Bienvenido, Por favor ingresa tus datos.</p>
                {children}

            </Grid>
        </Grid>

    )
}
