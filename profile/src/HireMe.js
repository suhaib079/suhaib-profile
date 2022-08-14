
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core';

const HireMe = () => {
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [message,setMessage]= useState('')
  const handlesubmit = (e) => {
    e.preventDefault()

    if (name && email ){
      console.log(name, email)
    }

  }
 
    return ( 
        <Container>
          <form action="" onSubmit={handlesubmit}>
        
        <TextField onChange={(e)=> setName(e.target.value)} id="filled-basic" label="Company Name" variant="filled" />
        <TextField onChange={(e)=> setEmail(e.target.value)} id="filled-basic" label="Email" variant="filled" />
        <TextField onChange={(e)=> setMessage(e.target.value)}  id="filled-basic" label="MESSAGE" variant="filled" />
        <Button variant='contained' type='submit'>Submit</Button>
      
      </form>
      </Container>
     );
}
 
export default HireMe;