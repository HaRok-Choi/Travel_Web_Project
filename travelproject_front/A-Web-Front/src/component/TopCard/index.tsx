import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function TopCard() {
  return (
    <Card>
      <CardMedia
        sx={{ height: '25vw' }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="div" variant="body1" sx={{ fontWeight: 700 }}>
          Top1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          제주 3일 #가파도 #청보리축제 #핫플레이스 # 사진맛집
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1vh' }}>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>123,000<span style={{ fontSize: '16px', fontWeight: 300 }}>원 ~</span></Typography>
            <IconButton>
                <FavoriteBorderOutlinedIcon />
            </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}