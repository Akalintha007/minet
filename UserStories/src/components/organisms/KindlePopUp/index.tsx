import { Box, Modal } from '@mui/material'
import { useState } from 'react';
import Button from '../../atoms/Button';

interface Props {
  openKindlePopUp: boolean;
}

const KindePopUp = ({openKindlePopUp}: Props) => {

    const [open, setOpen] = useState(openKindlePopUp);
    const [success, setSuccess] = useState<boolean>(false)

    const handleSuccess = () => {
        setSuccess(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

  return (
    <div>
      <Modal open={open}>
        {!success ? (
          <Box>
            {/* Heading */}
            {/* Text Content  */}
            {/* Text Content   */}
            {/* Input field for
            email  */}
              <Button onClick={handleSuccess}>Add Email</Button>
              <Button>Need Help?</Button>
          </Box>
        ) : (
          <Box>
            {/* Icon  */}
            {/* Text */}
            {/* Text */}
            <Button onClick={handleClose}>Continue reading</Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default KindePopUp