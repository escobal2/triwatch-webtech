import { Container, Grid, Typography, TextField, Button, CssBaseline, Alert, Paper } from "@mui/material";
import { useState } from "react";
import Link from 'next/link';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    category: "",
    complaintDetails: "",
    file: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    }
    if (!formData.category.trim()) {
      errors.category = "Category is required";
    }
    if (!formData.complaintDetails.trim()) {
      errors.complaintDetails = "Details of Complaint are required";
    }
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      setSubmissionStatus("success");
      // Reset form data
      setFormData({
        fullName: "",
        contactNumber: "",
        category: "",
        complaintDetails: "",
        file: null,
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography component="h1" variant="h5">
          Report Form
        </Typography>
        {submissionStatus === "success" && (
          <Alert severity="success" sx={{ marginTop: 2 }}>
            Form submitted successfully!
          </Alert>
        )}
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Are you an admin?
        </Typography>
        <Link href="/Admin_Login">
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Yes, go to Admin Login
          </Button>
        </Link>
        <form onSubmit={handleSubmit} sx={{ marginTop: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={Boolean(formErrors.fullName)}
                helperText={formErrors.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                error={Boolean(formErrors.contactNumber)}
                helperText={formErrors.contactNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                variant="outlined"
                name="category"
                value={formData.category}
                onChange={handleChange}
                error={Boolean(formErrors.category)}
                helperText={formErrors.category}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Details of Complaint"
                variant="outlined"
                name="complaintDetails"
                value={formData.complaintDetails}
                onChange={handleChange}
                error={Boolean(formErrors.complaintDetails)}
                helperText={formErrors.complaintDetails}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput">
                <Button variant="outlined" component="span">
                  Upload Image
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ReportForm;
