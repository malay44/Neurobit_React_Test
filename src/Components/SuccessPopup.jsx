import React, { useEffect, useState } from 'react';
import { Snackbar, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const NotificationComponent = ({ currentStep }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (currentStep > 2) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // Disappear after 5 seconds
    }
  }, [currentStep]);

  return (
    <Snackbar
    sx={{top: "0!important", boxShadow: "0px 3px 20px 4px rgba(0, 0, 0, 0.04)", borderRadius: "0px 0px 4px 4px", overflow: "hidden"}}
      open={showNotification}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={5000} // Same duration as setTimeout above
    >
      <Box
        sx={{
          backgroundColor: '#F1FFF7',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 5,
          padding: '20px 16px',
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: '#10A44B',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CheckIcon fontSize='small' sx={{ color: 'white', fontSize: 16 }} />
        </Box>
        <Box sx={{textAlign: "left"}}>
          <Typography variant="subtitle1" sx={{ fontSize: 14, color: '#10A44B' }}>
            Channels Configured
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12, color: '#6D6D6D' }}>
            Channels configured successfully
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          color="inherit"
          sx={{ marginLeft: 7, width: "min-content", padding: 0 }}
          onClick={() => setShowNotification(false)}
        >
          <CloseIcon fontSize="small" sx={{transform: "Scale(0.8)"}} />
        </IconButton>
      </Box>
    </Snackbar>
  );
};

export default NotificationComponent;
