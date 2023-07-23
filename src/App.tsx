// @ts-nocheck

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Badge,
  IconButton,
  SvgIcon,
} from "@mui/material";
import {
  BuildingIcon,
  MapIcon,
  EastIcon,
  CalendarTodayIcon,
  AccessTimeIcon,
} from "./icons/icons";
import { Stack } from "@mui/system";
const theme = createTheme({
  typography: {
    fontFamily: ["Exo 2", "sans-serif"].join(","),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          m: {sm: 10 , md: 30},
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Card
          sx={{
            backgroundColor: "#040914",
            color: "#fff",
            display: "grid",
            gridTemplateColumns: {
              md: `15rem 12rem auto auto`,
            },
            border: 1,
            borderColor: "rgba(255, 255, 255, 0.10)",
            borderRadius: "20px",
            px:4,
          }}
        >
          <Box
 
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
               
                px: 3,
                py: 3,
                borderColor: "rgba(255, 255, 255, 0.10)",
                borderRadius: "20px",
              }}
              image="/image-299.png"
              alt="Paella dish"
            />
            <EventStatus />
          </Box>

          <Box
            sx={{
              // gridColumn: `span 1 / span 1`,
              display: { md: `flex`, xs: `none` },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DateCard />
          </Box>

          <Box sx={{ pl: 2, pr: 5, py: { md: 5, xs: 0 } }}>
            <Typography sx={{ fontSize: { md: `40px`, xs: `16px`  }, fontWeight:  { md: `400`, xs: `600`  }, pb: 2 }}>
              Northeast Collectibles Competitive Kryptic Tower play
            </Typography>
            <BadgeStats />

            <CardActions sx={{ p: 0 }}>
              <Location />
              <Box
                sx={{
                  display: { md: `flex`, xs: `none` },
                  alignItems: "center",
                  justifyContent: "end",
                  textTransform: "none",
                  fontSize: "1.5rem",
                  color: "#5C6BC0",
                  pt: 2,
                  pl: { md: 6, xs: `0` },
                }}
              >
                <Box
                  sx={{
                    fontSize: "1.5rem",
                    color: "#5C6BC0", 
                  }}
                >
                  More info
                </Box>
                <Box
                  component={"span"}
                  sx={{
                    ml: 1,
                    borderRadius: "9999px",
                    backgroundColor: "#5C6BC0",
                    width: "50px",
                    height: "50px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EastIcon sx={{color: "#fff"}} />
                </Box>
              </Box>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
export function EventStatus() {
  return (
    <Box
      component="h3"
      sx={{
        borderRadius: `0px 0px 20px 20px`,
        background: "#02BA1F",
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: "center",
        py:1
      }}
    >
      In Progress
    </Box>
  );
}
export function DateCard() {
  const commonStyles = {
    background: "inherit",
    border: 1,
    borderColor: "rgba(255, 255, 255, 0.30)",
    borderRadius: "20px",
    py: 1.4,
    px: 1.4,
  };
  return (
    <Box
      sx={{
        ...commonStyles,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Typography sx={{ fontSize: "20px" }}>Fri</Typography>
      <Typography
        sx={{
          color: "#02BA1F",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        Aug 23
      </Typography>

      <Typography sx={{ fontSize: "20px" }}>10 am CDT</Typography>
    </Box>
  );
}
export function BadgeStats() {
  return (
    <Stack spacing={2} direction="row">
      <Badge
        sx={{
          px: 2,
          py: 0.4,
          border: 1,
          borderColor: "rgba(255, 255, 255, 0.30)",
          borderRadius: "40px",
        }}
      >
        <Typography>Constructed</Typography>
      </Badge>

      <Badge
        sx={{
          px: 2,
          py: 0.4,
          border: 1,
          borderColor: "rgba(255, 255, 255, 0.30)",
          borderRadius: "40px",
        }}
      >
        <Typography>7/23 capacity</Typography>
      </Badge>
    </Stack>
  );
}
export function Location() {
  return (
    <Stack spacing={2} direction={{ xs: "column", sm: "row" }} sx={{ py: 4 }}>
      <Badge sx={{ display: { md: `none`, xs: `flex` } }}>
        <CalendarTodayIcon sx={{ width: { xs: "16px", sm: "auto" } }} />
        <Typography sx={{ fontSize: { md: `20px`, xs: `16px` }, pl: 2 }}>
          Sun July 23, 2023
        </Typography>
      </Badge>
      <Badge sx={{ display: { md: `none`, xs: `flex` } }}>
        <AccessTimeIcon sx={{ width: { xs: "16px", sm: "auto" } }} />
        <Typography sx={{ fontSize: { md: `20px`, xs: `16px` }, pl: 2 }}>
          Start at 11:00 AM
        </Typography>
      </Badge>
      <Badge>
        <BuildingIcon sx={{ width: { xs: "16px", sm: "auto" } }} />
        <Typography
          sx={{ fontSize: { md: `20px`, xs: `16px` }, pl: { xs: 1, sm: 2 } }}
        >
          Northeast Collectibles
        </Typography>
      </Badge>

      <Badge>
        <MapIcon sx={{ width: { xs: "16px", sm: "auto" } }} />

        <Typography sx={{ fontSize: { md: `20px`, xs: `16px` }, pl: 2 }}>
          Seymour, CT
        </Typography>
      </Badge>
    </Stack>
  );
}

//createRoot(document.querySelector("#app")).render(<App />);
