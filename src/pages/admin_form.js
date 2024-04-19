import { Container, Typography, Button, Grid } from '@mui/material';
import Head from 'next/head';

const AdminForm = () => {
  // Sample complaints data
  const complaints = [
    "EDMAR SANCHEZ",
    "COCO MARTIN",
    "MARCUS ROSAS",
    "KRIS DENSO",
    "DANIEL PADILLA"
  ];

  return (
    <Container maxWidth="md">
      <Head>
        <title>Admin Page</title>
      </Head>
      <div className="complaints" style={{ margin: '20px' }}>
        <h2>TODAY&rsquo;S COMPLAINTS</h2>
        {complaints.map((complaint, index) => (
          <div key={index} className="complaint" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>{complaint}</Typography>
            <Button variant="contained" color="primary">
              Assign To
            </Button>
          </div>
        ))}
        <Button variant="contained" color="primary">
          All Complaints
        </Button>
      </div>
    </Container>
  );
};

export default AdminForm;
